import { Character } from "../types/Character";
import { ENDPOINTS } from "./endpoints";
import { GetCharactersResponse } from "./types";
import { getJSONwithAuth } from "./utils/http";

export async function getAllCharacters(name?: string): Promise<Character[]> {
  const baseURL = new URL(ENDPOINTS.CHARACTERS);

  baseURL.searchParams.append("limit", "50");

  if (name && name.length > 0) {
    baseURL.searchParams.append("name", name);
  }

  const characters = await getJSONwithAuth<GetCharactersResponse>(baseURL);
  return characters.data.results;
}
