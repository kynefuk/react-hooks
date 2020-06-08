import {EventAction} from '../actions';

export const eventReducer = (state = [], action) => {
  switch (action.type) {
    case EventAction.CREATE_EVENT:
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      event.id = id;
      return [...state, event];
    case EventAction.DELETE_EVENT:
      const events = state.filter((event) => event.id !== action.id);
      return [...events];
    case EventAction.DELETE_ALL_EVENTS:
      return [];
    default:
      return state;
  }
};

//export default eventReducer;