import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { StepsService } from '@app/services/steps.service';
import * as stepsActions from '../actions/steps.actions';
import { Action } from '@ngrx/store';

@Injectable()
export class StepsEffects {

  public loadSteps$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(stepsActions.LOAD_STEPS),
    mergeMap(() => this.stepsService.getAll()
      .pipe(
        map((response: any) => new stepsActions.LoadedStepsAction(response.steps)),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private stepsService: StepsService
  ) {}
}
