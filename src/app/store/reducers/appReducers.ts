import { ACTION_LOGOUT, ACTION_LOGIN } from '../actions/appActions';

export interface appReducerState {
    login: boolean,
    user?: string
}

const initialState: appReducerState = {
    login: true,
    user: 'mayo'
    /// more details and type checking... by defining interfaces
}

export function reducer(state = initialState, action): appReducerState {
    switch (action.type) {
        case ACTION_LOGOUT:
            return {
                ...state,
                login: false
            }
        case ACTION_LOGIN:
            return {
                ...state,
                login: true,
                user: action.payload
            }
    }
    return state;
}