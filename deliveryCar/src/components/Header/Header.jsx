import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";
import logo from "../../assets/Logo.svg";
import userLogo from "../../assets/user-avatar.svg";
import notification from "../../assets/bell-icon.svg";
import notificationZero from "../../assets/bell-icon copy.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./styles.module.css";
import LoginModal from "../LoginModal/LoginModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/login/loginSlice";
import AlertAction from "../AlertAction/AlertAction";
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const Header = () => {
  const navigate = useNavigate();
  const [selectedUrl, setSelecteUrl] = useState("");
  const [selectValue, setSelectValue] = useState("");

  // const [stateLogin, setStateLogin] = useState(false);

  const [modalLoginControl, setModalLoginControl] = useState(false);
  const [modalSignupControl, setModalSignUpControl] = useState(false);

  const [dashboardControl, setDashboardControl] = useState(null);
  const [notificationsControl, setNotificationsControl] = useState(null);

  const isAuthenticated = useSelector((state) => state.login.isLogado);
  const notifications = useSelector((state) => state.login.notifications);
  const isNotification = useSelector((state) => state.login.newNotification);
  const dispatch = useDispatch();

  const handleGoTo = (url) => {
    navigate(`/${url}`);
    setSelecteUrl(url);
    setSelectValue(url);
  };

  const handleChange = (event, newValue) => {
    setSelectValue(newValue);
  };

  const handleResolveNotification = () => {
    dispatch(userActions.handleRemoveNotifications());
    dispatch(userActions.handleHideNotification());
  };
  return (
    <header>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "primary.background" }}
      >
        <Toolbar
          sx={{ justifyContent: "space-between", color: "primary.background" }}
        >
          <IconButton size="large" aria-label="Company Logo">
            <img src={logo} alt="Company logo" />
          </IconButton>

          <Tabs
            value={selectValue}
            onChange={handleChange}
            aria-label="Navigation bar"
            aria-labelledby="Navegation bar"
          >
            <Tab
              label="Home"
              aria-label="Home"
              sx={{
                color: selectedUrl === "" ? "secondary.main" : "primary.light",
                textTransform: "none",
              }}
              onClick={() => handleGoTo("")}
              value="Home"
              id="tab-home"
              data-testid="tab-home"
            />
            <Tab
              label="Getting a Taxi"
              value="Getting a Taxi"
              id="tab-getting-taxi"
              data-testid="tab-getting-taxi"
              aria-label="Getting a Taxi"
              onClick={() => handleGoTo("getTaxi")}
              sx={{
                color:
                  selectedUrl === "getTaxi"
                    ? "secondary.main"
                    : "primary.light",
                textTransform: "none",
              }}
            />
            <Tab
              label="Mobile App"
              sx={{
                color:
                  selectedUrl === "mobile-app"
                    ? "secondary.main"
                    : "primary.light",
                textTransform: "none",
              }}
              aria-label="Mobile App"
              onClick={() => handleGoTo("mobile-app")}
              value="Mobile App"
              id="tab-mobile-app"
              data-testid="tab-mobile-app"
            />
            <Tab
              label="Contact Us"
              sx={{
                color:
                  selectedUrl === "contact-us"
                    ? "secondary.main"
                    : "primary.light",
                textTransform: "none",
              }}
              aria-label="Contact Us"
              onClick={() => handleGoTo("contact-us")}
              value="Contact Us"
              id="tab-contact-us"
              data-testid="tab-contact-us"
            />
          </Tabs>
          <Box className={styles.userBar}>
            <IconButton
              size="large"
              aria-label="Notification icon"
              data-testid="Notification icon"
              onClick={() => setNotificationsControl((prevState) => !prevState)}
            >
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                // anchorEl={dashboardControl}
                open={Boolean(notificationsControl)}
                onClick={(e) => setNotificationsControl(event.currentTarget)}
                onClose={() => setNotificationsControl(null)}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={{ marginTop: "40px", marginRight: "400px" }}
              >
                {notifications.map((not) => (
                  <MenuItem key={Math.random()}> {not.message !== '' ? <> <LabelImportantIcon /> {not.message} </>  : ''}</MenuItem>
                ))}
                {notifications.length === 1 && (
                  <MenuItem key={Math.random()}> <ThumbUpAltIcon /> 0 Notificações</MenuItem>
                )}
                <MenuItem onClick={handleResolveNotification}>
                  <DeleteIcon fontSize="small" />
                  Clear notifications
                </MenuItem>
              </Menu>
              {isNotification && notifications.length > 1 ? (
                <img src={notification} alt="Notification icon" />
              ) : (
                <img src={notificationZero} alt="Notification icon" />
              )}
            </IconButton>
            <hr />

            <IconButton
              size="large"
              data-testid="User icon"
              aria-label="User icon"
              onClick={() => setDashboardControl((prevState) => !prevState)}
            >
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                // anchorEl={dashboardControl}
                open={Boolean(dashboardControl)}
                onClick={(event) => setDashboardControl(event.currentTarget)}
                onClose={() => setDashboardControl(null)}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={{ marginTop: "40px", marginRight: "400px" }}
              >
                <MenuItem onClick={() => handleGoTo("profile")}>
                  <PersonIcon /> Profile</MenuItem>
                <MenuItem onClick={() => handleGoTo("dashboard")}>
                  <DashboardIcon />
                  Dashboard
                </MenuItem>
                {!isAuthenticated && (
                  <MenuItem
                    onClick={() =>
                      setModalSignUpControl((prevState) => !prevState)
                    }
                  >
                    <ExitToAppIcon />
                    Sign-up
                  </MenuItem>
                )}
                {isAuthenticated ? (
                  <MenuItem
                    onClick={() => dispatch(userActions.handleUpdateLogin())}
                  >
                    <LogoutIcon />
                    Logout
                  </MenuItem>
                ) : (
                  <MenuItem
                    onClick={() =>
                      setModalLoginControl((prevState) => !prevState)
                    }
                  >
                    <LoginIcon />
                    Login
                  </MenuItem>
                )}
              </Menu>
              <img src={userLogo} alt="User icon" />
            </IconButton>

            <SignUpModal
              open={modalSignupControl}
              onClose={() => setModalSignUpControl((prevState) => !prevState)}
            />

            <LoginModal
              open={modalLoginControl}
              onClose={() => setModalLoginControl((prevState) => !prevState)}
            />

            <div
              style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                padding: 16,
                zIndex: 1000,
                justifyContent: "flex-end",
                display: "flex",
              }}
            >
              {isNotification && (
                <AlertAction
                  typeSeverity={
                    notifications[notifications.length - 1].typeSeverity
                  }
                  message={notifications[notifications.length - 1].message}
                />
              )}
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
