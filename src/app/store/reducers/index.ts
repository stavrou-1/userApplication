import { reducer, appReducerState } from './appReducers';
import { createTeamReducer, createTeamState } from './teamReducer';
import { ActionReducerMap } from '@ngrx/store';

interface AppState {
    appReducer: appReducerState,
    teamReducer: createTeamState
}

export const reducers: ActionReducerMap<AppState> = {
    appReducer: reducer,
    teamReducer: createTeamReducer
}