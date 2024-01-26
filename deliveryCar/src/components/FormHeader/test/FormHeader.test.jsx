/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import FormHeader from "../FormHeader.jsx";

describe("Testes para o erro form component", () => {
    test("Renderização do componente", () => {
        render(<FormHeader />)

        const title = screen.getByText("Drive with MyRide");
        expect(title).toBeInTheDocument();

        const description = screen.getByText("Register as a driver using the form below. Our team will assess and get back to you within 48 hours.");
        expect(description).toBeInTheDocument();
    })
})