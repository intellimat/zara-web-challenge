import React from "react";
import Card from "../../components/Card/Card";
import "./home.css";
import Searchbar from "../../components/Searchbar/Searchbar";
import { Character } from "../../types/Hero";

const heroes: Character[] = [
  {
    id: 1,
    imgUrl: "",
    name: "",
    favourite: false,
  },
  {
    id: 2,
    imgUrl: "",
    name: "",
    favourite: false,
  },
  {
    id: 3,
    imgUrl: "",
    name: "",
    favourite: false,
  },
  {
    id: 4,
    imgUrl: "",
    name: "",
    favourite: false,
  },
  {
    id: 5,
    imgUrl: "",
    name: "",
    favourite: false,
  },
  {
    id: 6,
    imgUrl: "",
    name: "",
    favourite: false,
  },
];

const Home: React.FC = () => {
  return (
    <div className="main-container">
      <div>Welcome to the Home Page</div>
      <Searchbar />
      <div className="cards-container">
        {heroes.map((hero) => (
          <Card key={hero.id} imgUrl={""} name={""} isFavourite={false} />
        ))}
      </div>
    </div>
  );
};

export default Home;
