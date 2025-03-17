import React, { useMemo, useState } from "react";
import styles from "./favouriteCharacter.module.css";
import Searchbar from "../../components/Searchbar/Searchbar";
import useStore from "../../store/useStore";
import Card from "../../components/CharacterCard/CharacterCard";

const FavouriteCharacters: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const {
    addFavouriteCharacter,
    removeFavouriteCharacter,
    favouriteCharacters,
  } = useStore();

  const filteredFavCharacters = useMemo(
    () =>
      favouriteCharacters.filter((favChar) =>
        favChar.name.toUpperCase().includes(query.toUpperCase())
      ),
    [favouriteCharacters, query]
  );

  return (
    <div className={styles.mainContainer}>
      <h1>FAVORITES</h1>
      <Searchbar
        query={query}
        setQuery={setQuery}
        numberOfResults={filteredFavCharacters.length}
      />
      <div className={styles.cardsContainer}>
        {filteredFavCharacters.map((character) => (
          <Card
            key={character.id}
            character={character}
            isFavourite={true}
            addFavouriteCharacter={addFavouriteCharacter}
            removeFavouriteCharacter={removeFavouriteCharacter}
          />
        ))}
      </div>
    </div>
  );
};

export default FavouriteCharacters;
