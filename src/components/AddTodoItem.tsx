import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import AdapterDateDayjs from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { Alert, Box, Divider, Snackbar } from "@mui/material";
import { Label } from "@mui/icons-material";

interface Props {
  create: (data: any) => void;
}

export default function AddTodoItem(props: Props) {
  const { create } = props;

  const [open, setOpen] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showFail, setShowFail] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDesc] = React.useState("");
  const [deadLine, setDeadline] = React.useState(new Date());

  const handleTitleInput = (evt: any) => {
    const input = evt.target.value;
    console.log(input);
    setTitle(input);
  };

  const handleDescInput = (evt: any) => {
    const input = evt.target.value;
    console.log(input);
    setDesc(input);
  };

  const handleDeadlineInput = (date: any) => {
    console.log(date);
    setDeadline(date);
  };

  const handleOpen = () => {
    setOpen(true);
    setShowFail(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    if (title === "") {
      setShowFail(true);
      return;
    }

    setShowFail(false);
    const data = {
      title,
      description,
      deadLine: deadLine.toISOString(),
      isCompleted: false,
      isDeleted: false,
      createdAt: new Date().toISOString(),
    };
    create(data);
    handleClose();
    setShowSuccess(true);
  };

  return (
    <div>
      <IconButton
        onClick={handleOpen}
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
      >
        <AddIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create todo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create todo, please fill in title, description and deadline
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="email"
            fullWidth
            variant="standard"
            onInput={handleTitleInput}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Description"
            type="email"
            fullWidth
            variant="standard"
            onInput={handleDescInput}
          />
          <Box>Deadline</Box>
          <LocalizationProvider dateAdapter={AdapterDateDayjs}>
            <DesktopDatePicker
              inputFormat="MM/DD/YYYY"
              value={deadLine}
              onChange={handleDeadlineInput}
              renderInput={(params) => {
                return <TextField {...params} />;
              }}
              views={["day"]}
              showDaysOutsideCurrentMonth
              clearable
            />
          </LocalizationProvider>
          {showFail && (
            <DialogContentText color="red">
              You have to provide a title in order to create a new ToDo
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreate}>Create</Button>
        </DialogActions>
      </Dialog>
      {showSuccess && (
        <Snackbar
          open={showSuccess}
          autoHideDuration={6000}
          onClose={() => setShowSuccess(false)}
        >
          <Alert
            onClose={() => setShowSuccess(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            New todo item is being added
          </Alert>
        </Snackbar>
      )}
    </div>
  );
}
