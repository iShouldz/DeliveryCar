import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "../Home.jsx";
import store from '../../../store/index.js'

test("", () => {
    render(
        <Provider store={store}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </Provider>
      );

      const texto1 = screen.getByText(/NEED A RIDE?/i);
      expect(texto1).toBeInTheDocument();

})
