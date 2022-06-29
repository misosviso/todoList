import { todoItem } from "../../types";
import { LOAD_TODOS, UPDATE_TODO } from "./models/actions";

// @ts-ignore
const initialState = [];

function filterData(filter: string, data: todoItem[]) {
  const filteredData: todoItem[] = [];
  const lcFilter = filter.toLowerCase();

  data.forEach((item: todoItem) => {
    if (item.title.toLowerCase().indexOf(lcFilter) !== -1) {
      filteredData.push(item);
    } else if (item.description.toLowerCase().indexOf(lcFilter) !== -1) {
      filteredData.push(item);
    }
  });

  return filteredData;
}

// @ts-ignore
function todoReducer(todos = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_TODOS:
      console.log(payload.filter);
      const filtered = filterData(payload.filter, payload.data);
      return filtered;
    case UPDATE_TODO:
      console.log("payload", payload);
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
