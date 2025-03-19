import React, { useCallback, useState } from "react";
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
  addFavouriteCharacterId: (characterId: number) => void;
  removeFavouriteCharacterId: (characterId: number) => void;
}

const Card: React.FC<Props> = ({
  character,
  isFavourite,
  addFavouriteCharacterId,
  removeFavouriteCharacterId,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleFavourite = useCallback(() => {
    if (isFavourite) {
      removeFavouriteCharacterId(character.id);
    } else {
      addFavouriteCharacterId(character.id);
    }
  }, [
    isFavourite,
    character,
    addFavouriteCharacterId,
    removeFavouriteCharacterId,
  ]);

  return (
    <div
      className={styles.box}
      data-testid="character-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={"character/" + character.id} className={styles.imgLink}>
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
        <HeartButton
          onClick={toggleFavourite}
          full={isFavourite}
          fillColor={isHovered ? "white" : undefined}
          hovering={isHovered}
        />
      </div>
    </div>
  );
};

export default Card;
