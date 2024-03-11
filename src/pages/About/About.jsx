import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./About.module.scss";
import TextImage from "../../components/TextImage/TextImage";
import CTA from "../../components/CTA/CTA";

import image from "../../utils/images/img19.jpg";
import bgImage from "../../utils/images/img15.jpg";
import mission from "../../utils/images/img14.jpg";
import vision from "../../utils/images/img21.jpg";

const About = () => {
  const aboutUs = [
    {
      index: 0,
      image: mission,
      heading: "Our Mission",
      text: "At Africana Hotel, our mission is to provide unparalleled hospitality, delivering exceptional experiences that exceed our guests' expectations. We strive to create a welcoming and comfortable environment where every visitor feels valued and cared for, leaving with cherished memories of their stay.",
    },
    {
      index: 1,
      image: vision,
      heading: "Our Vision",
      text: "At Africana Hotel, we aspire to be the premier choice for luxury accommodation, dining, and events in Narok. Committed to excellence in hospitality, we innovate and adapt to exceed guest expectations while upholding sustainability and community engagement.",
      reverse: true,
    },
  ];
  const style = {
    backgroundImage: `url(${bgImage})`,
  };
  return (
    <div style={style} className={styles.about}>
      <Header
        image={image}
        title="About Us"
        text="Grab a cup of coffee, get comfortable, and let us take you on a journey through our whimsical world of wonders!"
      />

      <div className={styles.aboutText}>
        <div className={styles.topDiv}>
          <p>
            Welcome to Africana Hotel Bar & Restaurant, where luxury meets
            hospitality in the heart of Narok. Nestled amidst the vibrant energy
            of the city, Africana Hotel offers a tranquil oasis for travelers
            seeking a refined and unforgettable experience. Our commitment to
            excellence is evident in every detail, from our elegantly appointed
            rooms and suites to our impeccable service and world-class
            amenities. <br />
            <br />
            At Africana Hotel, we pride ourselves on creating memorable moments
            for our guests, whether they are here for business or leisure. Our
            dedicated team is always on hand to ensure that your stay is nothing
            short of exceptional, catering to your every need with warmth and
            professionalism.
          </p>
        </div>
        <div className={styles.middleDiv}></div>
        <div className={styles.bottomDiv}>
          <p>
            Indulge your senses at our on-site restaurant, where our talented
            chefs craft exquisite culinary creations using only the freshest
            locally sourced ingredients. From hearty breakfasts to gourmet
            dinners, every meal is a culinary journey that delights the palate.
            <br />
            <br />
            Unwind and recharge at our inviting outdoor pool, surrounded by lush
            greenery and bathed in sunlight. Or, if you prefer to stay active,
            take advantage of our well-equipped fitness center to maintain your
            exercise routine while away from home. <br />
            <br />
            Whether you're here for a business conference, a romantic getaway,
            or a family vacation, Africana Hotel promises an experience that is
            both luxurious and memorable. We look forward to welcoming you and
            exceeding your expectations at Africana Hotel Bar & Restaurant.
          </p>
        </div>
      </div>

      <div className={styles.missionCont}>
        {aboutUs.map((abt) => (
          <TextImage
            image={abt.image}
            heading={abt.heading}
            text={abt.text}
            reverse={abt.reverse ? undefined : true}
          />
        ))}
      </div>
      <CTA />
      <div className={styles.missionCont}>
        <Footer link="about" />
      </div>
    </div>
  );
};

export default About;
