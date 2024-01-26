/* eslint-disable no-undef */
import SemiRadio from "../SemiRadio"
import { render, screen } from "@testing-library/react";

describe("Testes para o form helper styled component", () => {
    test("Renderização do componente", () => {
        render(<SemiRadio type="blue"/>)

        const renderSvg = screen.getByLabelText("semiCar")
        expect(renderSvg).toBeInTheDocument();
    })
})