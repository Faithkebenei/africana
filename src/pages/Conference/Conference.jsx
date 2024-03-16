import React from "react";
import styles from "./Conference.module.scss";
import Header from "../../components/Header/Header";
import TextImage from "../../components/TextImage/TextImage";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";

import heroImg from "../../utils/images/img17.jpg";
import restaurant from "../../utils/images/img6.jpg";

const Conference = () => {
  return (
    <div className={styles.conference}>
      <Header image={heroImg} title="Conference Rooms" text="" />
      <div className={styles.roomsContent}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <img src={restaurant} alt="" />
            </div>
            <div className={styles.topContainer}>
              Experience professionalism and tranquility at Africana Hotel Bar &
              Restaurant, where gatherings shine with sophistication.
            </div>
          </div>
          <div className={styles.text}>
            <h2>Where business meets breathtaking scenery</h2>
            <p>
              Nestled amid the tranquil beauty of Narok, Africana Hotel provides
              an unparalleled backdrop for your next business conference,
              private gathering, or special event. our venue offers a unique
              blend of elegance, sophistication, and natural charm that is sure
              to impress your guests. Whether you're planning a corporate
              retreat, a wedding celebration, or a family reunion, our dedicated
              event planning team will work tirelessly to ensure that every
              detail is taken care of, leaving you free to relax and enjoy the
              occasion. With state-of-the-art facilities, exquisite catering
              options, and personalized service tailored to your needs, Africana
              Hotel is the perfect choice for those seeking a truly
              unforgettable experience.
            </p>
          </div>
        </div>
      </div>
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
