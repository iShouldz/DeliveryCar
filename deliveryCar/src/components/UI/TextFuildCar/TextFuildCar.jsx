import { TextField } from '@mui/material'

const TextFuildCar = ({...props}) => {
  return (
    <TextField {...props} color="secondary" sx={{
        '&:not(:focus)': {
          borderColor: 'secondary',
        },
      }}
    />
  )
}

export default TextFuildCar