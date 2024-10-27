"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import styles from "./BrandsContainer.module.css";

const BrandsContainer = () => {
  // Detect if the device is an iOS device
  const isIOS =
    typeof window !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const speed = isIOS ? 60 : 120; // Slower speed on iOS for smoother performance

  return (
    <div className={styles.brandsContainer}>
      <Marquee
        speed={speed}
        gradient={false}
        pauseOnHover
        loop={0}
        style={{ whiteSpace: "nowrap" }}
      >
        <div className={styles.brandsInner}>
          <div
            key="webgl"
            className={`${styles.brandContainer} ${styles.webgl}`}
          >
            <Image
              src="/images/WebGl.png"
              width={150}
              height={63}
              alt="webgl"
            />
          </div>
          <div
            key="unity"
            className={`${styles.brandContainer} ${styles.unity}`}
          >
            <Image
              src="/images/unity.png"
              width={226}
              height={88}
              alt="unity"
            />
          </div>
          <div
            key="unreal"
            className={`${styles.brandContainer} ${styles.unreal}`}
          >
            <p className={styles.brandText}>Unreal Engine</p>
          </div>
          <div
            key="reallusion"
            className={`${styles.brandContainer} ${styles.reallusion}`}
          >
            <p className={styles.brandText}>Reallusion</p>
          </div>
          <div
            key="openai"
            className={`${styles.brandContainer} ${styles.openai}`}
          >
            <Image
              src="/images/openai.png"
              width={100}
              height={100}
              alt="open ai"
            />
            <p className={styles.brandText}>Open Ai</p>
          </div>
          <div
            key="elevenLabs"
            className={`${styles.brandContainer} ${styles.elevenLabs}`}
          >
            <p className={styles.brandText}>IIElevenLabs</p>
          </div>
          <div
            key="etherum"
            className={`${styles.brandContainer} ${styles.etherum}`}
          >
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
