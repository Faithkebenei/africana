import React from "react";
import styles from "./Conference.module.scss";
import Header from "../../components/Header/Header";
import TextImage from "../../components/TextImage/TextImage";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";

import heroImg from "../../utils/images/img17.jpg";

const Conference = () => {
  return (
    <div className={styles.about}>
      <Header image={heroImg} title="Conference Rooms" text="" />
      <TextImage
        image={heroImg}
        reverse
        text="Experience the vibrant ambiance and exceptional hospitality of Africana Hotel Bar & Restaurant, your ideal destination for business gatherings, casual meetups, and memorable events in the heart of Narok."
        otherText="For inquiries about venue options and capacity, reach out to us at events@africanahotel.com or call us on 0712 345678."
      />
      <CTA />
      <Footer link="conference-rooms" />
    </div>
  );
};

export default Conference;
