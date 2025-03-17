import { Character } from "../types/Character";
import { CharacterComic } from "../types/CharacterComic";

export interface GetCharactersResponse {
  data: { results: Character[] };
}

export interface GetCharacterComicsResponse {
  data: { results: CharacterComic[] };
}
