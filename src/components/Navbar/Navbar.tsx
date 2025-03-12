import React from "react";
import "./navbar.css";

const Navbar: React.FC = () => {
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
        <p>3</p>
      </div>
    </nav>
  );
};

export default Navbar;
