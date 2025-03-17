import React from "react";
import styles from "./character.module.css";
import Banner from "../../components/Banner/Banner";
import { useQuery } from "@tanstack/react-query";
import {
  getAllCharacters,
  getCharacterComics,
} from "../../services/characterService";
import useStore from "../../store/useStore";
import buildImgUrl, {
  ThumbnailLayouts,
  ThumbnailSizes,
} from "../../utils/imgUrlBuilder";
import { useParams } from "react-router";
import HeartButton from "../../components/HeartButton/HeartButton";
import ComicCard from "../../components/ComicCard/ComicCard";
import Slider from "../../components/Slider/Slider";

const Character: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const characterId = (id !== undefined && parseInt(id)) || undefined;

  const {
    query,
    favouriteCharacters,
    addFavouriteCharacter,
    removeFavouriteCharacter,
  } = useStore();

  const { data: characterComics } = useQuery({
    queryKey: ["character", characterId],
    queryFn: () => {
      if (characterId) return getCharacterComics(characterId!);
    },
    enabled: !!characterId,
  });

  const { data: character } = useQuery({
    queryKey: ["characters", query],
    queryFn: () => getAllCharacters(query),
    select: (data) => data.find((c) => c.id === characterId),
  });

  const isFavourite =
    characterId !== undefined &&
    favouriteCharacters.map((c) => c.id).includes(characterId);

  const handleBtnClick = () => {
    if (isFavourite) {
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
              <HeartButton full={isFavourite} onClick={handleBtnClick} />
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
