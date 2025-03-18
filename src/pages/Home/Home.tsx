import React, { useCallback, useMemo } from "react";
import Card from "../../components/CharacterCard/CharacterCard";
import styles from "./home.module.css";
import Searchbar from "../../components/Searchbar/Searchbar";
import useStore from "../../store/useStore";
import { useCharacters } from "../../customHooks/useCharacters";
import { Character } from "../../types/Character";

const Home: React.FC = () => {
  const {
    addFavouriteCharacter,
    removeFavouriteCharacter,
    favouriteCharacters,
    query,
    setQuery,
  } = useStore();

  const filterByQuery = useCallback(
    (data: Character[]) =>
      data?.filter((c) => c.name.toUpperCase().includes(query.toUpperCase())),
    [query]
  );

  const { data: characters } = useCharacters<Character[]>(filterByQuery);

  const favouriteCharacterIds = useMemo(
    () => new Set(favouriteCharacters.map((fav) => fav.id)),
    [favouriteCharacters]
  );

  return (
    <>
      <div className={styles.mainContainer}>
        <Searchbar
          query={query}
          setQuery={setQuery}
          numberOfResults={characters?.length || 0}
        />
        <div className={styles.cardsContainer}>
          {characters?.map((character) => (
            <Card
              key={character.id}
              character={character}
              isFavourite={favouriteCharacterIds.has(character.id)}
              addFavouriteCharacter={addFavouriteCharacter}
              removeFavouriteCharacter={removeFavouriteCharacter}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
