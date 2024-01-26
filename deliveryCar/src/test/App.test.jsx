import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../App";
import store from "../store/index";

test("Renderização do app", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const texto1 = screen.getByAltText("Company logo");
  expect(texto1).toBeInTheDocument();
});
