import React from "react";
import Image from "next/image";
import styles from "./PowerfulFeatCard.module.css";

interface PowerfulFeatCardProps {
  title: string;
  description: string;
}

const PowerfulFeatCard: React.FC<PowerfulFeatCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src="https://picsum.photos/400/200" 
          alt={title}
          width={400}
          height={200}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default PowerfulFeatCard;
