import React, { useCallback } from "react";
import Card from "../../components/Card/Card";
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
    (data: Character[]) => data?.filter((c) => c.name.includes(query)),
    [query]
  );

  const { data: characters } = useCharacters<Character[]>(filterByQuery);

  const favouriteCharactersIDs = favouriteCharacters.map((c) => c.id);

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
              isFavourite={favouriteCharactersIDs.includes(character.id)}
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
