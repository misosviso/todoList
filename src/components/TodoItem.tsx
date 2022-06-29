import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import NumbersIcon from "@mui/icons-material/Numbers";
import { todoItem } from "../types";
import { green, red } from "@mui/material/colors";

interface Props {
  data: todoItem;
  update: (id: number, data: todoItem) => void;
}

export default function TodoItem(props: Props) {
  const { data } = props;
  const labelId = `checkbox-list-secondary-label-${data.title}`;

  function handleCheckBox() {
    data.isCompleted = !data.isCompleted;
    props.update(data.id, data);
  }

  return (
    <ListItem
      divider={true}
      key={data.title}
      alignItems="center"
      secondaryAction={
        <Checkbox
          edge="end"
          onChange={handleCheckBox}
          checked={data.isCompleted}
          inputProps={{ "aria-labelledby": labelId }}
        />
      }
      // disablePadding
    >
      <ListItemButton>
        <ListItemAvatar>
          {data.isCompleted ? (
            <Avatar sx={{ bgcolor: green[200] }}>
              <NumbersIcon />
            </Avatar>
          ) : (
            <Avatar sx={{ bgcolor: red[200] }}>
              <NumbersIcon />
            </Avatar>
          )}
        </ListItemAvatar>
        <ListItemText inset={true} id={labelId} primary={data.title} />
        <ListItemText inset={true} primary={data.description} />
        <ListItemText inset={true} primary={data.deadLine.substring(0, 10)} />
        <ListItemText inset={true} primary={data.createdAt.substring(0, 10)} />
      </ListItemButton>
    </ListItem>
  );
}
