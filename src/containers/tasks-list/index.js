import { Collapse, Fade, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { TransitionGroup } from "react-transition-group";
import TasksItemComponent from "../../components/tasks-item";
import TasksListComponent from "../../components/tasks-list";
import TasksItemSkeleton from "../../skeletons/tasks-item";
import ImgSVG from "../../images/uncategorized.svg";

const filteredCategories = (categories, task) => {
  const category = categories.filter(
    (category) => category.id === task.categoryId
  );
  return category[0];
};

const TasksListContainer = ({ tasks, categories, isLoading }) => {
  return (
    <>
      <TasksListComponent>
        {isLoading ? (
          <>
            <TasksItemSkeleton />
            <TasksItemSkeleton />
          </>
        ) : (
          <TransitionGroup>
            {tasks.map((task) => (
              <Collapse key={task.id}>
                <TasksItemComponent
                  task={task}
                  category={filteredCategories(categories, task)}
                />
              </Collapse>
            ))}
          </TransitionGroup>
        )}
      </TasksListComponent>
      {(!isLoading && !tasks.length) && (
        <TransitionGroup>
          <Fade>
            <Stack alignItems="center" spacing={2}>
              <img src={ImgSVG} alt="Focus on your day" width="160" />
              <div>
                <Typography variant="h6" component="h4" textAlign="center">
                  Focus on your day
                </Typography>
                <Typography variant="body2" textAlign="center">
                  Get things done with My Task, a list that refreshes every day.
                </Typography>
              </div>
            </Stack>
          </Fade>
        </TransitionGroup>
      )}
    </>
  );
};

export default TasksListContainer;
