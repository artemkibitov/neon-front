'use strict';

const createInitialEditorState = (state) => {
  state.text = state.text.length ? state.text : 'твій текст'
}
