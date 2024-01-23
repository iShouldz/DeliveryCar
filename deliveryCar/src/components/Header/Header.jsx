import { AppBar, Box, IconButton, Tab, Tabs, Toolbar } from "@mui/material";
import logo from "../../assets/Logo.svg";
import userLogo from "../../assets/user-avatar.svg";
import notification from "../../assets/bell-icon.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleGoTo = (url) => {
    navigate(`/${url}`);
  };

  return (
    <header>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            size="large"
            aria-controls="headerMenu"
            aria-haspopup="true"
          >
            <img src={logo} alt="Logo da empresa" />
          </IconButton>

          <Tabs id="headerMenu" sx={{ display: "flex" }}>
            <Tab label="Home" value="Home" onClick={() => handleGoTo("")} />

            <Tab label="Getting a Taxi" value="Getting a Taxi" />

            <Tab
              label="Mobile App"
              value="Mobile App"
              onClick={() => handleGoTo("mobile-app")}
            />

            <Tab
              label="Contact Us"
              value="Contact Us"
              onClick={() => handleGoTo("contact-us")}
            />
          </Tabs>

          <Box>
            <IconButton
              size="large"
              aria-controls="headerMenu"
              aria-haspopup="true"
            >
              <img src={notification} alt="Logo da empresa" />
            </IconButton>

            <IconButton
              size="large"
              aria-controls="headerMenu"
              aria-haspopup="true"
            >
              <img src={userLogo} alt="Logo da empresa" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
