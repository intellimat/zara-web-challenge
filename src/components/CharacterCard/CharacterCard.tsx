import React, { useCallback } from "react";
import styles from "./characterCard.module.css";
import { Character } from "../../types/Character";
import buildImgUrl, {
  ThumbnailLayouts,
  ThumbnailSizes,
} from "../../utils/imgUrlBuilder";
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
  const toggleFavourite = useCallback(() => {
    if (isFavourite) {
      removeFavouriteCharacter(character.id);
    } else {
      addFavouriteCharacter(character);
    }
  }, [isFavourite, character, addFavouriteCharacter, removeFavouriteCharacter]);

  return (
    <div className={styles.box} data-testid="character-card">
      <Link to={"character/" + character.id}>
        <img
          className={styles.characterImg}
          src={buildImgUrl(
            character.thumbnail,
            ThumbnailLayouts.standard,
            ThumbnailSizes.xlarge
          )}
          alt={character.name + " thumbnail"}
          height={200}
          loading="lazy"
        />
      </Link>

      <div className={styles.titleContainer}>
        <Link className={styles.title} to={"character/" + character.id}>
          {character.name}
        </Link>
        <HeartButton onClick={toggleFavourite} full={isFavourite} />
      </div>
    </div>
  );
};

export default Card;
