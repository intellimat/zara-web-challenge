import { render, screen } from "@testing-library/react";
import * as services from "../services/characterService";
import characters from "./mock/characters.json";
import TestRouter from "./utils/TestRouter";
import TestQueryClientProvider from "./utils/TestQueryClientProvider";
import characterComics from "./mock/characterComics.json";
import { Mock } from "vitest";

vi.mock("../services/characterService", () => ({
  getAllCharacters: vi.fn(),
  getCharacterComics: vi.fn(),
}));

describe("Character", () => {
  beforeAll(() => {
    (services.getAllCharacters as Mock).mockResolvedValue(characters);
    (services.getCharacterComics as Mock).mockResolvedValue(characterComics);
  });

  it("should show the character banner", async () => {
    render(
      <TestQueryClientProvider>
        <TestRouter initialEntries={["/character/" + characters[0].id]} />
      </TestQueryClientProvider>
    );

    const characterName = await screen.findByAltText(characters[0].name);
    expect(characterName).toBeInTheDocument();
  });

  it("should show character comics", async () => {
    render(
      <TestQueryClientProvider>
        <TestRouter initialEntries={["/character/" + characters[0].id]} />
      </TestQueryClientProvider>
    );

    const characterComic = await screen.findByText(characterComics[0].title);
    expect(characterComic).toBeInTheDocument();
  });

  it("should show as many comic cards as the comics returned from the mocked getCharacterComics function", async () => {
    render(
      <TestQueryClientProvider>
        <TestRouter initialEntries={["/character/" + characters[0].id]} />
      </TestQueryClientProvider>
    );

    const comicCards = await screen.findAllByTestId("comicCard");
    expect(comicCards.length).toBe(characterComics.length);
  });
});
