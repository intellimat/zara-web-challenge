import React from "react";
import "./character.module.css";
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
    queryKey: ["characters/" + characterId + "/comics"],
    queryFn: () => {
      if (characterId) return getCharacterComics(characterId);
    },
  });

  const { data: character } = useQuery({
    queryKey: ["characters", query],
    queryFn: () => getAllCharacters(query),
    select: (data) =>
      (characterId !== undefined && data.find((c) => c.id === characterId)) ||
      undefined,
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
          <div>
            <h2>Comics</h2>
            <div>
              {characterComics &&
                characterComics.map((characterComic) => (
                  <ComicCard
                    key={characterComic.id}
                    characterComic={characterComic}
                  />
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Character;
