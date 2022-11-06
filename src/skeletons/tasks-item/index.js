import {
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Skeleton,
} from "@mui/material";

const TasksItemSkeleton = () => {
  return (
    <>
      <ListItem>
        <ListItemIcon>
          <Skeleton variant="rounded" width={18} height={18} />
        </ListItemIcon>
        <ListItemText
          primary={<Skeleton variant="text" />}
          secondary={<Skeleton variant="text" width="75%" />}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default TasksItemSkeleton;
