import { render, screen } from "@testing-library/react";
import App from "../App";
import { MemoryRouter } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../query-client";
// import characters from "./mock/characters.json";
// import { getAllCharacters } from "../services/characterService";

describe("Home page", () => {
  beforeAll(() => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </MemoryRouter>
    );
  });

  //   it("should show the navbar", () => {
  //     const navbar = screen.getByTestId("navbar");
  //     expect(navbar).toBeTruthy();
  //   });

  it("should show the searchbar", () => {
    const searchbar = screen.getByTestId("searchbar");
    expect(searchbar).toBeInTheDocument();
  });

  //   it("should render a list of characters", () => {
  //     vi.fn()
  //   });
});
