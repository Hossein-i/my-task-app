import { Grid, Skeleton } from "@mui/material";

const CategoriesItemSkeleton = () => {
  return (
    <Grid item xs={6}>
      <Skeleton
        variant="rectangular"
        width="100%"
        height={58}
        sx={{ borderRadius: "1rem" }}
      />
    </Grid>
  );
};

export default CategoriesItemSkeleton;
