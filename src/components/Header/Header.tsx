import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import ButtonFilled from "../ButtonFilled/ButtonFilled";
import ButtonEmpty from "../ButtonEmpty/ButtonEmpty";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image src="/images/logo.svg" width={35} height={39} alt="logo" />
        <h4>SORAYIA.COM</h4>
      </div>
      <div className={styles.links}>
        <Link href={"/"} className={styles.link}>
          Features
        </Link>
        <Link href={"/"} className={styles.link}>
          Community
        </Link>
        <Link href={"/"} className={styles.link}>
          Pricing
        </Link>
        <Link href={"/"} className={styles.link}>
          Learn
        </Link>
      </div>
      <div className={styles.buttonsContainer}>
        <ButtonFilled text={"Login"} />
        <ButtonEmpty text={"Get Started"} />
      </div>
    </div>
  );
};

export default Header;
