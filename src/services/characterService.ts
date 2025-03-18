import { Character } from "../types/Character";
import { API_BASE_URL, ENDPOINTS } from "./endpoints";
import { GetCharacterComicsResponse, GetCharactersResponse } from "./types";
import { getJSONwithAuth } from "./utils/http";

export async function getAllCharacters(): Promise<Character[]> {
  const url = new URL(API_BASE_URL + ENDPOINTS.CHARACTERS);

  url.searchParams.append("limit", "50");

  const characters = await getJSONwithAuth<GetCharactersResponse>(url);
  return characters.data.results;
}

export async function getCharacterComics(characterId: number) {
  const url = new URL(
    API_BASE_URL +
      ENDPOINTS.CHARACTERS +
      ENDPOINTS.CHARACTER_COMICS(characterId)
  );

  url.searchParams.append("limit", "20");

  const characters = await getJSONwithAuth<GetCharacterComicsResponse>(url);
  return characters.data.results;
}
