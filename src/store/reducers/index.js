import {
  TEXT_INPUT
} from '../actions'

const initialState = {
  input: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEXT_INPUT:
      return {
        ...state,
        input: state.input + 1
      }

    default:
      return state;
  }
};

export default rootReducer;
