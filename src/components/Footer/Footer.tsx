import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import ButtonFilled from "../ButtonFilled/ButtonFilled";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.branding}>
          <div className={styles.logo}>
            <Image
              src="/images/logo.svg"
              width={35}
              height={39}
              alt="logo"
              className={styles.logoImage}
            />
            <h4 className={styles.logoText}>SORAYIA.COM</h4>
          </div>{" "}
          <p className={styles.subtitle}>Custom ChatGPT for your business</p>
          <div className={styles.socialIcons}>
            <ButtonFilled text={"Contact"} />

            <Link
              href="https://www.linkedin.com/in/sorayia-media-387b03287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className={styles.link}
            >
              <Image
                src="/images/social-icons/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className={styles.iconImage}
              />
            </Link>
            <Link
              href="https://www.instagram.com/sorayiadotcom"
              className={styles.link}
            >
              <Image
                src="/images/social-icons/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
                className={styles.iconImage}
              />
            </Link>
            <Link href="https://www.twitter.com" className={styles.icon}>
              <Image
                src="/images/social-icons/twitter.png"
                alt="Twitter"
                width={24}
                height={24}
                className={styles.iconImage}
              />
            </Link>
            <Link
              href="https://www.facebook.com/share/mtEKYXj4ih7Vm6pH/?mibextid=LQQJ4d"
              className={styles.facebookIcon}
            >
              <Image
                src="/images/social-icons/facebook.png"
                alt="facebook"
                width={24}
                height={24}
                className={styles.iconImage}
              />
            </Link>
            <Link
              href="https://t.me/sorayiaofficialcommunity"
              className={styles.iconTelegram}
            >
              <Image
                src="/images/social-icons/telegram.png"
                alt="YouTube"
                width={24}
                height={24}
                className={styles.iconImage}
              />
            </Link>
          </div>
        </div>

        {/* Links Section */}
        <div className={styles.linksSection}>
          <div className={styles.linksColumn}>
            <h3>Product</h3>
            <ul>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/security">Security</Link>
              </li>
              <li>
                <Link href="/affiliates">Affiliates</Link>
              </li>
            </ul>
          </div>
          <div className={styles.linksColumn}>
            <h3>Resources</h3>
            <ul>
              <li>
                <Link href="/api">API</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/guide">Guide</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className={styles.linksColumn}>
            <h3>Company</h3>
            <ul>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service">Terms of Service</Link>
              </li>
              <li>
                <Link href="/dpa">DPA</Link>
              </li>
              <li>
                <Link href="/cookie-policy">Cookie Policy</Link>
              </li>
              <li>
                <Link href="/trust-center">Trust Center</Link>
              </li>
              <li>
                <Link href="/cookie-preferences">Cookie Preferences</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.ellipse}></div>
    </footer>
  );
};

export default Footer;
