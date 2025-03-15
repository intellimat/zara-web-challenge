import React from "react";
import "./comicCard.module.css";
import { ComicsItem } from "../../types/Character";

interface Props {
  comicItem: ComicsItem;
}

const ComicCard: React.FC<Props> = () => {
  return (
    <div>
      <img src="" alt="" />
    </div>
  );
};

export default ComicCard;
