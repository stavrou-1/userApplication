import { ACTION_LOGOUT, ACTION_LOGIN, GET_USER } from '../actions/appActions';

export interface appReducerState {
    login: boolean,
    user?: string
}

const initialState: appReducerState = {
    login: true,
    user: 'Guest'
    /// more details and type checking... by defining interfaces
}

export function reducer(state = initialState, action): appReducerState {
    switch (action.type) {
        case ACTION_LOGOUT:
            return {
                ...state,
                login: false,
                user: action.payload
            }
        case ACTION_LOGIN:
            return {
                ...state,
                login: true,
                user: action.payload
            }
        case GET_USER:
            return {
                ...state,
                login: true,
                user: action.payload
            }
    }
    return state;
}