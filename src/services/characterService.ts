import { Character } from "../types/Character";
import { ENDPOINTS } from "./endpoints";
import { GetCharactersResponse } from "./types";
import { hash, PUBLIC_KEY, TIMESTAMP } from "./utils/auth";
import buildUrl from "./utils/buildUrl";
import { getJSON } from "./utils/http";

export async function getAllCharacters(name?: string): Promise<Character[]> {
  const baseURL = new URL(ENDPOINTS.CHARACTERS);

  const urlSearchParams = new URLSearchParams([
    ["limit", 50],
    ["apikey", PUBLIC_KEY],
    ["hash", hash],
    ["ts", TIMESTAMP],
  ]);

  if (name && name.length > 0) {
    urlSearchParams.append("name", name);
  }

  const url = buildUrl(baseURL, urlSearchParams);
  const characters = await getJSON<GetCharactersResponse>(url.href);
  return characters.data.results;
}
