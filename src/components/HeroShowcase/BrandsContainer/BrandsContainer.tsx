"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import styles from "./BrandsContainer.module.css";

const BrandsContainer = () => {
  // Dynamically set the speed for different screen sizes
  const speed =
    typeof window !== "undefined" && window.innerWidth < 768 ? 60 : 120;

  return (
    <div className={styles.brandsContainer}>
      <Marquee speed={speed} gradient={false} pauseOnHover>
        <div className={styles.brandsInner}>
          <div className={`${styles.brandContainer} ${styles.webgl}`}>
            <Image
              src="/images/WebGl.png"
              width={150}
              height={63}
              alt="webgl"
            />
          </div>
          <div className={`${styles.brandContainer} ${styles.unity}`}>
            <Image
              src="/images/unity.png"
              width={226}
              height={88}
              alt="unity"
            />
          </div>
          <div className={`${styles.brandContainer} ${styles.unreal}`}>
            <Image
              src="/images/Unreal Engine.png"
              width={318}
              height={85}
              alt="Unreal Engine"
            />
          </div>
          <div className={`${styles.brandContainer} ${styles.reallusion}`}>
            <Image
              src="/images/reallusion.png"
              width={448}
              height={69}
              alt="reallusion"
            />
          </div>
          <div className={`${styles.brandContainer} ${styles.openai}`}>
            <Image
              src="/images/openai.png"
              width={100}
              height={100}
              alt="open ai"
            />
            <p className={styles.brandText}>Open Ai</p>
          </div>
          <div className={`${styles.brandContainer} ${styles.elevenLabs}`}>
            <p className={styles.brandText}>IIElevenLabs</p>
          </div>
          <div className={`${styles.brandContainer} ${styles.etherum}`}>
            <Image
              src="/images/etherum.png"
              width={80}
              height={80}
              alt="Etherum"
            />
            <p className={styles.brandText}>Etherum</p>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default BrandsContainer;
