import { Card, FormControlLabel, Radio } from "@mui/material";

const CardRadioComponent = ({ label, value }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: "1rem",
        padding: "0.75rem 1rem",
        background: `linear-gradient(45deg, ${value})`,
      }}
    >
      <FormControlLabel
        value={value}
        sx={{
          width: "100%",
        }}
        label={label}
        control={<Radio />}
      />
    </Card>
  );
};

export default CardRadioComponent;
