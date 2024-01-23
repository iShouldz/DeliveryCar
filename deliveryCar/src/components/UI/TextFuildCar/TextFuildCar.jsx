import { TextField } from "@mui/material";

const TextFuildCar = ({ ...props }) => {
  return (
    <TextField
      {...props}
      color='secondary'
      sx={{
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "white"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "white",
        },
      }}
    />
  );
};

export default TextFuildCar;
