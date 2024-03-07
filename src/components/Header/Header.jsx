import React from "react";
import styles from "./Header.module.scss";
import { FaBarsStaggered, FaChevronDown } from "react-icons/fa6";

import Button from "../Button/Button";

import smokeImage from "../../utils/images/img27.png";

const Header = ({ image, title, text }) => {
  const style = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className={styles.header} style={style}>
      <div className={styles.opacity}></div>
      <div className={styles.content}>
        <div className={styles.nav}>
          <div className={styles.menu}>
            <FaBarsStaggered className={styles.icon} color="#ffffff" />
          </div>
          <div className={styles.logo}>
            <p className={styles.first}>Africana</p>
            <p className={styles.second}>Hotel Bar & Resort</p>
          </div>
          <div className={styles.buttonContainer}>
            <Button />
          </div>
        </div>

        <div className={styles.arrowDown}>
          <FaChevronDown size="2rem" color="#ffffff" />
        </div>

        <div className={styles.sectionIntro}>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>

        <div className={styles.shape}>
          <img src={smokeImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
