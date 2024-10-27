import React from "react";
import Image from "next/image";
import styles from "./Integration.module.css";

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
        <Image
          src={"/images/footer.png"}
          width={1238}
          height={606}
          alt="footer icons"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Integration;
