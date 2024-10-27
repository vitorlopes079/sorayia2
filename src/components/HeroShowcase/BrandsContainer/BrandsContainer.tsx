"use client";

import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import styles from "./BrandsContainer.module.css";

const BrandsContainer = () => {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detect if the device is an iOS device
    if (
      typeof navigator !== "undefined" &&
      /iPad|iPhone|iPod/.test(navigator.userAgent)
    ) {
      setIsIOS(true);
    }
  }, []);

  const speed = isIOS ? 60 : 120; // Slower speed on iOS for smoother performance

  return (
    <div className={styles.brandsContainer}>
      <Marquee speed={speed} gradient={false} pauseOnHover>
        <div className={styles.brandsInner}>
          <div className={`${styles.brandContainer} ${styles.webgl}`}>
            <img src="/images/WebGl.png" width="150" height="63" alt="webgl" />
          </div>
          <div className={`${styles.brandContainer} ${styles.unity}`}>
            <img src="/images/unity.png" width="226" height="88" alt="unity" />
          </div>
          <div className={`${styles.brandContainer} ${styles.unreal}`}>
            <img
              src="/images/Unreal Engine.png"
              width="318"
              height="85"
              alt="Unreal Engine"
            />
          </div>
          <div className={`${styles.brandContainer} ${styles.reallusion}`}>
            <img
              src="/images/reallusion.png"
              width="448"
              height="69"
              alt="reallusion"
            />
          </div>
          <div className={`${styles.brandContainer} ${styles.openai}`}>
            <img
              src="/images/openai.png"
              width="100"
              height="100"
              alt="open ai"
            />
            <p className={styles.brandText}>Open Ai</p>
          </div>
          <div className={`${styles.brandContainer} ${styles.elevenLabs}`}>
            <p className={styles.brandText}>IIElevenLabs</p>
          </div>
          <div className={`${styles.brandContainer} ${styles.etherum}`}>
            <img
              src="/images/etherum.png"
              width="80"
              height="80"
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
