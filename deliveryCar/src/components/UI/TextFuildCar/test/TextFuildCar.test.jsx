/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import TextFuildCar from "../TextFuildCar.jsx";

describe("Testes para o Text fuild car", () => {
  test("Renderização do componente", () => {
    render(
      <TextFuildCar id="location" label="Your Pickup" onClear={() => {}} />
    );

    const labelElement = screen.getByLabelText("Your Pickup");
    expect(labelElement).toBeInTheDocument();
  });
});
