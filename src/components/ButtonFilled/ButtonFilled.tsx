import React from "react";
import styles from "./ButtonFilled.module.css";

interface ButtonFilledProps {
  text: string;
}

const ButtonFilled: React.FC<ButtonFilledProps> = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

export default ButtonFilled;
