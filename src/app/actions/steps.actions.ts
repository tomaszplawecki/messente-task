import { Action } from '@ngrx/store';

export const LOAD_STEPS = '[Onboarding] Load Steps';
export const LOADED_STEPS = '[Onboarding] Loaded Steps';

export class LoadStepsAction implements Action {
  readonly type = LOAD_STEPS;
}
export class LoadedStepsAction implements Action {
  readonly type = LOADED_STEPS;

  constructor(public payload: any) { }
}

export type Actions
  = LoadStepsAction | LoadedStepsAction;
