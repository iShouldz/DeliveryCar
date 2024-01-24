/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";

const TextFieldDisplay = ({ value, label }) => {
  return (
    <TextField
      readOnly={true}
      value={value}
      label={label}
      sx={{
        color: "white",
        "& input": {
          color: "white",
        },
        "&:read-only": {
          color: "primary.light",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "secondary.main",
            color: "white",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "secondary.main",
            color: "white",
          },
          "& label": {
            color: "secondary.main",
          },
        },
      }}
    />
  );
};

export default TextFieldDisplay;
