export const stylesFormSX = {
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
            color: "white",
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
}

export const switchFormSX = {
    display: "flex",
                  justifyContent: "space-between",
                  margin: 0,
                  "& .MuiSwitch-switchBase": {
                    "&.Mui-checked": {
                      color: "#fff",
                      "& + .MuiSwitch-track": {
                        opacity: 0.3,
                        backgroundColor: "secondary.main",
                      },
                    },
                  },
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: "secondary.main",
                  },
                  "& .MuiFormControlLabel-label": {
                    color: "white",
                  },
}