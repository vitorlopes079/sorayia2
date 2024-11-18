"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./DocsSideMenu.module.css";

const DocsSideMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Menu Icon */}
      <div
        className={styles.menuIcon}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        ☰ Navigation
      </div>

      {/* Sidebar */}
      <div
        className={`${styles.sidebar} ${isMenuOpen ? styles.showMenu : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <h2 className={styles.title}>Soraya Vision</h2>
        <nav>
          {/* Overview Section */}
          <div className={styles.menuSection}>
            <h3 className={styles.sectionTitle}>OVERVIEW</h3>
            <ul className={styles.ul}>
              <li className={styles.menuItem}>
                <Link
                  href="/docs/what-is-sorayia"
                  className={`${styles.link} ${
                    isActive("/docs/what-is-sorayia") ? styles.active : ""
                  }`}
                  onClick={closeMenu} // Close menu on click
                >
                  What is Sorayia.com
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  href="/docs/problems-we-are"
                  className={`${styles.link} ${
                    isActive("/docs/problems-we-are") ? styles.active : ""
                  }`}
                  onClick={closeMenu} // Close menu on click
                >
                  Problems we&apos;re solving
                </Link>
              </li>
            </ul>
          </div>

          {/* Protocol Section */}
          <div className={styles.menuSection}>
            <h3 className={styles.sectionTitle}>PROTOCOL</h3>
            <ul className={styles.ul}>
              <li className={styles.menuItem}>
                <Link
                  href="/docs/infrastructure"
                  className={`${styles.link} ${
                    isActive("/docs/infrastructure") ? styles.active : ""
                  }`}
                  onClick={closeMenu} // Close menu on click
                >
                  Infrastructure
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  href="/docs/heroes-studio"
                  className={`${styles.link} ${
                    isActive("/docs/heroes-studio") ? styles.active : ""
                  }`}
                  onClick={closeMenu} // Close menu on click
                >
                  Heroe’s Studio
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  href="/docs/deployment-ramp"
                  className={`${styles.link} ${
                    isActive("/docs/deployment-ramp") ? styles.active : ""
                  }`}
                  onClick={closeMenu} // Close menu on click
                >
                  Deployment ramp
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  href="/docs/index-model"
                  className={`${styles.link} ${
                    isActive("/docs/index-model") ? styles.active : ""
                  }`}
                  onClick={closeMenu} // Close menu on click
                >
                  Index Model
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  href="/docs/asset-market-place"
                  className={`${styles.link} ${
                    isActive("/docs/asset-market-place") ? styles.active : ""
                  }`}
                  onClick={closeMenu} // Close menu on click
                >
                  Asset marketplace
                </Link>
              </li>
            </ul>
          </div>

          {/* Economics Section */}
          <div className={styles.menuSection}>
            <h3 className={styles.sectionTitle}>ECONOMICS</h3>
            <ul className={styles.ul}>
              <li className={styles.menuItem}>
                <Link
                  href="/docs/buy-sra"
                  className={`${styles.link} ${
                    isActive("/docs/buy-sra") ? styles.active : ""
                  }`}
                  onClick={closeMenu} // Close menu on click
                >
                  Buy $SRA
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  href="/docs/stake-sra"
                  className={`${styles.link} ${
                    isActive("/docs/stake-sra") ? styles.active : ""
                  }`}
                  onClick={closeMenu} // Close menu on click
                >
                  Stake $SRA
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  href="/docs/kryptonite"
                  className={`${styles.link} ${
                    isActive("/docs/kryptonite") ? styles.active : ""
                  }`}
                  onClick={closeMenu} // Close menu on click
                >
                  Kryptonite introduction
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div className={styles.menuSection}>
            <h3 className={styles.sectionTitle}>COMMUNITY</h3>
            <ul className={styles.ul}>
              <li className={styles.menuItem}>
                <a
                  href="https://t.me/sorayiaofficialcommunity"
                  className={`${styles.link} ${
                    isActive("/community/telegram") ? styles.active : ""
                  }`}
                  onClick={closeMenu}
                >
                  Telegram
                </a>
              </li>
              <li className={styles.menuItem}>
                <Link
                  href="/community/discord"
                  className={`${styles.link} ${
                    isActive("/community/discord") ? styles.active : ""
                  }`}
                  onClick={closeMenu} // Close menu on click
                >
                  Discord
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  href="/community/x"
                  className={`${styles.link} ${
                    isActive("/community/x") ? styles.active : ""
                  }`}
                  onClick={closeMenu} // Close menu on click
                >
                  X.com
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default DocsSideMenu;
