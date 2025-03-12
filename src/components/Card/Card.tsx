import React from "react";
import "./card.css";
import { Character } from "../../types/Hero";

export const ThumbnailLayouts = {
  portrait: "portrait",
  standard: "standard",
  landscape: "landscape",
};

export const ThumbnailSizes = {
  small: "small",
  medium: "medium",
  large: "large",
  xlarge: "xlarge",
};

interface Props {
  character: Character;
  isFavourite: boolean;
}

const Card: React.FC<Props> = ({ character, isFavourite }) => {
  const characterImgUrl =
    character.thumbnail.path +
    "/" +
    ThumbnailLayouts.standard +
    "_" +
    ThumbnailSizes.xlarge +
    "." +
    character.thumbnail.extension;

  const handleBtnClick = () => {
    // toggle isFavourite
  };

  const heartIconUrl = isFavourite
    ? "icons/full_heart.svg"
    : "icons/empty_heart.svg";

  return (
    <div className="box">
      <img
        className="character-img"
        src={characterImgUrl}
        alt={character.name + " thumbnail"}
        height={200}
      />

      <div className="title-container">
        <p className="title">{character.name}</p>
        <button className="heart-button" onClick={handleBtnClick}>
          <img src={heartIconUrl} height={18} width={20} alt="Heart icon" />
        </button>
      </div>
    </div>
  );
};

export default Card;
