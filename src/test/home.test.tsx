import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import App from "../App";
import { MemoryRouter } from "react-router";
import characters from "./mock/characters.json";
import * as services from "../services/characterService";
import { Mock } from "vitest";
import TestQueryClientProvider from "./utils/TestQueryClientProvider";
import useStore from "../store/useStore";

const initialStoreState = useStore.getState();

const renderApp = () =>
  render(
    <TestQueryClientProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </TestQueryClientProvider>
  );

vi.mock("../services/characterService", () => ({
  getAllCharacters: vi.fn(),
  getCharacterComics: vi.fn(),
}));

vi.mock("../pages/Character/Character", () => ({
  default: () => <div>MockCharacterComponent</div>,
}));

describe("Home page", () => {
  beforeAll(() => {
    // mock data services
    (services.getAllCharacters as Mock).mockResolvedValue(characters);
    (services.getCharacterComics as Mock).mockResolvedValue([]);
  });

  afterEach(cleanup); // run tests in isolation

  beforeEach(() => {
    // clean up zustand store before each test
    useStore.setState(initialStoreState, true);
  });

  it("should show the navbar", () => {
    renderApp();

    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();
  });

  it("should render a list of characters", async () => {
    renderApp();
    const charactersCards = await screen.findAllByTestId("character-card");
    expect(charactersCards.length).toBe(characters.length);
  });

  it("should filter by query text on searchbar", async () => {
    const mockCharacterName = characters[0].name;

    renderApp();

    const searchInput = await screen.findByPlaceholderText(
      "SEARCH A CHARACTER..."
    );

    fireEvent.change(searchInput, { target: { value: mockCharacterName } });

    const renderedCharacter = screen.getByText(mockCharacterName);
    expect(renderedCharacter).toBeInTheDocument();
  });

  it("should increase the number of favourites when clicking on a card heart", async () => {
    renderApp();

    const prevValue = parseInt(
      (await screen.findByLabelText("number of favourite characters")).innerText
    );
    const characterHeartIcon = await screen.findByTitle(
      characters[0].name + "-heart-button"
    );

    fireEvent.click(characterHeartIcon);

    const nextValue = parseInt(
      (await screen.findByLabelText("number of favourite characters")).innerText
    );
    expect(nextValue).toBe(prevValue + 1);
  });

  it("should show character page when clicking on a character thumbnail", async () => {
    renderApp();
    const characterThumbnail = await screen.findByAltText(
      characters[0].name + "-thumbnail"
    );
    fireEvent.click(characterThumbnail);
    const CharacterComponent = await screen.findByText(
      "MockCharacterComponent"
    );
    expect(CharacterComponent).toBeInTheDocument();
  });

  it("should show favourite characters when clicking on the heart button in the navbar", async () => {
    renderApp();

    const mockCharacter = characters[0];

    const characterHeartIcon = await screen.findByTitle(
      mockCharacter.name + "-heart-button"
    );

    fireEvent.click(characterHeartIcon);

    const navbarHeartButton = await screen.findByTitle("navbar-heart-button");

    fireEvent.click(navbarHeartButton);

    const characterThumbnail = await screen.findByAltText(
      mockCharacter.name + "-thumbnail"
    );

    screen.debug();
    expect(characterThumbnail).toBeInTheDocument();
  });
});
