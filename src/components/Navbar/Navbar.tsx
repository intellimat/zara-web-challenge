import React from "react";
import "./navbar.css";
import useStore from "../../store/useStore";
import { Link } from "react-router";
import HeartButton from "../HeartButton/HeartButton";

const Navbar: React.FC = () => {
  const { favouriteCharacters } = useStore();

  return (
    <nav>
      <Link to={"/"}>
        <img className="marvel-logo" src="Marvel_logo.svg" alt="Marvel Logo" />
      </Link>
      <div className="favourite-container">
        <HeartButton full={true} />
        <p>{favouriteCharacters.length}</p>
      </div>
    </nav>
  );
};

export default Navbar;
