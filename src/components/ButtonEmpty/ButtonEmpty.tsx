import React from "react";
import styles from "./ButtonEmpty.module.css";

interface ButtonEmptyProps {
  text: string;
}

const ButtonEmpty: React.FC<ButtonEmptyProps> = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

export default ButtonEmpty;
