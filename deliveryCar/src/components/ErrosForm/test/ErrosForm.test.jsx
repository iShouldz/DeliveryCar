/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import ErrosForm from "../ErrosForm.jsx";

describe("Testes para o erro form component", () => {
    test("Renderização do componente", () => {
        render(<ErrosForm errors={"Its a erro"}/>)

        const cardImage = screen.getByText("Its a erro");
        expect(cardImage).toBeInTheDocument();
    })
})