import * as steps from '../actions/steps.actions';

export interface State {
  steps: any;
}

const initialState: State = {
  steps: undefined,
};

export function reducer(state = initialState, action: steps.Actions): State {
  switch (action.type) {
    case steps.LOAD_STEPS: {
      return {
        steps: undefined
      };
    }

    case steps.LOADED_STEPS: {
      return {
        steps: action.payload
      };
    }
  }
}
