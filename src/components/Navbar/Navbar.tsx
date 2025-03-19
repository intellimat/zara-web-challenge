import React from "react";
import styles from "./navbar.module.css";
import useStore from "../../store/useStore";
import { Link, useNavigate } from "react-router";
import HeartButton from "../HeartButton/HeartButton";
import { HomeView } from "../../pages/Home/homeViewEnum";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { favouriteCharactersIds: favouriteCharacters } = useStore();

  const redirect = () => {
    navigate("/?view=" + HomeView.favouriteCharacters);
  };

  return (
    <nav className={styles.navbar} data-testid="navbar">
      <Link to={"/"}>
        <img src="Marvel_logo.svg" alt="Marvel Logo" />
      </Link>
      <div className={styles.favouriteBtnContainer}>
        <HeartButton full={true} hovering={false} onClick={redirect} />
        <p>{favouriteCharacters.length}</p>
      </div>
    </nav>
  );
};

export default Navbar;
