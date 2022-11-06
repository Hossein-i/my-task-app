import { List } from "@mui/material";

const TasksListComponent = ({ children }) => {
  return (
    <List sx={{ width: "100%" }} disablePadding>
      {children}
    </List>
  );
};

export default TasksListComponent;
