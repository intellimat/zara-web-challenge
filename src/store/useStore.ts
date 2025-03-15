import { create } from "zustand";
import { Character } from "../types/Character";
import { devtools, persist } from "zustand/middleware";

type Store = {
  query: string;
  setQuery: (query: string) => void;
  favouriteCharacters: Character[];
  addFavouriteCharacter: (newCharacter: Character) => void;
  removeFavouriteCharacter: (characterId: number) => void;
};

const useStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        query: "",
        setQuery: (query: string) =>
          set(() => ({
            query,
          })),
        favouriteCharacters: [],
        addFavouriteCharacter: (newCharacter: Character) =>
          set((state) => ({
            favouriteCharacters: [...state.favouriteCharacters, newCharacter],
          })),
        removeFavouriteCharacter: (characterId: number) =>
          set((state) => ({
            favouriteCharacters: state.favouriteCharacters.filter(
              (c) => c.id !== characterId
            ),
          })),
      }),
      { name: "marvel-characters" }
    )
  )
);

export default useStore;
