import React from "react";
import styles from "./Contact.module.scss";
import Header from "../../components/Header/Header";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";

import Button from "../../components/Button/Button";

import heroImg from "../../utils/images/img16.jpg";
import image from "../../utils/images/img12.png";

const Contact = () => {
  const sendMessage = () => {};
  return (
    <div className={styles.Contact}>
      <Header image={heroImg} title="Get in Touch" text="" />
      <div className={styles.contactContent}>
        <h2>Contact Us</h2>
        <div className={styles.content}>
          <div className={styles.inputContent}>
            <div className={styles.input}>
              <label for="name">Name:</label>
              <input type="text" id="name" />
            </div>
            <div className={styles.input}>
              <label for="email">Email:</label>
              <input type="text" id="email" />
            </div>
            <div className={styles.input}>
              <label for="message">Message:</label>
              <textarea name="" id="message" cols="30" rows="10"></textarea>
            </div>
            <div className={styles.button}>
              <Button bgColor="#ff7c36" text="Submit" clicked={sendMessage} />
            </div>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.image}>
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
      <CTA />
      <Footer link="contact" />
    </div>
  );
};

export default Contact;
