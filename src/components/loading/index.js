import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

const LoadingComponent = () => {
  return (
    <Box textAlign="center" p={2}>
      <CircularProgress />
    </Box>
  );
};

export default LoadingComponent;
