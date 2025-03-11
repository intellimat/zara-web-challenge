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
  return (
    <div className="box cut-box">
      {/* Character Image Section */}
      <div>
        <img
          src={
            character.thumbnail.path +
            "/" +
            ThumbnailLayouts.standard +
            "_" +
            ThumbnailSizes.xlarge +
            "." +
            character.thumbnail.extension
          }
          alt={character.name + " thumbnail"}
        />
      </div>

      {/* Red Divider Line */}
      <div></div>

      {/* Name and Like Section */}
      <div className="title">
        <p>{character.name}</p>
      </div>
    </div>
  );
};

export default Card;
