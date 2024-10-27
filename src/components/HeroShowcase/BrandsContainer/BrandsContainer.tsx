import React from "react";
import Image from "next/image";
import styles from "./BrandsContainer.module.css";

const BrandsContainer = () => {
  return (
    <div className={styles.brandsContainer}>
      <div className={styles.brandsInner}>
        <div className={styles.group}>
          {/* First set of logos */}
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
            className={styles.realIluusion}
          />

          <div className={styles.brandContainer}>
            <Image
              src={"/images/openai.png"}
              width={100}
              height={100}
              alt="open ai"
            />
            <p className={styles.brandText}>Open Ai</p>
          </div>

          <div className={styles.brandContainer}>
            <p className={styles.brandText}>IIElevenLabs</p>
          </div>

          <div className={styles.brandContainer}>
            <Image
              src={"/images/etherum.png"}
              width={80}
              height={80}
              alt="Etherum"
            />
            <p className={styles.brandText}>Etherum</p>
          </div>

          {/* Second set of logos */}
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
            className={styles.unreal}
          />
          <Image
            src={"/images/reallusion.png"}
            width={448}
            height={69}
            alt="reallusion"
            className={styles.realIluusion}
          />

          <div className={styles.brandContainer}>
            <Image
              src={"/images/openai.png"}
              width={100}
              height={100}
              alt="open ai"
            />
            <p className={styles.brandText}>Open Ai</p>
          </div>

          <div className={styles.brandContainer}>
            <p className={styles.brandText}>IIElevenLabs</p>
          </div>

          <div className={styles.brandContainer}>
            <Image
              src={"/images/etherum.png"}
              width={80}
              height={80}
              alt="Etherum"
            />
            <p className={styles.brandText}>Etherum</p>
          </div>

          {/* Third set of logos */}
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
            className={styles.realIluusion}
          />

          <div className={styles.brandContainer}>
            <Image
              src={"/images/openai.png"}
              width={100}
              height={100}
              alt="open ai"
            />
            <p className={styles.brandText}>Open Ai</p>
          </div>

          <div className={styles.brandContainer}>
            <p className={styles.brandText}>IIElevenLabs</p>
          </div>

          <div className={styles.brandContainer}>
            <Image
              src={"/images/etherum.png"}
              width={80}
              height={80}
              alt="Etherum"
            />
            <p className={styles.brandText}>Etherum</p>
          </div>

          {/* Third set of logos */}
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
            className={styles.realIluusion}
          />

          <div className={styles.brandContainer}>
            <Image
              src={"/images/openai.png"}
              width={100}
              height={100}
              alt="open ai"
            />
            <p className={styles.brandText}>Open Ai</p>
          </div>

          <div className={styles.brandContainer}>
            <p className={styles.brandText}>IIElevenLabs</p>
          </div>

          <div className={styles.brandContainer}>
            <Image
              src={"/images/etherum.png"}
              width={80}
              height={80}
              alt="Etherum"
            />
            <p className={styles.brandText}>Etherum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsContainer;
