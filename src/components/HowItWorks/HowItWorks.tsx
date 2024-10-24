"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./HowItWorks.module.css";

const steps = [
  { number: "01", title: "Personalize your Heroe" },
  { number: "02", title: "Import your Data" },
  { number: "03", title: "Customize behavior" },
  { number: "04", title: "Embed on your Dapp & Metaverse" },
  { number: "05", title: "Integrate with your tools" },
];

const images = [
  "/images/placeholder1.jpg",
  "/images/placeholder2.jpg",
  "/images/placeholder3.jpg",
  "/images/placeholder4.jpg",
  "/images/placeholder5.jpg",
];

const HowItWorks: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const toggleStep = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleBulletClick = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className={styles.howItWorks}>
      <div className={styles.col}>
        <h2 className={styles.title}>HOW IT WORKS</h2>
        <p className={styles.subtitle}>
          Customizing your Avatar, Upload Your Data, Train the AI, Customize It,
          and Integrate Seamlessly into Your Dapp.
        </p>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${styles.step} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => toggleStep(index)}
            >
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>{step.number}</span>
                <span className={styles.stepTitle}>{step.title}</span>
                <span className={styles.expandIcon}>
                  <Image
                    src="/images/arrow.png"
                    alt="Expand icon"
                    width={15}
                    height={11}
                    className={
                      activeIndex === index
                        ? styles.rotateUp
                        : styles.rotateDown
                    }
                  />
                </span>
              </div>
              {activeIndex === index && (
                <div className={styles.stepDescription}>
                  This is a placeholder description for{" "}
                  {step.title.toLowerCase()}. You can customize this content.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.carousel}>
          <div
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            {images.map((src, index) => (
              <div className={styles.slide} key={index}>
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            ))}
          </div>
          <div className={styles.bullets}>
            {images.map((_, index) => (
              <span
                key={index}
                className={`${styles.bullet} ${
                  currentImage === index ? styles.activeBullet : ""
                }`}
                onClick={() => handleBulletClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
