/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Loading from "../Loading.jsx";
import carSlice from "../../../store/cars/carSlice.js";

describe("Testes do loading", () => {
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
            <Loading />
          </BrowserRouter>
        </Provider>
      );
  

    const fullNameElement = screen.getByText("Please wait, we are processing your request");
    expect(fullNameElement).toBeInTheDocument();

    const emailElement = screen.getByText("We are happy that you are joining us 😁");
    expect(emailElement).toBeInTheDocument();

    const image = screen.getByAltText("A image loading your data")
    expect(image).toBeInTheDocument();
  });
});
