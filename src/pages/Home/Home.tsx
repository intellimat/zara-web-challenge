import React from "react";
import Card from "../../components/Card/Card";
import "./home.css";
import Searchbar from "../../components/Searchbar/Searchbar";
import { useQuery } from "@tanstack/react-query";
import { getAllCharacters } from "../../services/characterService";
import useStore from "../../store/useStore";
import ProgessBar from "../../components/ProgressBar/ProgressBar";

const Home: React.FC = () => {
  const {
    addFavouriteCharacter,
    removeFavouriteCharacter,
    favouriteCharacters,
    query,
    setQuery,
  } = useStore();

  const { data: characters, isPending } = useQuery({
    queryKey: ["characters", query],
    queryFn: () => getAllCharacters(query),
  });

  const favouriteCharactersIDs = favouriteCharacters.map((c) => c.id);

  return (
    <>
      {isPending && <ProgessBar />}
      <div className="main-container">
        <Searchbar
          query={query}
          setQuery={setQuery}
          numberOfResults={characters?.length || 0}
        />
        <div className="cards-container">
          {characters &&
            characters.map((character) => (
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
