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
import styles from './styles.module.css'

const Header = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [selectedUrl, setSelecteUrl] = useState("");

  const handleGoTo = (url) => {
    navigate(`/${url}`);
    setSelecteUrl(url);
  };

  console.log(theme);

  return (
    <header>
      <AppBar position="static" elevation={0} sx={{backgroundColor: 'primary.background' }}>
        <Toolbar sx={{ justifyContent: "space-between", color: 'primary.background' }}>
          <IconButton
            size="large"
            aria-controls="headerMenu"
            aria-haspopup="true"
          >
            <img src={logo} alt="Company logo" />
          </IconButton>

          <Tabs id="headerMenu" sx={{ display: "flex" }}>
            <Tab
              label="Home"
              value="Home"
              sx={{
                color: selectedUrl === "" ? "secondary.main" : "primary.light",
                textTransform: "none",
              }}
              onClick={() => handleGoTo("")}
            />

            <Tab
              label="Getting a Taxi"
              sx={{
                color:
                  selectedUrl === "getTaxi"
                    ? "secondary.main"
                    : "primary.light",
                textTransform: "none",
              }}
              value="Getting a Taxi"
            />
            {/*getting a taxi pode disparar um modal explicando */}

            <Tab
              label="Mobile App"
              value="Mobile App"
              sx={{
                color:
                  selectedUrl === "mobile-app"
                    ? "secondary.main"
                    : "primary.light",
                textTransform: "none",
              }}
              onClick={() => handleGoTo("mobile-app")}
            />

            <Tab
              label="Contact Us"
              value="Contact Us"
              sx={{
                color:
                  selectedUrl === "contact-us"
                    ? "secondary.main"
                    : "primary.light",
                textTransform: "none",
              }}
              onClick={() => handleGoTo("contact-us")}
            />
          </Tabs>

          <Box className={styles.userBar}>
            <IconButton
              size="large"
              aria-controls="headerMenu"
              aria-haspopup="true"
            >
              <img src={notification} alt="Notification icon" />
            </IconButton>
            <hr />
            
            <IconButton
              size="large"
              aria-controls="headerMenu"
              aria-haspopup="true"
            >
              <img src={userLogo} alt="User icon" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
