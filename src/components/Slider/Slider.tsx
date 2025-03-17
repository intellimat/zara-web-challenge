import React from "react";
import styles from "./slider.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Slider: React.FC<Props> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Slider;
