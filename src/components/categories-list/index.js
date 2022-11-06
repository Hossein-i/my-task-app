import { Grid } from "@mui/material";

const CategoriesListComponent = ({ children }) => {
  return <Grid container spacing={2}>{children}</Grid>;
};

export default CategoriesListComponent;
