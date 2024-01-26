/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import Root from "../Root.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store/index.js";

describe("Testes da midhome", () => {
  test("Renderização do componente", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </Provider>
    );

    const home = screen.getByText(/home/i);
    expect(home).toBeInTheDocument();
  });
});
