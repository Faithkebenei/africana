import React from "react";
import styles from "./AboutText.module.scss";

import image from "../../utils/images/img6.jpg";

const AboutText = () => {
  const style = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div className={styles.aboutText} style={style}>
      <div className={styles.topText}>hey</div>
    </div>
  );
};

export default AboutText;
