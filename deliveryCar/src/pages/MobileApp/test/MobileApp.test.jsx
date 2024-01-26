import { fireEvent, render, screen } from "@testing-library/react";
import MobileApp from "../MobileApp";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store/index";

describe("Teste do MobileApp", () => {
  test("Renderizando componente", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MobileApp />
        </BrowserRouter>
      </Provider>
    );

    const titulo = screen.getByText("MobileApp");
    expect(titulo).toBeInTheDocument();
  });
});
