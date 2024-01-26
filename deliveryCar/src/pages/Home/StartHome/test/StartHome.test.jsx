/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import StartHome from "../StartHome.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../../store/index.js";

describe("Testes da midhome", () => {
  test("Renderização do componente", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <StartHome />
        </BrowserRouter>
      </Provider>
    );

    const texto1 = screen.getByText(/NEED A RIDE?/i);
    expect(texto1).toBeInTheDocument();

    const texto2 = screen.getByLabelText("bookwith");
    expect(texto2).toBeInTheDocument();

    const texto3 = screen.getByText(/Find a ride now/i);
    expect(texto3).toBeInTheDocument();

    const image = screen.getByAltText("A yellow car working with my ride company")
    expect(image).toBeInTheDocument();

    const button = screen.getByLabelText("find a driver");
    // fireEvent.click(button);
    expect(button).toBeInTheDocument();

  });
});
