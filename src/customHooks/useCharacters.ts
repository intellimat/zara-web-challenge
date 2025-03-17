import { useQuery } from "@tanstack/react-query";
import { getAllCharacters } from "../services/characterService";
import { useMemo } from "react";

export const useCharacters = (query: string) => {
  const { data: characters } = useQuery({
    queryKey: ["characters"],
    queryFn: () => getAllCharacters(),
  });

  const filteredCharacters = useMemo(
    () => characters?.filter((c) => c.name.includes(query)),
    [characters, query]
  );

  return {
    filteredCharacters,
  };
};
