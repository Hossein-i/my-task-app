import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Container } from "@mui/system";
import TaskFormContainer from "../task-form";
import { useEffect } from "react";

const filteredTasks = (tasks, id) => {
  const task = tasks.filter((task) => task.id === Number(id));
  if (task[0]) return task[0];

  return "not-found";
};

const TaskContainer = () => {
  const { tasks, isLoading: isLoadingTasks } = useSelector(
    (store) => store.tasks
  );

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoadingTasks && filteredTasks(tasks, id) === "not-found")
      navigate("/not-found", { replace: true });
  }, [id, isLoadingTasks, navigate, tasks]);

  return (
    <Container maxWidth="sm">
      <Box pt={9}>
        {!isLoadingTasks && (
          <TaskFormContainer task={filteredTasks(tasks, id)} />
        )}
      </Box>
    </Container>
  );
};

export default TaskContainer;
