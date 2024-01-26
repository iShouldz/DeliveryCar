import { render, screen } from "@testing-library/react";
import { ThemeProvider, Typography } from "@mui/material";
import { theme } from "../theme"; 

test("O tema é configurado corretamente", () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography sx={{color: '#282828'}}>Teste theme</Typography>
    </ThemeProvider>
  );

  const textColor = screen.getByText("Teste theme").style.color;
  expect(textColor).toEqual('');
});