/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import SignUpModal from "../SignUpModal.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store/index.js";

describe("Testes da midhome", () => {
    test("Renderização do componente", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <SignUpModal open={true} onClose={() => {}} />
          </BrowserRouter>
        </Provider>
      );

      const title = screen.getByTestId("signup")
      expect(title).toBeInTheDocument()

      const image = screen.getByAltText("Cadastro image")
      expect(image).toBeInTheDocument()

      const button = screen.getByLabelText("SIGN UP")
      fireEvent.click(button)
    })
})