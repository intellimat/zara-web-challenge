import React from "react";
import styles from "./navbar.module.css";
import useStore from "../../store/useStore";
import { Link } from "react-router";
import HeartButton from "../HeartButton/HeartButton";

const Navbar: React.FC = () => {
  const { favouriteCharacters } = useStore();

  return (
    <nav className={styles.navbar} data-testid="navbar">
      <Link to={"/"}>
        <img src="Marvel_logo.svg" alt="Marvel Logo" />
      </Link>
      <div className={styles.favouriteBtnContainer}>
        <Link to={"/favouriteCharacters"}>
          <HeartButton full={true} />
        </Link>
        <p>{favouriteCharacters.length}</p>
      </div>
    </nav>
  );
};

export default Navbar;
