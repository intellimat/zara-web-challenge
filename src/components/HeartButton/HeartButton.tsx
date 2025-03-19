import React from "react";
import styles from "./heartButton.module.css";
import FullHeartIcon from "../../icons/full_heart.svg?react";
import EmptyHeartIcon from "../../icons/empty_heart.svg?react";

interface Props {
  full: boolean;
  fillColor?: string;
  onClick?: () => void;
  hovering: boolean;
}

const HeartButton: React.FC<Props> = ({
  full,
  onClick,
  fillColor,
  hovering,
}) => {
  return (
    <>
      {full ? (
        <FullHeartIcon
          className={`${styles.heartIcon} ${styles.fullHeartIcon} ${
            hovering ? styles.hovering : ""
          }`}
          cursor={"pointer"}
          title="Heart Icon"
          onClick={onClick}
          style={{ "--fill-color": fillColor } as React.CSSProperties}
        />
      ) : (
        <EmptyHeartIcon
          cursor={"pointer"}
          className={styles.heartIcon}
          title="Heart Icon"
          onClick={onClick}
        />
      )}
    </>
  );
};

export default HeartButton;
