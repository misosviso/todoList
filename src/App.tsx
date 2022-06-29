import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState } from "./store/rootStore";
import { setCount } from "./store/counter/counterAction";
import {
  loadTodos,
  updateTodo,
  createTodo,
} from "./store/dataLoader/todosActions";

import Home from "./components/Home";
import { todoItem } from "./types";

interface AppProps {
  set: (newCount: number) => void;
  load: (filter: string) => void;
  update: (id: number, data: todoItem) => void;
  create: (data: todoItem) => void;
}

const mapStateToProps = (state: AppState) => ({
  // @ts-ignore
  count: state.counter.count,
  // @ts-ignore
  todos: state.todoReducer,
});

const mapDispatchToProps = (dispatch: Dispatch): AppProps => ({
  set: (newCount: number) => dispatch(setCount(newCount)),
  load: (filter = "") => loadTodos(dispatch, filter),
  update: (id: number, data: todoItem) => updateTodo(dispatch, id, data),
  create: (data: todoItem) => createTodo(dispatch, data),
});

const App = (props: any) => {
  return <Home {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
