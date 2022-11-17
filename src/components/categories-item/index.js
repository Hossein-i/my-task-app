import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const CategoriesItemComponent = ({ category: { id, name, color } }) => {
  return (
    <Grid item xs={6}>
      <Button
        fullWidth
        variant="outlined"
        color="inherit"
        sx={{
          padding: "1rem",
          background: `linear-gradient(45deg, ${color})`,
          borderRadius: "1rem",
          color: "#ffffff",
        }}
        LinkComponent={Link}
        to={`/categories/${id}`}
      >
        {name}
      </Button>
    </Grid>
  );
};

export default CategoriesItemComponent;
