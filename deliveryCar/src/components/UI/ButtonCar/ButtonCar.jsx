/* eslint-disable react/prop-types */
import { Button } from "@mui/material"

const ButtonCar = ({children, color, ...props}) => {
  return (
    <Button {...props} color="secondary" variant="contained" sx={{borderRadius: '6px', color: color}}>
        {children}
    </Button>
  )
}

export default ButtonCar