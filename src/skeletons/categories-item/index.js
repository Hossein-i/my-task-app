import { Card, CardContent, Grid, Skeleton } from "@mui/material";

const CategoriesItemSkeleton = () => {
  return (
    <Grid item xs={6}>
      <Card variant="outlined" sx={{ borderRadius: "1rem" }}>
        <Skeleton variant="rectangular" width="100%" height={180} />
        <CardContent>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CategoriesItemSkeleton;
