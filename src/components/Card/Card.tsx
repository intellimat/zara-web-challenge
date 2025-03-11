import React from "react";
import "./card.css";

interface Props {
  imgUrl: string;
  name: string;
  isFavourite: boolean;
}

const Card: React.FC<Props> = ({ imgUrl, name, isFavourite }) => {
  return (
    <div className="box">
      {/* Character Image Section */}
      <div>{/* <img src={} alt={""} /> */}</div>

      {/* Red Divider Line */}
      <div></div>

      {/* Name and Like Section */}
      <div className="title">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Card;
