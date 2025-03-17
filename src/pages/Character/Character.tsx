import React, { useCallback } from "react";
import styles from "./character.module.css";
import Banner from "../../components/Banner/Banner";
import useStore from "../../store/useStore";
import buildImgUrl, {
  ThumbnailLayouts,
  ThumbnailSizes,
} from "../../utils/imgUrlBuilder";
import { useParams } from "react-router";
import HeartButton from "../../components/HeartButton/HeartButton";
import ComicCard from "../../components/ComicCard/ComicCard";
import Slider from "../../components/Slider/Slider";
import { useCharacterComics } from "../../customHooks/useCharacterComics";
import { useCharacters } from "../../customHooks/useCharacters";
import { Character as CharacterType } from "../../types/Character";
const Character: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const characterId = id ? parseInt(id) : null;

  const {
    favouriteCharacters,
    addFavouriteCharacter,
    removeFavouriteCharacter,
  } = useStore();

  const { data: characterComics } = useCharacterComics(characterId);
  const characterSelector = useCallback(
    (data: CharacterType[]) =>
      data.find((c: CharacterType) => c.id === characterId),
    [characterId]
  );
  const { data: character } = useCharacters<CharacterType | undefined>(
    characterSelector
  );

  const isFavourite =
    characterId !== null &&
    favouriteCharacters.some((c) => c.id === characterId);

  const toggleFavourite = () => {
    if (isFavourite && characterId) {
      removeFavouriteCharacter(characterId);
    } else if (character !== undefined) {
      addFavouriteCharacter(character);
    }
  };

  return (
    <>
      {character && (
        <>
          <Banner
            imgUrl={buildImgUrl(
              character.thumbnail,
              ThumbnailLayouts.standard,
              ThumbnailSizes.xlarge
            )}
            name={character.name}
            description={character.description}
            Button={() => (
              <HeartButton full={isFavourite} onClick={toggleFavourite} />
            )}
          />
          <div className={styles.comicsContainer}>
            <h2 className={styles.comicsTitle}>Comics</h2>
            <div>
              <Slider className={styles.slider}>
                {characterComics &&
                  characterComics.map((characterComic) => (
                    <ComicCard
                      key={characterComic.id}
                      characterComic={characterComic}
                    />
                  ))}
              </Slider>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Character;
