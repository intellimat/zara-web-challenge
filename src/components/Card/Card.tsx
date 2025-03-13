import React from "react";
import "./card.css";
import { Character } from "../../types/Character";
import buildImgUrl from "../../utils/imgUrlBuilder";
import { Link } from "react-router";
import HeartButton from "../HeartButton/HeartButton";

interface Props {
  character: Character;
  isFavourite: boolean;
  addFavouriteCharacter: (character: Character) => void;
  removeFavouriteCharacter: (characterId: number) => void;
}

const Card: React.FC<Props> = ({
  character,
  isFavourite,
  addFavouriteCharacter,
  removeFavouriteCharacter,
}) => {
  const handleBtnClick = () => {
    if (!isFavourite) {
      addFavouriteCharacter(character);
    } else {
      removeFavouriteCharacter(character.id);
    }
  };

  return (
    <div className="box">
      <Link to={"character/" + character.id}>
        <img
          className="character-img"
          src={buildImgUrl(character.thumbnail)}
          alt={character.name + " thumbnail"}
          height={200}
        />
      </Link>

      <div className="title-container">
        <Link className="title" to={"character/" + character.id}>
          {character.name}
        </Link>
        <HeartButton onClick={handleBtnClick} full={isFavourite} />
      </div>
    </div>
  );
};

export default Card;
