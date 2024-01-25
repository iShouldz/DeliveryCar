/* eslint-disable react/prop-types */
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { useState } from "react";

const TextFuildCar = ({ onClear, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextField
      {...props}
      color="secondary"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label={`clear input`}
              onClick={() => {onClear('')}}
              className={isFocused ? "focused" : ""}
            >
              <svg 
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8334 5.70874L14.6584 4.53374L10.0001 9.19207L5.34175 4.53374L4.16675 5.70874L8.82508 10.3671L4.16675 15.0254L5.34175 16.2004L10.0001 11.5421L14.6584 16.2004L15.8334 15.0254L11.1751 10.3671L15.8334 5.70874Z"
                  fill={isFocused ? "#FBA403" : "white"}
                  fillOpacity="0.56"
                />
              </svg>
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        color: "white",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "white",
          color: "white",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#FBA403 !important",
          color: "white !important",
        },
        "& input": {
          color: "white",
        },
        "& label": {
          color: "secondary.labelColor",
          "&.Mui-focused": {
            color: "#FBA403",
          },
          "&.MuiInputLabel-shrink": {
            color: "white",
            "&.Mui-focused": {
              color: "#FBA403",
            },
            "&.Mui-error": {
              color: "red",
            },
          },
        },
      }}
    />
  );
};

export default TextFuildCar;
