"use client";

import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import styles from "./BrandsContainer.module.css";

const BrandsContainer = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen width is mobile size at initial load
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set the breakpoint for mobile
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const speed = isMobile ? 60 : 120; // Slower speed on mobile for smoother performance

  return (
    <div className={styles.brandsContainer}>
      <Marquee speed={speed} gradient={false} pauseOnHover loop={0}>
        <div className={styles.brandsInner}>
          <div
            key="webgl"
            className={`${styles.brandContainer} ${styles.webgl}`}
          >
            <img
              src="/images/WebGl.png"
              width={isMobile ? 75 : 150} // Half the size on mobile
              height={isMobile ? 31 : 63}
              alt="webgl"
            />
          </div>
          <div
            key="unity"
            className={`${styles.brandContainer} ${styles.unity}`}
          >
            <img
              src="/images/unity.png"
              width={isMobile ? 113 : 226} // Half the size on mobile
              height={isMobile ? 44 : 88}
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
            <img
              src="/images/openai.png"
              width={isMobile ? 50 : 100} // Half the size on mobile
              height={isMobile ? 50 : 100}
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
            <img
              src="/images/etherum.png"
              width={isMobile ? 40 : 80} // Half the size on mobile
              height={isMobile ? 40 : 80}
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
