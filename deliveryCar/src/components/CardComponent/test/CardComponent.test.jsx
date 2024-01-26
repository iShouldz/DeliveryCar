/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import CardComponent from "../CardComponent";
import car1 from "../../../assets/car1.png";
import store from "../../../store/index.js";

describe("Testes para o card component", () => {
  test("Renderização do card", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CardComponent
            img={car1}
            title={"Basic"}
            alt="A basic car"
            description={
              "The best balance of price and comfort. You will not go wrong with our basic rides."
            }
          />
        </BrowserRouter>
      </Provider>
    );

    const cardImage = screen.getByAltText("A basic car");
    expect(cardImage).toBeInTheDocument();
  });


  test("Titulo renderizaado corretamente", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CardComponent
            img={car1}
            title={"Basic"}
            alt="A basic car"
            description={
              "The best balance of price and comfort. You will not go wrong with our basic rides."
            }
          />
        </BrowserRouter>
      </Provider>
    );

    const cardImage = screen.getByText("Basic");
    expect(cardImage).toBeInTheDocument();
  });
});
