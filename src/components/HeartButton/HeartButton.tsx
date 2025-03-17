import React from "react";
import styles from "./heartButton.module.css";

interface Props {
  full: boolean;
  onClick?: () => void;
}

const HeartButton: React.FC<Props> = ({ full, onClick }) => {
  const heartIconUrl = full
    ? "/icons/full_heart.svg"
    : "/icons/empty_heart.svg";

  return (
    <img
      role="button"
      className={styles.heartButton}
      onClick={onClick}
      src={heartIconUrl}
      alt="Heart icon"
    />
  );
};

export default HeartButton;
