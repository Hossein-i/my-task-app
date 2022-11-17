import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Skeleton,
} from "@mui/material";

const TasksItemSkeleton = () => {
  return (
    <Paper
      variant="outlined"
      sx={{ marginBottom: "0.5rem", borderRadius: "1rem", overflow: "hidden" }}
    >
      <ListItem>
        <ListItemIcon sx={{ minWidth: "42px", paddingLeft: "0.5rem" }}>
          <Skeleton variant="rounded" width={18} height={18} />
        </ListItemIcon>
        <ListItemText
          primary={<Skeleton variant="text" width="75%" />}
          secondary={<Skeleton variant="text" width="50%" />}
        />
      </ListItem>
    </Paper>
  );
};

export default TasksItemSkeleton;
