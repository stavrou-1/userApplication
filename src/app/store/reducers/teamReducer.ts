import { CREATE_TEAM, FETCH_TEAM, FETCH_TEAM_DETAILS } from '../actions/appActions';

export interface createTeamState {
    team?: any
}

const initialState: createTeamState = {
    team: []
}

export function createTeamReducer(state = initialState, action): createTeamState {
    switch (action.type) {
        case FETCH_TEAM:
            return {
                ...state,
                team: action.payload
            };
        case FETCH_TEAM_DETAILS:
            return {
                ...state,
                team: action.payload
            }
        case CREATE_TEAM:
            return {
                ...state,
                team: action.payload
            };
        default:
            return state;
    }
}

