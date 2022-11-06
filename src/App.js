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
import meetingSVG from "./images/meeting.svg";
import habitsSVG from "./images/habits.svg";
import uncategorizedSVG from "./images/uncategorized.svg";
import NewCategoryContainer from "./containers/new-category";

// const Containers = lazy(() => import("./containers"));
// <Suspense fallback={<LoadingComponent />}></Suspense>

function App() {
  const dispatch = useDispatch();
  const [once, setOnce] = useLocalStorage("once", false);

  // initialState
  useEffect(() => {
    if (once) {
    } else {
      dispatch(
        categories([
          { id: 1, name: "Meeting", image: meetingSVG },
          { id: 2, name: "Habits", image: habitsSVG },
          { id: 3, name: "Uncategorized", image: uncategorizedSVG },
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
    dispatch(categories());
    dispatch(tasks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
      <Route path="/not-found" element={<NotFoundContainer />} />
      <Route path="*" element={<NotFoundContainer />} />
    </Routes>
  );
}

export default App;
