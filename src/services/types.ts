import { Character } from "../types/Character";

export interface GetCharactersResponse {
  data: { results: Character[] };
}
