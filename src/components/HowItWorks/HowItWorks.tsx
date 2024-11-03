"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    number: "01",
    title: "Personalize your Hero",
    description:
      "Personalize every aspect of your 3D Hero to fit your brand’s unique style. Adjust appearance, behavior, and voice, and define how it interacts with users. Create a truly unique experience that aligns perfectly with your vision.",
  },
  {
    number: "02",
    title: "Import your Data",
    description:
      "Integrate text, PDF, and web links into your data pipeline, leveraging a vast array of Web3 data. Extract, process, and embed the information directly into your digital avatar, ensuring precise and data-rich interactions for your users.",
  },
  {
    number: "03",
    title: "Customize behavior",
    description:
      "Make your Digital Avatar blend perfectly into your Dapp with custom colors and logos. Align its personality with your brand through tailored instructions for a consistent and engaging user experience.",
  },
  {
    number: "04",
    title: "Embed on your Dapp & Metaverse",
    description:
      "Integrate your digital avatars effortlessly into your dApp and the metaverse. Enhance user interactions with AI-powered, data-rich avatars that bring a new level of engagement and immersion to your virtual environments.",
  },
  {
    number: "05",
    title: "Integrate with your tools",
    description:
      "Ensure seamless interoperability with your existing tools. Connect your digital avatars to APIs, CRM systems, and Web3 services, enabling smooth data flow and enhanced functionality.",
  },
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
    }, 3000000); // Change image every 3 seconds

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
                <div className={styles.stepDescription}>{step.description}</div>
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
              <div
                className={`${styles.slide} ${
                  currentImage === index ? styles.active : ""
                }`}
                key={index}
              >
                <div className={styles.ellipse1}></div>
                <div className={styles.ellipse2}></div>
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  priority
                  className={styles.image}
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
