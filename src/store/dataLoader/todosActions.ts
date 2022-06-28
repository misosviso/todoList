import { CREATE_TODO, LOAD_TODOS, UPDATE_TODO } from "./models/actions";
import axios from "axios";
import { Dispatch } from "redux";
import { todoItem } from "../../types";

export const loadTodos = async (dispatch: Dispatch) => {
  console.log("loadin todos");

  try {
    const res = await axios.get(
      "https://62b6cca9491a19c97ae9942b.mockapi.io/api/v1/todo"
    );
    dispatch({
      type: LOAD_TODOS,
      payload: res.data,
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
  console.log(
    `updatin' ${id} to ${data.isCompleted ? "completed" : "uncompleted"}`
  );

  try {
    const res = await axios.put(
      `https://62b6cca9491a19c97ae9942b.mockapi.io/api/v1/todo/${id}`,
      data
    );
    dispatch({
      type: UPDATE_TODO,
      payload: data,
    });
    console.log(res);
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
