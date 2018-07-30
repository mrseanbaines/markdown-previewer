import {
  TEXT_INPUT
} from '../actions'

const initialState = {
  input: '',
};

const rootReducer = (state = initialState, action) => {
  const { input } = action;

  switch (action.type) {
    case TEXT_INPUT:
    return {
        ...state,
        input,
      }

    default:
      return state;
  }
};

export default rootReducer;
