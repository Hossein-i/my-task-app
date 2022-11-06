import { useSelector } from "react-redux";
import AppBarComponent from "../../components/app-bar";
import FabComponent from "../../components/fab";
import CategoriesListContainer from "../categories-list";

const CategoriesContainer = () => {
  const { categories, isLoading } = useSelector((store) => store.categories);

  return (
    <>
      <AppBarComponent title="Categories" />
      <CategoriesListContainer categories={categories} isLoading={isLoading} />
      <FabComponent bottom={72} to='/categories/new-category' />
    </>
  );
};

export default CategoriesContainer;
