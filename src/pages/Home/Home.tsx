import React from "react";
import Card from "../../components/Card/Card";
import "./home.css";
import Searchbar from "../../components/Searchbar/Searchbar";

const heroes = [null, null, null, null, null];

const Home: React.FC = () => {
  return (
    <div className="main-container">
      <div>Welcome to the Home Page</div>
      <Searchbar />
      <div className="cards-container">
        {heroes.map((hero) => (
          <Card imgUrl={""} name={""} isFavourite={false} />
        ))}
      </div>
    </div>
  );
};

export default Home;
