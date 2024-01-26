/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store/index.js";
import ModalTemplate from '../../ModalTemplate/ModalTemplate.jsx'
import errorImage from "../../../assets/errorRequest.png";

describe("Testes para o modal template", () => {
  test("Renderização do template", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalTemplate
            open={true}
            title="Houston, we have a problem"
            description="GET PROBLEM"
            img={errorImage}
            actionButton={() => window.location.reload()}
          />
        </BrowserRouter>
      </Provider>
    );

    const titleModal = screen.getByText("Houston, we have a problem");
    expect(titleModal).toBeInTheDocument();

    const descriptionModal = screen.getByText("GET PROBLEM");
    expect(descriptionModal).toBeInTheDocument();
  });

  test("Imagem renderizada com sucesso", () => {
    render(
        <Provider store={store}>
          <BrowserRouter>
            <ModalTemplate
              open={true}
              title="Houston, we have a problem"
              description="GET PROBLEM"
              img={errorImage}
              actionButton={() => window.location.reload()}
            />
          </BrowserRouter>
        </Provider>
      );
  
      const imageModal = screen.getByAltText("Problem image error");
      expect(imageModal).toBeInTheDocument();
  })
});
