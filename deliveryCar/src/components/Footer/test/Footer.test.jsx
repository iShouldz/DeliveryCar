/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Testes basicos do footer", () => {
  test("Renderização do footer", () => {
    render(<Footer />);
    const footerContent = screen.getByText(/Company/i);
    expect(footerContent).toBeInTheDocument();
  });

  test("Renderização da logo no footer", () => {
    render(<Footer />);
    const logoImage = screen.getByAltText("logo");
    expect(logoImage).toBeInTheDocument();
  });

  test("Renderização das logo sociais", () => {
    render(<Footer />);
    const facebookLogo = screen.getByAltText("Facebook logo");
    const instagramLogo = screen.getByAltText("Instagram logo");
    const twitterLogo = screen.getByAltText("Twitter logo");

    expect(facebookLogo).toBeInTheDocument();
    expect(instagramLogo).toBeInTheDocument();
    expect(twitterLogo).toBeInTheDocument();
  });

  test("Renderização do endereço e links", () => {
    render(<Footer />);
    const endereco = screen.getByText(/New York/i);

    expect(endereco).toBeInTheDocument();

    const coluna1 = screen.getByText(/Company/i);
    const coluna2 = screen.getByText(/FAQ/i);
    const coluna3 = screen.getByText(/More/i);

    expect(coluna1).toBeInTheDocument();
    expect(coluna2).toBeInTheDocument();
    expect(coluna3).toBeInTheDocument();
  });
});
