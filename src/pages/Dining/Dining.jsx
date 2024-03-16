import React from "react";
import styles from "./Dining.module.scss";
import Header from "../../components/Header/Header";
import Gallery from "../../components/Gallery/Gallery";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";

import heroImg from "../../utils/images/img11.jpg";
import restaurant from "../../utils/images/img3.jpg";
import bar from "../../utils/images/img23.jpg";

import food1 from "../../utils/images/img5.jpg";
import food2 from "../../utils/images/img4.jpg";
import food3 from "../../utils/images/img7.jpg";
import food4 from "../../utils/images/img26.jpg";
import food5 from "../../utils/images/img2.jpg";
import food6 from "../../utils/images/img25.jpg";

const Dining = () => {
  const photos = [
    { index: 0, image: food1 },
    { index: 1, image: food2 },
    { index: 2, image: food3 },
    { index: 3, image: food4 },
    { index: 4, image: food5 },
    { index: 5, image: food6 },
  ];
  return (
    <div className={styles.dining}>
      <Header image={heroImg} title="Dining" text="" />
      <div className={styles.diningContent}>
        <div className={styles.content}>
          <div className={styles.image}>
            <img src={restaurant} alt="" />
          </div>
          <div className={styles.text}>
            <h2>Experience Culinary Bliss with Us</h2>
            <p>
              Embark on a culinary journey through the rich and vibrant flavors
              of Kenya at our dining venues. Delight in an exquisite array of
              traditional Kenyan dishes, each meticulously prepared with locally
              sourced ingredients and infused with centuries-old culinary
              traditions. From succulent Nyama Choma grilled to perfection to
              hearty stews bursting with aromatic spices, our menu celebrates
              the diverse flavors and cultural heritage of Kenya. Savor the
              tantalizing flavors of Swahili cuisine, whether you're a
              connoisseur of fine dining or an adventurous epicurean. Our
              restaurants offer an unparalleled gastronomic experience that
              showcases the best of Kenyan cuisine in every delectable bite.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.Gallery}>
        <h2>Discover Culinary Delights</h2>
        <div className={styles.galleryCont}>
          {photos.map((photo) => (
            <Gallery image={photo.image} />
          ))}
        </div>
      </div>
      <div className={styles.diningContent}>
        <div className={styles.contentBar}>
          <div className={styles.image}>
            <img src={bar} alt="" />
          </div>
          <div className={styles.text}>
            <h2>Unwind at Our Bar</h2>
            <p>
              Embark on a tantalizing journey through the flavors of Kenya at
              our bar. Indulge in a selection of traditional Kenyan cocktails
              crafted with locally sourced ingredients and inspired by
              centuries-old recipes. From refreshing Dawa cocktails to exotic
              blends featuring tropical fruits and spices, each sip is a
              celebration of Kenya's rich cultural heritage. Enjoy the vibrant
              atmosphere as you sample our curated selection of Kenyan wines,
              beers, and spirits, or unwind with a glass of freshly brewed chai
              tea infused with aromatic spices. Whether you're toasting to a
              successful day of exploration or simply relaxing with friends, our
              bar offers an unforgettable experience that captures the essence
              of Kenya in every sip.
            </p>
          </div>
        </div>
      </div>
      <CTA />
      <Footer link="dining" />
    </div>
  );
};

export default Dining;
