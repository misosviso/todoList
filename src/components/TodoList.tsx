import React from "react";
import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import { todoItem } from "../types";

interface todoListProps {
  page: number;
  data: todoItem[];
  update: (id: number, data: todoItem) => void;
}

export default function TodoList(props: todoListProps) {
  const first = (props.page - 1) * 10;
  const last = props.page * 10;

  return (
    <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
      {props.data.slice(first, last).map((todoItem: any) => {
        return <TodoItem data={todoItem} update={props.update} />;
      })}
    </List>
  );
}
