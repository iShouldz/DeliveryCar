import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Box } from "@mui/material";

const Root = () => {
  return (
    <Box sx={{ backgroundColor: "primary.background" }}>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </Box>
  );
};

export default Root;
