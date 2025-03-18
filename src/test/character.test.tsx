import { render, screen } from "@testing-library/react";
import * as services from "../services/characterService";
import characters from "./mock/characters.json";
import TestRouter from "./utils/TestRouter";
import TestQueryClientProvider from "./utils/TestQueryClientProvider";

describe("Character", () => {
  it("should show the character banner", async () => {
    vi.spyOn(services, "getAllCharacters").mockReturnValue(
      Promise.resolve(characters)
    );

    render(
      <TestQueryClientProvider>
        <TestRouter initialEntries={["/character/" + characters[0].id]} />
      </TestQueryClientProvider>
    );

    const characterName = await screen.findByAltText(characters[0].name);
    expect(characterName).toBeInTheDocument();
  });
});
