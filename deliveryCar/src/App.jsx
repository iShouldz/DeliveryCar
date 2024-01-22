import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Root from "./pages/Root/Root";
import MobileApp from "./pages/MobileApp/MobileApp";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/mobile-app", element: <MobileApp /> },
        { path: "/contact-us", element: <ContactUs /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
