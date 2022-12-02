import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";

const AppBarComponent = ({ title, startAction, endAction, color }) => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        maxHeight: "3.5rem",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2,
      }}
    >
      <AppBar
        position="relative"
        variant="outlined"
        elevation={0}
        sx={{
          background: `linear-gradient(45deg, ${color})`,
          borderRadius: "0 0 1rem 1rem",
          color: `${color && "#ffffff"}`,
        }}
      >
        <Toolbar>
          {startAction}
          <Typography
            variant="h6"
            component="h2"
            textAlign="center"
            paddingRight={startAction && !endAction && 4}
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
