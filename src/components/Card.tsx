import React from "react";

interface Props {
  imgUrl: string;
  name: string;
  isFavourite: boolean;
}

const Card: React.FC<Props> = ({ imgUrl, name, isFavourite }) => {
  return (
    <div>
      {/* Character Image Section */}
      <div>
        <img src={""} alt={""} />
      </div>

      {/* Red Divider Line */}
      <div></div>

      {/* Name and Like Section */}
      <div></div>
    </div>
  );
};

export default Card;
