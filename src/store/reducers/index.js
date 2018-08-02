import {
  TEXT_INPUT,
  SET_MARKDOWN,
} from '../actions';

const initialState = {
  input: '',
};

const rootReducer = (state = initialState, action) => {
  const {
    input,
    defaultMarkdown,
  } = action;

  switch (action.type) {
    case TEXT_INPUT:
    return {
        ...state,
        input,
      }

    case SET_MARKDOWN:
    return {
        ...state,
        input: defaultMarkdown,
      }

    default:
      return state;
  }
};

export default rootReducer;
