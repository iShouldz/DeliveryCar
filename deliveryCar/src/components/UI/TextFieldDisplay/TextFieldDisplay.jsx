/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";

const TextFieldDisplay = ({ value, label }) => {
  return (
    <TextField
      value={value}
      label={label}
      InputProps={{
        readOnly: true,
      }}
      variant="filled"
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
        },backgroundColor: "#282828"
      }}
    />
  );
};

export default TextFieldDisplay;
