import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const AlertDialogComponent = ({
  open,
  labelAgree,
  labelDisagree,
  colorAgree,
  colorDisagree,
  onClose,
  title,
  description,
}) => {
  const handleAgree = () => {
    onClose(true);
  };
  const handleDisagree = () => {
    onClose();
  };

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={handleDisagree}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDisagree} color={colorDisagree}>
          {labelDisagree}
        </Button>
        <Button onClick={handleAgree} color={colorAgree} autoFocus>
          {labelAgree}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialogComponent;
