import { ArrowBack } from "@mui/icons-material";
import { Badge, IconButton, Stack } from "@mui/material";
import { Container } from "@mui/system";
import { PickersDay } from "@mui/x-date-pickers";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AppBarComponent from "../../components/app-bar";
import DatePickerComponent from "../../components/date-picker";
import FabComponent from "../../components/fab";
import TasksListContainer from "../tasks-list";

const filteredCategories = (categories, id) => {
  const category = categories.filter((category) => category.id === Number(id));
  if (category[0]) return category[0];

  return "not-found";
};

const filteredTasks = (tasks, categoryId, date) =>
  tasks.filter(
    (task) =>
      task.categoryId === Number(categoryId) &&
      moment(task.dueDate).format("Y M D") === moment(date).format("Y M D")
  );

const highlightedDays = (tasks, categoryId) => {
  const filteredTasks = tasks.filter(
    (task) => task.categoryId === Number(categoryId)
  );

  const days = filteredTasks.map((task) =>
    moment(task.dueDate).format("Y M D")
  );

  return days;
};

const CategoryContainer = () => {
  const { categories, isLoading: isLoadingCategories } = useSelector(
    (store) => store.categories
  );
  const { tasks, isLoading: isLoadingTasks } = useSelector(
    (store) => store.tasks
  );
  const { id } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState(moment());

  useEffect(() => {
    // If the id is incorrect...
    if (
      !isLoadingCategories &&
      filteredCategories(categories, id) === "not-found"
    )
      navigate("/not-found", { replace: true });
  }, [categories, id, isLoadingCategories, navigate]);

  return (
    <Container maxWidth="sm">
      {!isLoadingCategories && (
        <AppBarComponent
          title={filteredCategories(categories, id).name}
          startAction={
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="back"
              onClick={() => {
                navigate(-1);
              }}
            >
              <ArrowBack />
            </IconButton>
          }
        />
      )}
      <Stack spacing={2} pt={8}>
        <DatePickerComponent
          name="date-filter"
          label="Date"
          value={date}
          onChange={(value) => setDate(value)}
          renderDay={(day, _value, DayComponentProps) => {
            const isSelected =
              highlightedDays(tasks, id).indexOf(moment(day).format("Y M D")) >=
              0;

            return (
              <Badge
                key={day.toString()}
                overlap="circular"
                variant="dot"
                color={isSelected ? "secondary" : "default"}
              >
                <PickersDay {...DayComponentProps} />
              </Badge>
            );
          }}
        />
        <TasksListContainer
          tasks={filteredTasks(tasks, id, date)}
          categories={categories}
          isLoading={isLoadingTasks}
        />
      </Stack>
      <FabComponent to="/tasks/new-task" />
    </Container>
  );
};

export default CategoryContainer;
