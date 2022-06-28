import { LOAD_TODOS, UPDATE_TODO } from "./models/actions";

// @ts-ignore
const initialState = [];

// @ts-ignore
function todoReducer(todos = initialState, action) {
    const { type, payload } = action;
  switch (type) {
    case LOAD_TODOS:
      return payload;
    case UPDATE_TODO:
      console.log('payload', payload)
      return todos.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            ...payload,
          };
        } else {
          return todo;
        }
      });
    default:
      return todos;
  }
}

export default todoReducer;