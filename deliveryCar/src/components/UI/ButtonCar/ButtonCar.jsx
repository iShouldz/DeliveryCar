/* eslint-disable react/prop-types */
import { Button } from "@mui/material"

const ButtonCar = ({children, ...props}) => {
  return (
    <Button {...props} color="secondary" variant="contained" sx={{borderRadius: '6px'}}>
        {children}
    </Button>
  )
}

export default ButtonCar