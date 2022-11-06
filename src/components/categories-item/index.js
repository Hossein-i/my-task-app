import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const CategoriesItemComponent = ({ category: { id, name, image } }) => {
  return (
    <Grid item xs={6}>
      <Card variant="outlined" sx={{ borderRadius: "1rem" }}>
        <CardActionArea LinkComponent={Link} to={`/categories/${id}`}>
          <CardMedia
            component="img"
            height="180"
            image={image}
            alt={name}
            sx={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography variant="subtitle1" component="h4">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CategoriesItemComponent;
