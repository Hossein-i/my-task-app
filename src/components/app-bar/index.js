import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";

const AppBarComponent = ({ title, startAction, endAction }) => {
  return (
    <Container
      maxWidth="sm"
      sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 2 }}
    >
      <AppBar
        position="static"
        variant="outlined"
        elevation={0}
        color="inherit"
        sx={{ borderRadius: "0 0 1rem 1rem" }}
      >
        <Toolbar>
          {startAction}
          <Typography
            variant="h6"
            component="h2"
            textAlign="center"
            paddingRight={startAction && !endAction && 6}
            sx={{ flexGrow: "1" }}
          >
            {title}
          </Typography>
          {endAction}
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default AppBarComponent;
