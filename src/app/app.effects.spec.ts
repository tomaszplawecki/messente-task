import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { AppEffects } from '@app/app.effects';

describe('AppEffects', () => {
  // tslint:disable-next-line:prefer-const
  let actions$: Observable<any>;
  let effects: AppEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<AppEffects>(AppEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
