import React from "react";
import styles from "./Dining.module.scss";
import Header from "../../components/Header/Header";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";

import heroImg from "../../utils/images/img11.jpg";

const Dining = () => {
  return (
    <div className={styles.about}>
      <Header image={heroImg} title="Dining" text="" />
      <CTA />
      <Footer link="dining" />
    </div>
  );
};

export default Dining;
