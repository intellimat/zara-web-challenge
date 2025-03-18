import { useQuery } from "@tanstack/react-query";
import { getAllCharacters } from "../services/characterService";
import { Character } from "../types/Character";

export const useCharacters = <T>(select?: (data: Character[]) => T) => {
  return useQuery({
    queryKey: ["characters"],
    queryFn: () => getAllCharacters(),
    select,
  });
};
