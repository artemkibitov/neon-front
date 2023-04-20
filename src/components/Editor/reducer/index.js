export default function index(state, action) {
  switch (action.type) {
    case 'change_text': {
      return {
        ...state,
        text: action.text
      };
    }
    case 'select_size': {
      return {
        ...state,
        size: action.selectedSize
      };
    }
  }

  throw Error('unknown action' + action.type);
}
