import React, { useCallback, useEffect, useMemo, useState } from "react";
import Card from "../../components/CharacterCard/CharacterCard";
import styles from "./home.module.css";
import Searchbar from "../../components/Searchbar/Searchbar";
import useStore from "../../store/useStore";
import { useCharacters } from "../../customHooks/useCharacters";
import { Character } from "../../types/Character";
import { HomeView } from "./homeViewEnum";
import { useSearchParams } from "react-router";

const Home: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [activeView, setActiveView] = useState<HomeView>(
    HomeView.allCharacters
  );

  const {
    addFavouriteCharacterId,
    removeFavouriteCharacterId,
    favouriteCharactersIds,
    query,
    setQuery,
  } = useStore();

  const filterByQuery = useCallback(
    (data: Character[]) =>
      data?.filter((c) => c.name.toUpperCase().includes(query.toUpperCase())),
    [query]
  );

  const { data: filteredByQueryCharacters } =
    useCharacters<Character[]>(filterByQuery);

  useEffect(() => {
    const view = searchParams.get("view");
    if (view === HomeView.favouriteCharacters) {
      setActiveView(HomeView.favouriteCharacters);
    } else {
      setActiveView(HomeView.allCharacters);
    }
  }, [searchParams]);

  const shownCharacters = useMemo(() => {
    if (activeView === HomeView.favouriteCharacters) {
      return filteredByQueryCharacters?.filter((c) =>
        favouriteCharactersIds.includes(c.id)
      );
    } else {
      return filteredByQueryCharacters;
    }
  }, [favouriteCharactersIds, filteredByQueryCharacters, activeView]);

  return (
    <>
      <div className={styles.mainContainer}>
        <Searchbar
          query={query}
          setQuery={setQuery}
          numberOfResults={shownCharacters?.length || 0}
        />
        <div className={styles.cardsContainer}>
          {shownCharacters?.length === 0 && <p>No characters to display.</p>}
          {shownCharacters?.map((character) => (
            <Card
              key={character.id}
              character={character}
              isFavourite={favouriteCharactersIds.includes(character.id)}
              addFavouriteCharacterId={addFavouriteCharacterId}
              removeFavouriteCharacterId={removeFavouriteCharacterId}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
