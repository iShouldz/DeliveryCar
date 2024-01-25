/* eslint-disable react/prop-types */
import { Button } from "@mui/material";

const ButtonCar = ({ children, sizeW, sizeH, color, ...props }) => {
  return (
    <Button
      {...props}
      color="secondary"
      variant="contained"
      sx={{ borderRadius: "6px", color: color, width: sizeW, heigth: sizeH }}
      aria-label={children}
    >
      {children}
    </Button>
  );
};

export default ButtonCar;
