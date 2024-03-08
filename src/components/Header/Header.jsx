import React, { useState } from "react";
import styles from "./Header.module.scss";
import {
  FaBarsStaggered,
  FaChevronDown,
  FaXmark,
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import Button from "../Button/Button";
import map from "../../utils/images/map.jpg";

const Header = ({ image, title, text, bottomImage }) => {
  const [hover, setHover] = useState(false);
  const [hoverSocial, setHoveredSocial] = useState();
  const [hamburger, setHamburger] = useState(false);

  const socialIcons = [
    { index: 0, icon: FaXTwitter },
    { index: 1, icon: FaFacebookF },
    { index: 2, icon: FaYoutube },
    { index: 3, icon: FaInstagram },
    { index: 4, icon: FaLinkedinIn },
  ];

  const style = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className={styles.header} style={style}>
      <div className={styles.opacity}></div>
      <div className={styles.content}>
        <div className={styles.nav}>
          <div className={styles.menu}>
            <FaBarsStaggered
              className={styles.icon}
              color="#ffffff"
              onClick={() => setHamburger(true)}
            />
          </div>
          <div className={styles.logo}>
            <p className={styles.first}>Africana</p>
            <p className={styles.second}>Hotel Bar & Resort</p>
          </div>
          <div className={styles.buttonContainer}>
            <Button color="#FFFFFF" hoverColor="#FFFFFF" />
          </div>
        </div>

        <div className={styles.arrowDown}>
          <FaChevronDown size="2rem" color="#ffffff" />
        </div>

        <div className={styles.sectionIntro}>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>

        {/* <div className={styles.shape}>
          <img src={bottomImage ? bottomImage : smokeImage} alt="" />
        </div> */}
      </div>

      <div className={`${styles.menuItems} ${hamburger ? styles.active : ""}`}>
        <div className={`${styles.nav} ${styles.menuNav}`}>
          <div className={styles.menu}>
            <FaXmark
              color="#ff7c36"
              className={styles.icon}
              onClick={() => setHamburger(false)}
            />
          </div>
          <div className={styles.logo}>
            <p className={styles.first}>Africana</p>
            <p className={styles.second}>Hotel Bar & Resort</p>
          </div>
          <div className={styles.buttonContainer}>
            <Button color="#1E1E1E" hoverColor="#FFFFFF" />
          </div>
        </div>

        <div className={styles.menuContent}>
          <div className={styles.menuLinks}>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Dining</a>
              </li>
              <li>
                <a href="">Accommodation</a>
              </li>
              <li>
                <a href="">Conference Rooms</a>
              </li>
              <li>
                <a href="">Gallery</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
            <p>
              © {new Date().getFullYear()} Africana Hotel Bar & Restaurant. All
              rights reserved.
            </p>
          </div>
          <div className={styles.moreInfo}>
            <div>
              <div>
                <p className={styles.address}>
                  Narok Narok Narok, Narok Road, Narok 1661, Kenya
                  <br />
                  Telephone: 0712 345678
                  <br />
                  Email: events@africanahotel.com
                </p>
              </div>

              <div className={styles.map}>
                <img src={map} alt="" />
              </div>
              <div className={styles.socials}>
                {socialIcons.map((socialIcon) => (
                  <div
                    style={{
                      backgroundPosition:
                        hover && hoverSocial === socialIcon.index
                          ? "left bottom"
                          : "right bottom",
                      color:
                        hover && hoverSocial === socialIcon.index
                          ? "#ffffff"
                          : "#1E1E1E",
                      border:
                        hover && hoverSocial === socialIcon.index
                          ? "none"
                          : "2px solid #ff7c36",
                    }}
                    className={styles.circle}
                    key={socialIcon.index}
                    onMouseEnter={() => {
                      setHover(true);
                      setHoveredSocial(socialIcon.index);
                    }}
                    onMouseLeave={() => {
                      setHover(false);
                      setHoveredSocial();
                    }}
                  >
                    <socialIcon.icon />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
