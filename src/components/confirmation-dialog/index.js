import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useEffect, useState } from "react";

const ConfirmationDialogComponent = ({
  onClose,
  value: valueProp,
  open,
  title,
  options,
  labelAgree,
  labelDisagree,
  ...other
}) => {
  const [value, setValue] = useState(valueProp);

  useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [open, valueProp]);

  const handleAgree = () => {
    onClose(value);
  };
  const handleDisagree = () => {
    onClose();
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Dialog fullWidth maxWidth="sm" open={open} {...other}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <RadioGroup
          aria-label={title}
          name={title}
          value={value}
          onChange={handleChange}
        >
          {options.map((option) => (
            <FormControlLabel
              key={option}
              value={option.toLowerCase()}
              label={option}
              control={<Radio />}
            />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDisagree}>{labelDisagree}</Button>
        <Button onClick={handleAgree}>{labelAgree}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialogComponent;
