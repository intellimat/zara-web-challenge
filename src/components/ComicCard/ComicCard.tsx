import React from "react";
import styles from "./comicCard.module.css";
import { CharacterComic } from "../../types/CharacterComic";
import buildImgUrl, {
  ThumbnailLayouts,
  ThumbnailSizes,
} from "../../utils/imgUrlBuilder";

interface Props {
  characterComic: CharacterComic;
}

const ComicCard: React.FC<Props> = ({ characterComic }) => {
  return (
    <div className={styles.comicCard} data-testid="comicCard">
      <img
        className={styles.comicImg}
        src={buildImgUrl(
          characterComic.thumbnail,
          ThumbnailLayouts.standard,
          ThumbnailSizes.medium
        )}
        alt={characterComic.title}
        loading="lazy"
      />
      <p className={styles.title}>{characterComic.title}</p>
      <small className={styles.subTitle}>
        {new Date(characterComic.dates[0].date).getFullYear()}
      </small>
    </div>
  );
};

export default ComicCard;
