import { Grid } from "@mui/material";

const CategoriesListComponent = ({ children }) => {
  return <Grid container spacing={1}>{children}</Grid>;
};

export default CategoriesListComponent;
