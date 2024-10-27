"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./BrandsContainer.module.css";

const logos = [
  { src: "/images/WebGl.png", width: 150, height: 63, alt: "webgl" },
  { src: "/images/unity.png", width: 226, height: 88, alt: "unity" },
  {
    src: "/images/Unreal Engine.png",
    width: 318,
    height: 85,
    alt: "Unreal Engine",
  },
  { src: "/images/reallusion.png", width: 448, height: 69, alt: "reallusion" },
  {
    src: "/images/openai.png",
    width: 100,
    height: 100,
    alt: "open ai",
    text: "Open Ai",
  },
  { text: "IIElevenLabs" },
  {
    src: "/images/etherum.png",
    width: 80,
    height: 80,
    alt: "Etherum",
    text: "Etherum",
  },
];

const BrandsContainer: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Check for reduced motion preference
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector<HTMLDivElement>(
        `.${styles.brandsInner}`
      );
      if (!scrollerInner) return;

      const scrollerContent = Array.from(scrollerInner.children);

      // Duplicate items for continuous scrolling
      scrollerContent.forEach((item) => {
        // Cast item to HTMLElement
        const element = item as HTMLElement;
        const duplicatedItem = element.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  }, []);

  return (
    <div className={styles.scroller} data-speed="fast" ref={scrollerRef}>
      <div className={styles.brandsInner}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`${styles.brandContainer} ${
              logo.alt === "reallusion" ? styles.realIluusion : ""
            }`}
          >
            {logo.src && (
              <Image
                src={logo.src}
                width={logo.width}
                height={logo.height}
                alt={logo.alt}
              />
            )}
            {logo.text && <p className={styles.brandText}>{logo.text}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsContainer;
