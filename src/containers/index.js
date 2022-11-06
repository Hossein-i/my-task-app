import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import BottomNavigationContainer from "./bottom-navigation";

const Containers = () => {
  return (
    <Container maxWidth='sm'>
      <Box py={8}>
        <Outlet />
      </Box>
      <BottomNavigationContainer />
    </Container>
  );
};

export default Containers;
