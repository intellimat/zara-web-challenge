import React from "react";
import "./navbar.css";
import useStore from "../../store/useStore";

const Navbar: React.FC = () => {
  const { favouriteCharacters } = useStore();

  return (
    <nav>
      <img className="marvel-logo" src="Marvel_logo.svg" alt="Marvel Logo" />
      <div className="favourite-container">
        <button className="heart-button">
          <img
            className="heart-icon"
            src="icons/full_heart.svg"
            alt="Heart icon"
          />
        </button>
        <p>{favouriteCharacters.length}</p>
      </div>
    </nav>
  );
};

export default Navbar;
