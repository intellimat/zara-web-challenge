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
    <div className={styles.comicCard}>
      <img
        className={styles.comicImg}
        src={buildImgUrl(
          characterComic.thumbnail,
          ThumbnailLayouts.standard,
          ThumbnailSizes.medium
        )}
        alt={characterComic.title}
      />
      <p className={styles.title}>{characterComic.title}</p>
      <small className={styles.subTitle}>1967</small>
    </div>
  );
};

export default ComicCard;
