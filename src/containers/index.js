import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import BottomNavigationContainer from "./bottom-navigation";

const Containers = () => {
  return (
    <Container maxWidth="sm">
      <Box pt={8} pb={16}>
        <Outlet />
      </Box>
      <BottomNavigationContainer />
    </Container>
  );
};

export default Containers;
