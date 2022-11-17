import { Alarm, DateRange, Description, Repeat } from "@mui/icons-material";
import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
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
    <Paper
      variant="outlined"
      sx={{ marginBottom: "0.5rem", borderRadius: "1rem", overflow: "hidden" }}
    >
      <ListItem disablePadding>
        <ListItemIcon sx={{ minWidth: "42px", paddingLeft: "0.5rem" }}>
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
            <Typography
              variant="caption"
              sx={{
                padding: "0.125rem 0.5rem",
                background: `linear-gradient(45deg, ${category?.color})`,
                borderRadius: "0.5rem",
                color: "#ffffff",
              }}
            >
              {category?.name}
            </Typography>
            {task.remindAt && <Alarm fontSize="inherit" />}
            {task.dueDate && <DateRange fontSize="inherit" />}
            {task.repeat && <Repeat fontSize="inherit" />}
            {task.note && <Description fontSize="inherit" />}
          </Stack>
        </ListItemButton>
      </ListItem>
    </Paper>
  );
};

export default TasksItemComponent;
