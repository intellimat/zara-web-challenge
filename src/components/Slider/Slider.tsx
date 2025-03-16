import React from "react";
import styles from "./slider.module.css";

interface Props {
  children: React.ReactNode;
}

const Slider: React.FC<Props> = ({ children }) => {
  return <div className={styles.slider}>{children}</div>;
};

export default Slider;
