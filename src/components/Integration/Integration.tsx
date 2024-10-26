import React from "react";
import Image from "next/image";
import styles from "./Integration.module.css";

const iconsLeft = [
  { src: "/images/google-drive.svg", alt: "Google Drive" },
  { src: "/images/notion.png", alt: "Notion" },
  { src: "/images/word.svg", alt: "Word" },
  { src: "/images/pdf.png", alt: "PDF" },
  { src: "/images/link.png", alt: "Link" },
];

const iconsRight = [
  { src: "/images/telegram.svg", alt: "Telegram" },
  { src: "/images/discord.png", alt: "Discord" },
  { src: "/images/DAPP.png", alt: "Dapp" },
  { src: "/images/meta.png", alt: "Meta" },
  { src: "/images/web.png", alt: "Web" },
];

const iconCenter = { src: "/images/logo.svg", alt: "Center Logo" };

const Integration = () => {
  return (
    <div className={styles.container}>
      <section className={styles.protocolSection}>
        <h2 className={styles.title}>Integration</h2>
        <p className={styles.subtitle}>
          Seamlessly integrate digital avatars into dApps, metaverse
          environments, and Web3 services for a consistent user experience.
        </p>
      </section>
      <div className={styles.integrationWrapper}>
        <div className={styles.iconsLeft}>
          {iconsLeft.map((icon, index) => (
            <div
              key={index}
              className={`${styles.iconWrapper} ${
                styles[`iconLeft${index + 1}`]
              }`}
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={50}
                height={50}
                className={styles.icon}
              />
            </div>
          ))}
        </div>
        <div className={`${styles.linesgroup} ${styles.leftLinesGroup}`}>
          <Image
            src={"/images/linesgroup.png"}
            width={379}
            height={503}
            alt="lines group"
          />
        </div>
        <div className={styles.center}>
          <Image
            src={iconCenter.src}
            alt={iconCenter.alt}
            width={100}
            height={100}
            className={styles.centerIcon}
          />
        </div>
        <div className={`${styles.linesgroup} ${styles.rightLinesGroup}`}>
          <Image
            src={"/images/linesgroup.png"}
            width={379}
            height={503}
            alt="lines group"
          />
        </div>
        <div className={styles.iconsRight}>
          {iconsRight.map((icon, index) => (
            <div
              key={index}
              className={`${styles.iconWrapper} ${
                styles[`iconRight${index + 1}`]
              }`}
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={50}
                height={50}
                className={styles.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Integration;
