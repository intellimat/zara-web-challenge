import React, { useCallback, useMemo } from "react";
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
import sortCharacterComics from "../../utils/sortComics";

const Character: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const characterId = id ? parseInt(id) : null;

  const {
    favouriteCharacters,
    addFavouriteCharacter,
    removeFavouriteCharacter,
  } = useStore();

  const { data: characterComics, isPending } = useCharacterComics(characterId);

  const sortedCharacterComics = useMemo(() => {
    if (!characterComics) return [];
    return sortCharacterComics(characterComics);
  }, [characterComics]);

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

  const toggleFavourite = useCallback(() => {
    if (characterId === null || !character) return;

    if (isFavourite) {
      removeFavouriteCharacter(characterId);
    } else {
      addFavouriteCharacter(character);
    }
  }, [
    isFavourite,
    characterId,
    character,
    addFavouriteCharacter,
    removeFavouriteCharacter,
  ]);

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
            description={
              character.description.length > 0
                ? character.description
                : "No description available. "
            }
            Button={() => (
              <HeartButton full={isFavourite} onClick={toggleFavourite} />
            )}
          />
          {!isPending &&
            (sortedCharacterComics.length > 0 ? (
              <div className={styles.comicsContainer}>
                <h2 className={styles.comicsTitle}>Comics</h2>
                <div>
                  <Slider className={styles.slider}>
                    {sortedCharacterComics.map((characterComic) => (
                      <ComicCard
                        key={characterComic.id}
                        characterComic={characterComic}
                      />
                    ))}
                  </Slider>
                </div>
              </div>
            ) : (
              <p className={styles.emptyComics}>No comics available. </p>
            ))}
        </>
      )}
    </>
  );
};

export default Character;
