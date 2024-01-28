/* eslint-disable react/prop-types */
import { Alert, AlertTitle, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/login/loginSlice";

const AlertAction = ({ typeSeverity, message }) => {
  const dispatch = useDispatch();
  // console.log(typeSeverity, message)
  return (
    <Alert
      sx={{ maxWidth: "400px", alignItems: 'center'}}
      severity={typeSeverity}
      action={
        <Button
          color="inherit"
          size="small"
          SX={{display: 'flex'}}
          onClick={() => {
            dispatch(userActions.handleHideNotification());
          }}
        >
          DISPENSAR
        </Button>
      }
    >
      <AlertTitle>
        {typeSeverity}
      </AlertTitle>
      {message}
    </Alert>
  );
};

export default AlertAction;
