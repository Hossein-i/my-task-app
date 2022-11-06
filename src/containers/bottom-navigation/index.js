import {
  Category,
  CategoryOutlined,
  Home,
  HomeOutlined,
  Search,
  SearchOutlined,
  Settings,
  SettingsOutlined,
} from "@mui/icons-material";
import BottomNavigationComponent from "../../components/bottom-navigation";

const BottomNavigationContainer = () => {
  const actions = [
    {
      id: "action-0",
      label: "Home",
      icon: [<Home />, <HomeOutlined />],
      to: "/",
    },
    {
      id: "action-1",
      label: "Categories",
      icon: [<Category />, <CategoryOutlined />],
      to: "/categories",
    },
    {
      id: "action-2",
      label: "Search",
      icon: [<Search />, <SearchOutlined />],
      to: "/search",
    },
    {
      id: "action-3",
      label: "Settings",
      icon: [<Settings />, <SettingsOutlined />],
      to: "/settings",
    },
  ];

  return <BottomNavigationComponent actions={actions} />;
};

export default BottomNavigationContainer;
