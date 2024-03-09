import React from "react";
import styles from "./Home.module.scss";
import Header from "../../components/Header/Header";
import TextContent from "../../components/TextContent/TextContent";
import WhyUs from "../../components/WhyUs/WhyUs";
import Footer from "../../components/Footer/Footer";

import heroImg from "../../utils/images/img20.jpg";
import bottomImage from "../../utils/images/img28.png";

const Home = () => {
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
      <TextContent
        heading="Why Africana?"
        text="Experience luxury and comfort at our hotel. Here are four reasons why you'll love your stay."
        backgroundColor="#FFFFFF"
      />
      <Footer />
    </div>
  );
};

export default Home;
