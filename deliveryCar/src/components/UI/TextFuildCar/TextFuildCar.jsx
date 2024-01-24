import { TextField } from "@mui/material";

const TextFuildCar = ({ ...props }) => {
  return (
    <TextField
      {...props}
      color="secondary"
      sx={{
        color: 'white',
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "white",
          color: "white",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "white",
          color: "white",
        },
        "& input": {
          color: "white"
        },
        "& label": {
          color: "white",
        },
      }}
    />
  );
};

export default TextFuildCar;
