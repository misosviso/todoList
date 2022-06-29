import React from "react";
import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import { todoItem } from "../types";
import Box from "@mui/material/Box";
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import CheckIcon from "@mui/icons-material/Check";
import { green, red, grey } from "@mui/material/colors";

interface todoListProps {
  page: number;
  data: todoItem[];
  update: (id: number, data: todoItem) => void;
}

enum todoItemState {
  All,
  Completed,
  Uncompleted,
}

export default function TodoList(props: todoListProps) {
  const first = (props.page - 1) * 10;
  const last = props.page * 10;
  let { data } = props;

  const [sort, setSort] = React.useState("asc");
  const [type, setType] = React.useState(todoItemState.All);

  const filterCompleted = (element: todoItem) => {
    if (type === todoItemState.Completed) {
      return element.isCompleted;
    } else if (type === todoItemState.Uncompleted) {
      return !element.isCompleted;
    } else if (type === todoItemState.All) {
      return true;
    }
  };

  const handleSortButton = (evt: any) => {
    sort === "asc" ? setSort("desc") : setSort("desc");
    data = data.reverse();
  };

  const handleFilterButton = (evt: any) => {
    if (type === todoItemState.Completed) {
      setType(todoItemState.Uncompleted);
    } else if (type === todoItemState.Uncompleted) {
      setType(todoItemState.All);
    } else if (type === todoItemState.All) {
      setType(todoItemState.Completed);
    }
  };

  const getFilterBackground = () => {
    if (type === todoItemState.Completed) {
      return green[200];
    } else if (type === todoItemState.Uncompleted) {
      return red[200];
    } else if (type === todoItemState.All) {
      return "white";
    }
  };

  return (
    <Box>
      <List dense sx={{ width: "100%" }}>
        <ListItem sx={{ bgcolor: grey[300] }}>
          <IconButton
            onClick={handleSortButton}
            sx={
              sort === "asc" ? { background: "gray" } : { background: "white" }
            }
          >
            <SortIcon />
          </IconButton>
          <IconButton
            onClick={handleFilterButton}
            sx={{ background: getFilterBackground() }}
          >
            <CheckIcon />
          </IconButton>
          <ListItemText inset={true} primary={"title"} />
          <ListItemText inset={true} primary={"description"} />
          <ListItemText inset={true} primary={"deadline"} />
          <ListItemText inset={true} primary={"created at"} />
        </ListItem>

        {data
          .filter(filterCompleted)
          .slice(first, last)
          .map((todoItem: any) => {
            return <TodoItem data={todoItem} update={props.update} />;
          })}
      </List>
    </Box>
  );
}
