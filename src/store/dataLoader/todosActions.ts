import { CREATE_TODO, LOAD_TODOS, UPDATE_TODO } from "./models/actions";
import axios from "axios";
import { Dispatch } from "redux";
import { todoItem } from "../../types";

export const loadTodos = async (dispatch: Dispatch, filter: string) => {
  try {
    const res = await axios.get(
      "https://62b6cca9491a19c97ae9942b.mockapi.io/api/v1/todo"
    );
    dispatch({
      type: LOAD_TODOS,
      payload: {
        data: res.data,
        filter: filter,
      },
      // payload: filterData(filter, res.data),
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateTodo = async (
  dispatch: Dispatch,
  id: number,
  data: todoItem
) => {
  try {
    const res = await axios.put(
      `https://62b6cca9491a19c97ae9942b.mockapi.io/api/v1/todo/${id}`,
      data
    );
    dispatch({
      type: UPDATE_TODO,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const createTodo = async (dispatch: Dispatch, data: todoItem) => {
  try {
    const res = await axios.post(
      `https://62b6cca9491a19c97ae9942b.mockapi.io/api/v1/todo`,
      data
    );
    dispatch({
      type: CREATE_TODO,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
