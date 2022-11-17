import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const SelectComponent = ({
  name,
  label,
  value,
  onChange,
  items,
  error,
  helperText,
  required,
}) => {
  return (
    <FormControl fullWidth required={required}>
      <InputLabel id={name + "-label"}>{label}</InputLabel>
      <Select
        labelId={name + "-label"}
        id={name}
        name={name}
        label={label}
        value={value}
        onChange={onChange}
      >
        {items.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default SelectComponent;
