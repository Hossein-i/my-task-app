import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

const FabComponent = ({ bottom = 16, to }) => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        position: "fixed",
        bottom,
        left: 0,
        right: 0,
        textAlign: "end",
        pointerEvents: "none",
      }}
    >
      <Fab
        sx={{ pointerEvents: "all" }}
        color="secondary"
        aria-label="add"
        LinkComponent={Link}
        to={to}
      >
        <Add />
      </Fab>
    </Container>
  );
};

export default FabComponent;
