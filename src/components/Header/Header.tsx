"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import usePathname hook
import styles from "./Header.module.css";
import Link from "next/link";
import ButtonFilled from "../ButtonFilled/ButtonFilled";
import ButtonEmpty from "../ButtonEmpty/ButtonEmpty";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Check if the current route is /docs or its children
  const isDocsRoute = pathname.startsWith("/docs");

  return (
    <div
      className={`${styles.header} ${isDocsRoute ? styles.docsBackground : ""}`}
    >
      <Link href="/" className={styles.logo}>
        <Image
          src="/images/logo.svg"
          width={35}
          height={39}
          alt="logo"
          className={styles.logoImage}
        />
        <h4 className={styles.logoText}>SORAYIA.COM</h4>
      </Link>
      <div className={`${styles.links} ${menuOpen ? styles.showMenu : ""}`}>
        <Link
          href={"/"}
          className={styles.link}
          onClick={() => setMenuOpen(false)}
        >
          Features
        </Link>
        <Link
          href={"/"}
          className={styles.link}
          onClick={() => setMenuOpen(false)}
        >
          Community
        </Link>
        <Link
          href={"/"}
          className={styles.link}
          onClick={() => setMenuOpen(false)}
        >
          Pricing
        </Link>
        <Link
          href={"/"}
          className={styles.link}
          onClick={() => setMenuOpen(false)}
        >
          Learn
        </Link>
      </div>
      <div className={styles.buttonsContainer}>
        <ButtonFilled text={"Login"} isHeader={true} />
        <ButtonEmpty text={"Get Started"} isHeader={true} />
        <div
          className={`${styles.hamburger} ${
            menuOpen ? styles.hamburgerActive : ""
          }`}
          onClick={toggleMenu}
        >
          <div
            className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`}
          ></div>
          <div
            className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`}
          ></div>
          <div
            className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
