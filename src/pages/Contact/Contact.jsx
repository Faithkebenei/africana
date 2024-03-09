import React from "react";
import styles from "./Contact.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import heroImg from "../../utils/images/img16.jpg";

const Contact = () => {
  return (
    <div className={styles.about}>
      <Header image={heroImg} title="Get in Touch" text="" />
      <Footer link="contact" />
    </div>
  );
};

export default Contact;
