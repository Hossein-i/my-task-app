import { TextField } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

const DateTimePickerComponent = ({
  name,
  value,
  helperText,
  error,
  ...others
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateTimePicker
        renderInput={(props) => (
          <TextField
            {...props}
            variant="filled"
            helperText={helperText}
            error={error}
          />
        )}
        id={name}
        name={name}
        value={value}
        inputFormat="DD MMMM, YYYY - hh:mm A"
        componentsProps={{
          actionBar: {
            actions: ["clear", "accept"],
          },
        }}
        {...others}
      />
    </LocalizationProvider>
  );
};

export default DateTimePickerComponent;
