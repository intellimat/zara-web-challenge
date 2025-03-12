import { create } from "zustand";
import { Character } from "../types/Hero";
import { devtools } from "zustand/middleware";

type Store = {
  query: string;
  setQuery: (query: string) => void;
  favouriteCharacters: Character[];
  addFavouriteCharacter: (newCharacter: Character) => void;
  removeFavouriteCharacter: (characterId: number) => void;
};

const useStore = create<Store>()(
  devtools((set) => ({
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
  }))
);

export default useStore;
