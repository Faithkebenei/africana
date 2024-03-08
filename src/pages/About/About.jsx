import React from "react";
import styles from "./About.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import heroImg from "../../utils/images/img19.jpg";

const About = () => {
  return (
    <div className={styles.about}>
      <Header
        image={heroImg}
        title="About Us"
        text="Grab a cup of coffee, get comfortable, and let us take you on a journey through our whimsical world of wonders!"
      />
      <Footer />
    </div>
  );
};

export default About;
