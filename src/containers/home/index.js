import moment from "moment";
import { useSelector } from "react-redux";
import { Box, Stack, Typography } from "@mui/material";
import AppBarComponent from "../../components/app-bar";
import CategoriesListContainer from "../categories-list";
import TasksListContainer from "../tasks-list";
import FabComponent from "../../components/fab";

const slicedCategories = (categories) => categories.slice(0, 2);

const filteredTasks = (tasks) =>
  tasks.filter(
    (task) =>
      moment(task.dueDate).format("Y M D") === moment().format("Y M D") &&
      !task.completed
  );

const HomeContainer = () => {
  const { categories, isLoading: isLoadingCategories } = useSelector(
    (store) => store.categories
  );
  const { tasks, isLoading: isLoadingTasks } = useSelector(
    (store) => store.tasks
  );

  return (
    <>
      <AppBarComponent title="My Task" />
      <Stack spacing={2}>
        <Box>
          <Typography variant="h6" component="h3" py={1}>
            Categories
          </Typography>
          <CategoriesListContainer
            categories={slicedCategories(categories)}
            isLoading={isLoadingCategories}
          />
        </Box>
        <Box>
          <Typography variant="h6" component="h3" py={1}>
            Ongoing task
          </Typography>
          <TasksListContainer
            tasks={filteredTasks(tasks)}
            categories={categories}
            isLoading={isLoadingTasks}
          />
        </Box>
      </Stack>
      <FabComponent bottom={72} to="/tasks/new-task" />
    </>
  );
};

export default HomeContainer;
