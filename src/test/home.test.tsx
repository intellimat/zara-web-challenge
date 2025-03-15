import { render, screen } from "@testing-library/react";
import App from "../App";
import { MemoryRouter } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../query-client";
import characters from "./mock/characters.json";
import * as services from "../services/characterService";

describe("Home page", () => {
  beforeAll(() => {
    vi.spyOn(services, "getAllCharacters").mockReturnValue(
      Promise.resolve(characters)
    );
  });

  it("should show the navbar", () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </MemoryRouter>
    );
    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
  });

  it("should show the searchbar", () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </MemoryRouter>
    );
    const searchbar = screen.getByTestId("searchbar");
    expect(searchbar).toBeInTheDocument();
  });

  it("should render a list of characters", async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </MemoryRouter>
    );
    const charactersCards = await screen.findAllByTestId("character-card");
    expect(charactersCards.length).toBe(characters.length);
  });
});
