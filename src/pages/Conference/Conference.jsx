import React from "react";
import styles from "./Conference.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import heroImg from "../../utils/images/img17.jpg";

const Conference = () => {
  return (
    <div className={styles.about}>
      <Header image={heroImg} title="Conference Rooms" text="" />
      <Footer />
    </div>
  );
};

export default Conference;
