/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import SucessScreen from "../SucessScreen.jsx";
import { configureStore } from "@reduxjs/toolkit";
import carSlice from "../../../store/cars/carSlice.js";

describe("Testes para a tela de sucesso", () => {
  test("Renderização do componente", () => {
    const mockState = {
      cars: {
        item: [
          {
            fullName: "Iranilda Caitano",
            emailUser: "iranapedro@gmail.com",
            placaUser: "PGN-211",
            selectedCar: "Luxury Car",
            country: "Brasil",
            city: "Pogradec",
            id: 3,
          },
        ],
      },
    };

    const storeTest = configureStore({
      reducer: { cars: carSlice.reducer },
      preloadedState: mockState,
    });

    render(
      <Provider store={storeTest}>
        <BrowserRouter>
          <SucessScreen />
        </BrowserRouter>
      </Provider>
    );

    const fullNameElement = screen.getByText("Welcome, Iranilda");
    expect(fullNameElement).toBeInTheDocument();

    const emailElement = screen.getByText("iranapedro@gmail.com");
    expect(emailElement).toBeInTheDocument();

    const image = screen.getByAltText("A sucess image car")
    expect(image).toBeInTheDocument();
  });

});
