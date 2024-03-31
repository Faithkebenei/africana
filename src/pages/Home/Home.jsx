import React from "react";
import styles from "./Home.module.scss";
import Header from "../../components/Header/Header";
import TextContent from "../../components/TextContent/TextContent";
import TextImage from "../../components/TextImage/TextImage";
import WhyUs from "../../components/WhyUs/WhyUs";
import Serenity from "../../components/Serenity/Serenity";
import Testimonials from "../../components/Testimonials/Testimonials";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";

import heroImg from "../../utils/images/img20.jpg";
import bottomImage from "../../utils/images/img28.png";
import dining from "../../utils/images/img21.jpg";
import accommodation from "../../utils/images/img22.jpg";
import conference from "../../utils/images/img17.jpg";
import serenity from "../../utils/images/img15.jpg";

const Home = () => {
  const home = [
    {
      index: 0,
      img: dining,
      toWhere: "Dining",
      heading: "Dining",
      text: "Savor the flavors of excellence at our dining venues. From tantalizing dishes to refreshing beverages, indulge in a culinary journey like no other. Click below to explore our dining options and reserve your table for an unforgettable experience.",
    },
    {
      index: 1,
      img: accommodation,
      toWhere: "accommodation",
      heading: "Accommodation",
      text: "Experience unparalleled comfort and luxury in our accommodations. From cozy rooms to spacious suites, each space is meticulously designed for your utmost relaxation. Click below to explore our rooms and reserve your stay for an unforgettable experience.",
      reverse: true,
    },
    {
      index: 2,
      img: conference,
      toWhere: "conference-rooms",
      heading: "Conference Rooms",
      text: "Elevate your meetings and events in our conference rooms. From intimate gatherings to large-scale conferences, our venues offer the perfect blend of functionality and sophistication. Click below to explore our conference facilities and book your next event for a seamless experience.",
    },
  ];
  return (
    <div className={styles.home}>
      <Header
        image={heroImg}
        title="Africana Hotel"
        text="Where every stay feels like home."
        bottomImage={bottomImage}
      />

      <TextContent
        heading="Your Oasis of Hospitality"
        text="Welcome to Africana Hotel, your haven of hospitality nestled in the heart of Narok. At Africana Hotel, we pride ourselves on offering unparalleled comfort, personalized service, and memorable experiences to every guest. Whether you're here for business or pleasure, our dedicated team is committed to ensuring your stay is nothing short of exceptional. From our luxurious accommodations to our exquisite dining options and world-class amenities, we strive to create a welcoming atmosphere where you can relax, recharge, and make unforgettable memories. Experience the warmth and charm of Africana Hotel during your next visit to Narok."
        backgroundColor="#FFF6F2"
      />

      <TextContent
        heading="Why Africana?"
        text="Here are four reasons why you'll love your stay."
        backgroundColor="#FFFFFF"
      />

      <WhyUs />
      {home.map((hm) => (
        <TextImage
          image={hm.img}
          heading={hm.heading}
          text={hm.text}
          includeButton
          reverse={hm.reverse ? true : false}
          toWhere={hm.toWhere}
        />
      ))}

      <Serenity image={serenity} />

      <Testimonials />
      <CTA />
      <Footer link="" />
    </div>
  );
};

export default Home;
