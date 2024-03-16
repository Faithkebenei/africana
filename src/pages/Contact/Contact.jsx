import React from "react";
import styles from "./Contact.module.scss";
import Header from "../../components/Header/Header";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";

import heroImg from "../../utils/images/img16.jpg";

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <Header image={heroImg} title="Get in Touch" text="" />
      <div></div>
      <CTA />
      <Footer link="contact" />
    </div>
  );
};

export default Contact;
