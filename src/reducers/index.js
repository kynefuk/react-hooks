import Action from '../actions';

const reducer = (state = [], action) => {
  switch (action.type) {
    case Action.CREATE_EVENT:
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      event.id = id;
      return [...state, { ...event }];
    case Action.DELETE_EVENT:
      const events = state.filter((event) => event.id !== action.id);
      return [...events];
    case Action.DELETE_ALL_EVENTS:
      return [];
    default:
      return state;
  }
};

export default reducer;
