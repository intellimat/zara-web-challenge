import { Character } from "../types/Hero";
import { authParamsQuery } from "./utils/auth";
import { getJSON } from "./utils/http";

export async function getAllCharacters(name?: string): Promise<Character[]> {
  const withName = name && name.length > 0 ? "name=" + name + "&" : "";
  const characters = (await getJSON(
    `${
      import.meta.env.VITE_MARVEL_API_BASE_URL
    }/characters?${withName}${authParamsQuery}`
  )) as { data: { results: Character[] } };
  return characters.data.results;
}
