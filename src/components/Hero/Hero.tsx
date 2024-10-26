import React from "react";
import ButtonEmpty from "../ButtonEmpty/ButtonEmpty";
import ButtonFilled from "../ButtonFilled/ButtonFilled";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <p className={styles.text}>The #1 platform that serves Web3 business</p>
        <h1 className={styles.header}>
          Digital Avatars that Makes User Support Warm and Human
        </h1>
        <p className={styles.text}>
          Revolutionize the way your users interact with your Web3 platform,
          with a digital assistant that learns and evolves with them.
        </p>

        <div className={styles.buttonContainer}>
          <ButtonFilled text={"Get Started"} />
          <ButtonEmpty text={"Try a Demo"} />
        </div>
        <p className={styles.text}>
          Join 2000+ dApps Using Our Personalized Hero&apos;s
        </p>
      </div>
      <div className={styles.col}>
        <div className={styles.smallEllipse}></div>
        <div className={styles.smallEllipse2}></div>
      </div>
    </div>
  );
};

export default Hero;
