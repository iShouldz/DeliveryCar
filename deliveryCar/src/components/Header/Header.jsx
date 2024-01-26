import {
  AppBar,
  Box,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  useTheme,
} from "@mui/material";
import logo from "../../assets/Logo.svg";
import userLogo from "../../assets/user-avatar.svg";
import notification from "../../assets/bell-icon.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./styles.module.css";
import LoginModal from "../LoginModal/LoginModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [selectedUrl, setSelecteUrl] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [stateLogin, setStateLogin] = useState(false);
  const isAuthenticated = useSelector((state) => state.login.isLogado);

  const handleGoTo = (url) => {
    navigate(`/${url}`);
    setSelecteUrl(url);
    setSelectValue(url);
  };

  const handleChange = (event, newValue) => {
    setSelectValue(newValue);
  };

  console.log(theme);

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
            />
            <Tab
              label="Getting a Taxi"
              value="Getting a Taxi"
              id="tab-getting-taxi"
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
            />
          </Tabs>
          <Box className={styles.userBar}>
            <IconButton size="large" aria-label="Notification icon">
              <img src={notification} alt="Notification icon" />
            </IconButton>
            <hr />

            <IconButton
              size="large"
              aria-label="User icon"
              onClick={() => setStateLogin((prevState) => !prevState)}
            >
              <img src={userLogo} alt="User icon" />
            </IconButton>
            {isAuthenticated ? (
              <SignUpModal
                open={stateLogin}
                onClose={() => setStateLogin((prevState) => !prevState)}
              />
            ) : (
              <LoginModal
                open={stateLogin}
                onClose={() => setStateLogin((prevState) => !prevState)}
              />
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
