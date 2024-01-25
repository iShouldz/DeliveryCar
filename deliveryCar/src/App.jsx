import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Root from "./pages/Root/Root";
import MobileApp from "./pages/MobileApp/MobileApp";
import ContactUs from "./pages/ContactUs/ContactUs";
import GetTaxi from "./pages/GetTaxi/GetTaxi";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/mobile-app", element: <MobileApp /> },
        { path: "/contact-us", element: <ContactUs /> },
        { path: "/getTaxi", element: <GetTaxi /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
