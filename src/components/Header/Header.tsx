"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import ButtonFilled from "../ButtonFilled/ButtonFilled";
import ButtonEmpty from "../ButtonEmpty/ButtonEmpty";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/images/logo.svg"
          width={35}
          height={39}
          alt="logo"
          className={styles.logoImage}
        />
        <h4 className={styles.logoText}>SORAYIA.COM</h4>
      </div>
      <div className={`${styles.links} ${menuOpen ? styles.showMenu : ""}`}>
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
        <ButtonFilled text={"Login"} isHeader={true} />
        <ButtonEmpty text={"Get Started"} isHeader={true} />
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
