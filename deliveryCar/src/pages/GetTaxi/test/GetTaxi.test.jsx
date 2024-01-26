import { fireEvent, render, screen } from "@testing-library/react";
import GetTaxi from '../GetTaxi'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from '../../../store/index'

describe("Teste do get taxi", () => {
    test("Renderizando componente", () => {
        render(<Provider store={store}>
            <BrowserRouter>
            <GetTaxi />
            </BrowserRouter>
          </Provider>)

        const titulo = screen.getByText("GetTaxi")
        expect(titulo).toBeInTheDocument()
    })
})