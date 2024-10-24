import React from "react";
import Image from "next/image";
import styles from "./BrandsContainer.module.css";

const BrandsContainer = () => {
  return (
    <div className={styles.carousel}>
      <div className={styles.carouselInner}>
        {/* Original set of images */}
        <div className={styles.group}>
          <Image
            src={"/images/WebGl.png"}
            width={150}
            height={63}
            alt="webgl"
          />
          <Image
            src={"/images/unity.png"}
            width={226}
            height={88}
            alt="unity"
          />
          <Image
            src={"/images/Unreal Engine.png"}
            width={318}
            height={85}
            alt="Unreal Engine"
          />
          <Image
            src={"/images/reallusion.png"}
            width={448}
            height={69}
            alt="reallusion"
          />
        </div>
        {/* Duplicate set of images for a seamless loop, shown only on smaller screens */}
        <div
          className={`${styles.group} ${styles.duplicateGroup}`}
          aria-hidden="true"
        >
          <Image
            src={"/images/WebGl.png"}
            width={150}
            height={63}
            alt="webgl"
          />
          <Image
            src={"/images/unity.png"}
            width={226}
            height={88}
            alt="unity"
          />
          <Image
            src={"/images/Unreal Engine.png"}
            width={318}
            height={85}
            alt="Unreal Engine"
          />
          <Image
            src={"/images/reallusion.png"}
            width={448}
            height={69}
            alt="reallusion"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandsContainer;
