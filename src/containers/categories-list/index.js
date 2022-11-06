import CategoriesItemComponent from "../../components/categories-item";
import CategoriesListComponent from "../../components/categories-list";
import CategoriesItemSkeleton from "../../skeletons/categories-item";

const CategoriesListContainer = ({ categories, isLoading }) => {
  return (
    <CategoriesListComponent>
      {isLoading ? (
        <>
          <CategoriesItemSkeleton />
          <CategoriesItemSkeleton />
        </>
      ) : (
        categories.map((category) => (
          <CategoriesItemComponent key={category.id} category={category} />
        ))
      )}
    </CategoriesListComponent>
  );
};

export default CategoriesListContainer;
