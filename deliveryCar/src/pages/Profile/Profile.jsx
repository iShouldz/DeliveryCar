import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/login/loginSlice";
import { deleteUser } from "../../store/login/loginActions";

const Profile = () => {
  const user = useSelector((state) => state.login.currentUser);
  const userId = useSelector((state) => state.login.idCurrentUser);
  const notifications = useSelector((state) => state.login.notifications);

  const dispatch = useDispatch();

  const handleDelete = async () => {
    deleteUser(userId);
    dispatch(userActions.handleUpdateLogin());
  };
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: '600px' }}
    >
      <Typography
        variant="h2"
        color="secondary.main"
        sx={{
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          padding: "30px",
        }}
      >
        Profile
      </Typography>

      <Box
        sx={{
          width: "50%",
          backgroundColor: "secondary.main",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          color="white"
          sx={{
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            padding: "30px",
          }}
        >
          Admin account: {user}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            color="white"
            sx={{
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
            //   padding: "30px",
            }}
          >
            Notification for this user
          </Typography>
          {notifications.map((not) => (
            <Typography key={Math.random()}>{not.message}</Typography>
          ))}
          {notifications.length === 1 && (
            <Typography key={Math.random()}>0 Notifications</Typography>
          )}
        </Box>

        <Box
          sx={{
            justifyContent: "center",
            padding: "30px",
            display: "flex",
            gap: "20px",
          }}
        >
          <Button
            variant="contained"
            onClick={() => dispatch(userActions.handleUpdateLogin())}
          >
            Logout
          </Button>
          <Button variant="contained" onClick={handleDelete}>
            Delete account
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
