/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import MidHome from '../MidHome.jsx'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../../store/index.js";

describe("Testes da midhome", () => {
  test("Renderização do componente", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MidHome />
        </BrowserRouter>
      </Provider>
    );

    const texto1 = screen.getByText("Why should you ride with us?")
    expect(texto1).toBeInTheDocument();

    const texto2 = screen.getByText("Best in class rides")
    expect(texto2).toBeInTheDocument();

    const titleCard1 = screen.getByText("Basic")
    expect(titleCard1).toBeInTheDocument();

    const titleCard2 = screen.getByText("Comfort")
    expect(titleCard2).toBeInTheDocument();

    const titleCard3 = screen.getByText("Business")
    expect(titleCard3).toBeInTheDocument();

    const titleCard4 = screen.getByText("Deluxe")
    expect(titleCard4).toBeInTheDocument();

    const learnMoreButton = screen.getByLabelText("Learn more about Basic car");
    fireEvent.click(learnMoreButton);
  });
});
