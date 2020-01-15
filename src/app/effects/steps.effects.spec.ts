import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, ReplaySubject } from 'rxjs';
import { StepsEffects } from '@app/effects/steps.effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MockStepsApi } from '@app/mock-server/mock-steps-api';
import { StepsService } from '@app/services/steps.service';
import { LoadStepsAction, LoadedStepsAction } from '@app/actions/steps.actions';

const mock = {
  steps: {
    hasCreatedSenderName: true,
    hasAddedCompanyInfo: false,
    accountFullyOperational: false
  }
};

describe('StepsEffects', () => {
  // tslint:disable-next-line:prefer-const
  let effects: StepsEffects;
  let actions$: ReplaySubject<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        StepsEffects,
        provideMockActions(() => actions$),
        {
          provide: HTTP_INTERCEPTORS,
          useClass: MockStepsApi,
          multi: true
        },
        {
          provide: StepsService,
          useValue: jasmine.createSpyObj('stepsService', ['getAll']),
        },
      ]
    });

    effects = TestBed.get<StepsEffects>(StepsEffects);
  });

  beforeEach(() => {
    const stepsEffects = TestBed.get(StepsEffects);
    const stepsService = TestBed.get(StepsService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadSteps$', () => {
    beforeEach(() => {
      actions$ = new ReplaySubject(1);
      actions$.next(new LoadStepsAction());
    });

    it('should return a steps on success', () => {
      effects.loadSteps$.subscribe(resultAction => {
        expect(resultAction).toEqual(new LoadedStepsAction(mock));
      });
    });
  });
});
