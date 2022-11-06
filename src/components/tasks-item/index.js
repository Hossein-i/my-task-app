import { Alarm, DateRange, Description, Repeat } from "@mui/icons-material";
import {
  Checkbox,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useDispatch } from "react-redux";
import { put } from "../../redux/slice/tasks/asyncThunk";
import { Link } from "react-router-dom";

const TasksItemComponent = ({ task, category }) => {
  const dispatch = useDispatch();
  const labelId = `checkbox-list-secondary-label-${task.title}`;

  const handleOnClick = () =>
    dispatch(put({ ...task, completed: !task.completed }));

  return (
    <>
      <ListItem disablePadding>
        <ListItemIcon>
          <Checkbox
            onClick={handleOnClick}
            checked={task.completed}
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemButton
          component={Link}
          to={`/tasks/${task.id}`}
          sx={{ display: "grid" }}
        >
          <ListItemText id={labelId} primary={task.title} />
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            fontSize="16px"
            color="GrayText"
          >
            <Typography variant="body2">{category?.name}</Typography>
            {task.dueDate && <DateRange fontSize="inherit" />}
            {task.repeat && <Repeat fontSize="inherit" />}
            {task.remindAt && <Alarm fontSize="inherit" />}
            {task.note && <Description fontSize="inherit" />}
          </Stack>
        </ListItemButton>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default TasksItemComponent;
