import { List, ListItem, ListItemText, Paper } from "@mui/material";
import { useContext, useState } from "react";
import AppBarComponent from "../../components/app-bar";
import ConfirmationDialogComponent from "../../components/confirmation-dialog";
import { CustomThemeContext } from "../../theme";
import { capitalize } from "../../utils/Capitalize";

const SettingsContainer = () => {
  const { localTheme, colorMode } = useContext(CustomThemeContext);
  const [isOpenThemeDialog, setIsOpenThemeDialog] = useState(false);

  const handleClose = (newValue) => {
    setIsOpenThemeDialog(false);

    if (newValue) {
      colorMode.changeMode(newValue);
    }
  };

  return (
    <>
      <AppBarComponent title="Settings" />
      <Paper
        variant="outlined"
        sx={{ borderRadius: "1rem", overflow: "hidden" }}
      >
        <List component="div" role="group">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="theme-menu"
            aria-label="theme"
            onClick={() => {
              setIsOpenThemeDialog(true);
            }}
          >
            <ListItemText primary="Theme" secondary={capitalize(localTheme)} />
          </ListItem>
          <ConfirmationDialogComponent
            id="theme-menu"
            onClose={handleClose}
            value={localTheme}
            open={isOpenThemeDialog}
            title="Theme"
            labelAgree="Ok"
            labelDisagree="Cancel"
            options={["System", "Light", "Dark"]}
          />
        </List>
      </Paper>
    </>
  );
};

export default SettingsContainer;
