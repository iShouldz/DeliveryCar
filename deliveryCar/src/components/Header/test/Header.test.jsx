/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store/index.js";

describe("Testes basicos do header", () => {
  test("Renderização do header", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    const headerLogo = screen.getByAltText("Company logo");
    expect(headerLogo).toBeInTheDocument();
  });

  test("Navegação entre as paginas", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    const contactUsButton = screen.getByTestId("tab-contact-us");
    fireEvent.click(contactUsButton);
    expect(window.location.pathname).toEqual("/contact-us");

    const getTaxingButton = screen.getByTestId("tab-getting-taxi");
    fireEvent.click(getTaxingButton);
    expect(window.location.pathname).toEqual("/getTaxi");

    const mobileUsButton = screen.getByTestId("tab-mobile-app");
    fireEvent.click(mobileUsButton);

    expect(window.location.pathname).toEqual("/mobile-app");

    const homeButton = screen.getByTestId("tab-home");
    fireEvent.click(homeButton);

    expect(window.location.pathname).toEqual("/");
  });

  test("Renderização correta dos icones", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    const notificationIcon = screen.getByTestId("Notification icon");
    const userIcon = screen.getByTestId("User icon");

    expect(notificationIcon).toBeInTheDocument();
    expect(userIcon).toBeInTheDocument();
  });
});
