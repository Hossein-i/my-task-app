import { TextField } from "@mui/material";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

const DatePickerComponent = ({
  name,
  value,
  helperText,
  error,
  required,
  ...others
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <MobileDatePicker
        renderInput={(props) => (
          <TextField
            {...props}
            helperText={helperText}
            error={error}
            required={required}
          />
        )}
        id={name}
        name={name}
        value={value}
        inputFormat="DD MMMM, YYYY"
        componentsProps={{
          actionBar: {
            actions: ["today", "accept"],
          },
        }}
        {...others}
      />
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
