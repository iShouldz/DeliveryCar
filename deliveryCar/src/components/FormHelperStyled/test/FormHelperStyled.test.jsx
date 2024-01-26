/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import FormHelperStyled from "../FormHelperStyled.jsx";
import { TextField } from "@mui/material";

describe("Testes para o form helper styled component", () => {
  test("Renderização do componente", () => {
    render(
      <FormHelperStyled error={"Erro test"}>
        <TextField
          id="nameUser"
          label="Full Name"
          name="fullName"
          error={true}
          color="secondary"
        />
      </FormHelperStyled>
    );

    const cardImage = screen.getByText("Erro test");
    expect(cardImage).toBeInTheDocument();
  });
});
