export const TEXT_INPUT = 'TEXT_INPUT';
export const SET_MARKDOWN = 'SET_MARKDOWN';

export const inputText = input => ({
  type: TEXT_INPUT,
  input,
});

export const setDefaultMarkdown = defaultMarkdown => ({
  type: SET_MARKDOWN,
  defaultMarkdown,
});
