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
  labelOk,
  labelCancel,
  colorOk,
  colorCancel,
  onOk,
  onCancel,
  title,
  description,
}) => {
  const handleOk = () => {
    onOk();
  };
  const handleCancel = () => {
    onCancel();
  };

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={handleCancel}
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
        <Button onClick={handleCancel} color={colorCancel}>
          {labelCancel}
        </Button>
        <Button onClick={handleOk} color={colorOk} autoFocus>
          {labelOk}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialogComponent;
