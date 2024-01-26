import { fireEvent, render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store/index";

describe("Teste do ContactUs", () => {
  test("Renderizando componente", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ContactUs />
        </BrowserRouter>
      </Provider>
    );

    const titulo = screen.getByText("ContactUs");
    expect(titulo).toBeInTheDocument();
  });
});
