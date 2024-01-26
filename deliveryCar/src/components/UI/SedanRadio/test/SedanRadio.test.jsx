/* eslint-disable no-undef */
import SedanRadio from "../SedanRadio"
import { render, screen } from "@testing-library/react";

describe("Testes para o form helper styled component", () => {
    test("Renderização do componente", () => {
        render(<SedanRadio type="blue"/>)

        const renderSvg = screen.getByLabelText("sedanCar")
        expect(renderSvg).toBeInTheDocument();
    })
})