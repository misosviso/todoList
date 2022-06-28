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

interface Props {
  data: todoItem;
  update: (id: number, data: todoItem) => void;
}

export default function TodoItem(props: Props) {
  const { data } = props;
  const [checked, setChecked] = React.useState(data.isCompleted);
  const labelId = `checkbox-list-secondary-label-${data.title}`;

  function handleCheckBox() {
    data.isCompleted = !data.isCompleted;
    props.update(data.id, data);
    setChecked(!checked);
  }

  return (
    <ListItem
      key={data.title}
      secondaryAction={
        <Checkbox
          edge="end"
          onChange={handleCheckBox}
          checked={checked}
          inputProps={{ "aria-labelledby": labelId }}
        />
      }
      disablePadding
    >
      <ListItemButton>
        <ListItemAvatar>
          <Avatar>
            <NumbersIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText id={labelId} primary={data.title} />
      </ListItemButton>
    </ListItem>
  );
}
