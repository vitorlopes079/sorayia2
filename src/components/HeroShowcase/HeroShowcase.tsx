import React from "react";
import ButtonFilled from "../ButtonFilled/ButtonFilled";
import styles from "./HeroShowcase.module.css";
import Image from "next/image";
import BrandsContainer from "./BrandsContainer/BrandsContainer";

const HeroShowcase = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.text}> START to invest in $SRA</p>
        <div className={styles.buttonContainer}>
          <ButtonFilled text={"BUY$SRA"} />
          <ButtonFilled text={"STAKE$SRA"} />
        </div>
      </div>

      <BrandsContainer />

      <div className={styles.imagesSection}>
        <div className={styles.imageContainer1}>
          <Image
            src={"/images/girl.png"}
            width={300}
            height={471}
            alt="girl"
            className={styles.image1}
          />
        </div>

        <div className={styles.imageContainer2}>
          <Image
            src={"/images/mobile.png"}
            width={250}
            height={504}
            alt="mobile"
            className={styles.image2}
          />
        </div>

        <div className={styles.imageContainer3}>
          <Image
            src={"/images/screen.jpeg"}
            width={636}
            height={508}
            alt="mobile"
            className={styles.image3}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroShowcase;
