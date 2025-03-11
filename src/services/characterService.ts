import { Character } from "../types/Hero";
import { authParamsQuery } from "./utils/auth";
import { getJSON } from "./utils/http";

export async function getAllCharacters(): Promise<Character[]> {
  const characters = (await getJSON(
    `${import.meta.env.VITE_MARVEL_API_BASE_URL}/characters?${authParamsQuery}`
  )) as { data: { results: Character[] } };
  return characters.data.results;
}
