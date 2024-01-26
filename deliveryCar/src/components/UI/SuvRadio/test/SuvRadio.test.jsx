/* eslint-disable no-undef */
import SuvRadio from "../SuvRadio"
import { render, screen } from "@testing-library/react";

describe("Testes para o form helper styled component", () => {
    test("Renderização do componente", () => {
        render(<SuvRadio type="blue"/>)

        const renderSvg = screen.getByLabelText("SuvCar")
        expect(renderSvg).toBeInTheDocument();
    })
})