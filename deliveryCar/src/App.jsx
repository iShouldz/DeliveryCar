import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Root from "./pages/Root/Root";
import MobileApp from "./pages/MobileApp/MobileApp";
import ContactUs from "./pages/ContactUs/ContactUs";
import GetTaxi from "./pages/GetTaxi/GetTaxi";
import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";

function App() {
  const isAuthenticated = useSelector((state) => state.login.isLogado);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/mobile-app", element: <MobileApp /> },
        { path: "/contact-us", element: <ContactUs /> },
        { path: "/getTaxi", element: <GetTaxi /> },
        {
          path: "/dashboard",
          element: isAuthenticated === true ? <Dashboard /> : <Home />,
        },
        {
          path: "/profile",
          element: isAuthenticated === true ? <Profile /> : <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
