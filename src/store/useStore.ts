import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type Store = {
  query: string;
  setQuery: (query: string) => void;
  favouriteCharactersIds: number[];
  addFavouriteCharacterId: (characterId: number) => void;
  removeFavouriteCharacterId: (characterId: number) => void;
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
        favouriteCharactersIds: [],
        addFavouriteCharacterId: (characterId: number) =>
          set(
            (state) => ({
              favouriteCharactersIds: [
                ...state.favouriteCharactersIds,
                characterId,
              ],
            }),
            false,
            "addFavouriteCharacterId"
          ),
        removeFavouriteCharacterId: (characterId: number) =>
          set(
            (state) => ({
              favouriteCharactersIds: state.favouriteCharactersIds.filter(
                (id) => id !== characterId
              ),
            }),
            false,
            "removeFavouriteCharacterId"
          ),
      }),
      { name: "marvelCharacters" }
    )
  )
);

export default useStore;
