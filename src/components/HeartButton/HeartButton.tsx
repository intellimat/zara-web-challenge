import React from "react";
import "./heartButton.css";

interface Props {
  full: boolean;
  onClick?: () => void;
}

const HeartButton: React.FC<Props> = ({ full, onClick }) => {
  const heartIconUrl = full ? "icons/full_heart.svg" : "icons/empty_heart.svg";

  return (
    <button className="heart-button" onClick={onClick}>
      <img src={heartIconUrl} height={18} width={20} alt="Heart icon" />
    </button>
  );
};

export default HeartButton;
