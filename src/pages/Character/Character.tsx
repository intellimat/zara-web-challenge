import React from "react";
import "./character.module.css";
import Banner from "../../components/Banner/Banner";
import { useQuery } from "@tanstack/react-query";
import { getAllCharacters } from "../../services/characterService";
import useStore from "../../store/useStore";
import buildImgUrl from "../../utils/imgUrlBuilder";
import { useParams } from "react-router";
import HeartButton from "../../components/HeartButton/HeartButton";

const Character: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const characterId = (id !== undefined && parseInt(id)) || undefined;

  const {
    query,
    favouriteCharacters,
    addFavouriteCharacter,
    removeFavouriteCharacter,
  } = useStore();

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
            imgUrl={buildImgUrl(character.thumbnail)}
            name={character.name}
            description={character.description}
            Button={() => (
              <HeartButton full={isFavourite} onClick={handleBtnClick} />
            )}
          />
          <div>
            <h2>Comics</h2>
          </div>
        </>
      )}
    </>
  );
};

export default Character;
