import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import AppBarComponent from "../../components/app-bar";
import FabComponent from "../../components/fab";
import CategoriesListContainer from "../categories-list";

const CategoriesContainer = () => {
  const { categories, isLoading } = useSelector((store) => store.categories);

  return (
    <Box pt={1}>
      <AppBarComponent title="Categories" />
      <CategoriesListContainer categories={categories} isLoading={isLoading} />
      <FabComponent bottom={72} to="/categories/new-category" />
    </Box>
  );
};

export default CategoriesContainer;
