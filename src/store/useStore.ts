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
          set(
            (state) => ({
              ...state,
              query,
            }),
            false,
            "setQuery"
          ),
        favouriteCharacters: [],
        addFavouriteCharacter: (newCharacter: Character) =>
          set(
            (state) => ({
              favouriteCharacters: [...state.favouriteCharacters, newCharacter],
            }),
            false,
            "addFavouriteCharacter"
          ),
        removeFavouriteCharacter: (characterId: number) =>
          set(
            (state) => ({
              favouriteCharacters: state.favouriteCharacters.filter(
                (c) => c.id !== characterId
              ),
            }),
            false,
            "removeFavouriteCharacter"
          ),
      }),
      { name: "marvelCharacters" }
    )
  )
);

export default useStore;
