import React from "react";
import "./character.css";
import Banner from "../../components/Banner/Banner";
import { useQuery } from "@tanstack/react-query";
import { getAllCharacters } from "../../services/characterService";
import useStore from "../../store/useStore";
import buildImgUrl from "../../utils/imgUrlBuilder";
import { useParams } from "react-router";
import HeartButton from "../../components/HeartButton/HeartButton";

const Character: React.FC = () => {
  const { id: characterId } = useParams<{ id: string }>();

  const { query } = useStore();

  const { data: character } = useQuery({
    queryKey: ["characters", query],
    queryFn: () => getAllCharacters(query),
    select: (data) => data.find((c) => c.id === parseInt(characterId!)),
  });

  return (
    <div>
      {character && (
        <Banner
          imgUrl={buildImgUrl(character.thumbnail)}
          name={character.name}
          description={character.description}
          Button={() => <HeartButton full={true} />}
        />
      )}
    </div>
  );
};

export default Character;
