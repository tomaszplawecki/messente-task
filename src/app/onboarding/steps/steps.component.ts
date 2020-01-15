import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as stepsActions from '../../actions/steps.actions';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  public steps$: Observable<any> = this.store.select((state) => state.steps.steps);

  constructor(
    private store: Store<{ steps: any }>
  ) {
  }

  ngOnInit() {
    this.store.dispatch({ type: stepsActions.LOAD_STEPS });
  }
}
