import { useQuery } from "@tanstack/react-query";
import { getCharacterComics } from "../services/characterService";

export const useCharacterComics = (characterId: number | null) => {
  return useQuery({
    queryKey: ["characterComics", characterId],
    queryFn: () => (characterId ? getCharacterComics(characterId) : null),
    enabled: !!characterId,
  });
};
