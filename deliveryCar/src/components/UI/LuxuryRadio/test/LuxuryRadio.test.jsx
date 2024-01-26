/* eslint-disable no-undef */
import LuxuryRadio from "../LuxuryRadio"
import { fireEvent, render, screen } from "@testing-library/react";

describe("Testes para o form helper styled component", () => {
    test("Renderização do componente", () => {
        render(<LuxuryRadio type="blue"/>)

        const renderSvg = screen.getByLabelText("luxuryCar")
        expect(renderSvg).toBeInTheDocument();
    })
})