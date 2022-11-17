import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Containers from "./containers";
import HomeContainer from "./containers/home";
import CategoriesContainer from "./containers/categories";
import CategoryContainer from "./containers/category";
import TaskContainer from "./containers/task";
import SearchContainer from "./containers/search";
import SettingsContainer from "./containers/settings";
import NotFoundContainer from "./containers/not-found";
import { useDispatch } from "react-redux";
import useLocalStorage from "./hooks/localStorage";
import { categories } from "./redux/slice/categories/asyncThunk";
import { tasks } from "./redux/slice/tasks/asyncThunk";
import moment from "moment";
import NewCategoryContainer from "./containers/new-category";
import NewTaskContainer from "./containers/new-task";
import { Paper } from "@mui/material";

// const Containers = lazy(() => import("./containers"));
// <Suspense fallback={<LoadingComponent />}></Suspense>

function App() {
  const [once, setOnce] = useLocalStorage("once", false);
  const dispatch = useDispatch();

  // initialState
  useEffect(() => {
    if (once) {
      dispatch(categories());
      dispatch(tasks());
    } else {
      dispatch(
        categories([
          { id: 1, name: "Meeting", color: "#ddb4f6, #8dd0fc" },
          { id: 2, name: "Habits", color: "#f1e1c2, #fcbc98" },
          { id: 3, name: "Uncategorized", color: "#727a9a, #d8dbe9" },
        ])
      );
      dispatch(
        tasks([
          {
            id: 1,
            categoryId: 1,
            title: "Meeting with team",
            completed: false,
            remindAt: "",
            dueDate: moment().toISOString(),
            repeat: "",
            note: "",
            createdAt: moment().toISOString(),
            editedAt: moment().toISOString(),
          },
          {
            id: 2,
            categoryId: 2,
            title: "Learn English",
            completed: false,
            remindAt: "",
            dueDate: moment().toISOString(),
            repeat: "",
            note: "",
            createdAt: moment().toISOString(),
            editedAt: moment().toISOString(),
          },
        ])
      );
      setOnce(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Paper elevation={1} sx={{ height: "100vh", borderRadius: "0" }}>
      <Routes>
        <Route path="/" element={<Containers />}>
          <Route index element={<HomeContainer />} />
          <Route path="categories" element={<CategoriesContainer />} />
          <Route path="search" element={<SearchContainer />} />
          <Route path="settings" element={<SettingsContainer />} />
        </Route>
        <Route path="/categories/:id" element={<CategoryContainer />} />
        <Route
          path="/categories/new-category"
          element={<NewCategoryContainer />}
        />
        <Route path="/tasks/:id" element={<TaskContainer />} />
        <Route path="/tasks/new-task" element={<NewTaskContainer />} />
        <Route path="/not-found" element={<NotFoundContainer />} />
        <Route path="*" element={<NotFoundContainer />} />
      </Routes>
    </Paper>
  );
}

export default App;
