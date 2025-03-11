import React from "react";
import Card from "../../components/Card/Card";
import "./home.css";
import Searchbar from "../../components/Searchbar/Searchbar";
import { useQuery } from "@tanstack/react-query";
import { getAllCharacters } from "../../services/characterService";

const Home: React.FC = () => {
  const { data: characters } = useQuery({
    queryKey: ["characters"],
    queryFn: getAllCharacters,
  });

  return (
    <div className="main-container">
      <div>Welcome to the Home Page</div>
      <Searchbar />
      <div className="cards-container">
        {characters &&
          characters.map((character) => (
            <Card
              key={character.id}
              character={character}
              isFavourite={false}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
