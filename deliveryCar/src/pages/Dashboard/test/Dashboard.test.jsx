import { fireEvent, render, screen } from "@testing-library/react";
import DashBoard from "../Dashboard";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store/index";

describe("Teste do Dashboard", () => {
  test("Renderizando componente", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DashBoard />
        </BrowserRouter>
      </Provider>
    );

    const titulo = screen.getByText("Dashboard");
    expect(titulo).toBeInTheDocument();
  });
});
