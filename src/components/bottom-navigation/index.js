import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import { Paper } from "@mui/material";

const BottomNavigationComponent = ({ actions }) => {
  const [value, setValue] = useState(window.location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
    >
      <Paper
        variant="outlined"
        elevation={0}
        sx={{ borderRadius: "1rem 1rem 0 0", overflow: "hidden" }}
      >
        <BottomNavigation value={value} onChange={handleChange}>
          {actions.map((action) => (
            <BottomNavigationAction
              key={action.id}
              label={action.label}
              value={action.to}
              icon={action.icon[value === action.to ? 0 : 1]}
              LinkComponent={Link}
              to={action.to}
              replace={true}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default BottomNavigationComponent;
