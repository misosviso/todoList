import React, { useState, useEffect } from "react";
import { Box, Pagination } from "@mui/material";
import TodoList from "./TodoList";
import TopBar from "./TopBar";
import { todoItem } from "../types";

interface Props {
  set: (newCount: number) => void;
  load: (filter: string) => void;
  update: (id: number, data: todoItem) => void;
  create: (data: todoItem) => void;
  count: number;
  todos: any;
}

export default function Home(props: Props) {
  const { set, count, load, update, create, todos } = props;
  const pageCount = Math.ceil(todos.length / 10);

  useEffect(() => {
    load("");
  }, []);

  // @ts-ignore
  function handleChangePage(evt, page) {
    set(page);
  }

  return (
    <Box>
      <TopBar load={load} create={create} />
      <TodoList data={todos} update={update} page={count} />
      <Pagination onChange={handleChangePage} count={pageCount} page={count} />
    </Box>
  );
}
