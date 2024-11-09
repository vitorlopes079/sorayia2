import React from "react";
import styles from "./PowerfulFeatures.module.css";

const PowerfulFeatures = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.innerContent}>
        <h2 className={styles.header}>POWERFUL FEATURES</h2>
        <p className={styles.subheader}>
          Everything you need for AI Digital Avatar.
        </p>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <PowerfulFeatCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
              width={feature.width}
              height={feature.height}
              top={feature.top}
              overflow={feature.overflow}
            />
          ))}
        </div>
        <div className={styles.ellipse}></div>
        <div className={styles.smallerFeaturesGrid}>
          {smallerFeatures.map((feature, index) => (
            <SmallFeature
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div> */}
      <p></p>
    </div>
  );
};

export default PowerfulFeatures;
