import {
  ActionReducerMap, createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '@env/environment';
import * as fromSteps from './steps.reducer';


export interface State {
  steps: fromSteps.State;
}

export const reducers: ActionReducerMap<State, any> = {
  steps: fromSteps.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
