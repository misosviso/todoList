import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import NumbersIcon from "@mui/icons-material/Numbers";
import { todoItem } from "../types";
import { green, red } from "@mui/material/colors";
import { styled } from "@mui/system";

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
      sx={{ display: "flex", alignContent: "flex-start" }}
      secondaryAction={
        <Checkbox
          edge="end"
          onChange={handleCheckBox}
          checked={data.isCompleted}
          inputProps={{ "aria-labelledby": labelId }}
        />
      }
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
        <ListItemText
          sx={{ width: 80 }}
          inset={true}
          id={labelId}
          primary={"Title: " + data.title}
        />
        <ListItemText
          sx={{ width: 80 }}
          inset={true}
          primary={
            "Description: " + (data.description !== "" ? data.description : "-")
          }
        />
        <ListItemText
          sx={{ width: 80 }}
          inset={true}
          primary={"Deadline: " + data.deadLine.substring(0, 10)}
        />
        <ListItemText
          sx={{ width: 80 }}
          inset={true}
          primary={"Created at: " + data.createdAt.substring(0, 10)}
        />
      </ListItemButton>
    </ListItem>
  );
}
