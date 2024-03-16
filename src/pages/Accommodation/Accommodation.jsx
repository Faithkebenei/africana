import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import styles from "./Accommodation.module.scss";
import Header from "../../components/Header/Header";
import TextContent from "../../components/TextContent/TextContent";
import Gallery from "../../components/Gallery/Gallery";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";

import Button from "../../components/Button/Button";

import heroImg from "../../utils/images/img22.jpg";

import room1 from "../../utils/images/img22.jpg";
import room2 from "../../utils/images/img13.jpg";
import room3 from "../../utils/images/img15.jpg";
import room4 from "../../utils/images/img24.jpg";
import room5 from "../../utils/images/img9.jpg";
import room6 from "../../utils/images/img18.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Accommodation = () => {
  const photos = [
    { index: 0, image: room1 },
    { index: 1, image: room2 },
    { index: 2, image: room3 },
    { index: 3, image: room4 },
    { index: 4, image: room5 },
    { index: 5, image: room6 },
  ];

  const rooms = [
    {
      index: 0,
      image: room1,
      heading: "1 Bedroom",
      text: "Our stylish Premier rooms offer ample space to wind down and relax, as well as plenty of natural light through the floor-to-ceiling window. Up here, you'll be treated to superb urban views to savour and — don't forget — snap a selfie while you're at it.",
      amenities: [
        "High-speed fibre optic Wi-Fi connection",
        "Max guest: 2",
        "Bed size(s): King/ Twin",
        "Room size: 34m²",
      ],
    },
    {
      index: 1,
      image: room2,
      heading: "2 Bedroom",
      text: "Our stylish Premier rooms offer ample space to wind down and relax, as well as plenty of natural light through the floor-to-ceiling window. Up here, you'll be treated to superb urban views to savour and — don't forget — snap a selfie while you're at it.",
      amenities: [
        "High-speed fibre optic Wi-Fi connection",
        "Max guest: 2",
        "Bed size(s): King/ Twin",
        "Room size: 34m²",
      ],
    },
  ];

  return (
    <div className={styles.accomodation}>
      <Header
        image={heroImg}
        title="Accommodation"
        text="Discover cozy nests for your dreams."
      />
      <div className={styles.textCont}>
        <TextContent text="Step into your oasis of comfort and style with our accommodations. Each space meticulously crafted to ensure your stay is nothing short of exceptional. Explore our collection of rooms and suites, each offering a unique blend of luxury, comfort, and convenience, perfectly suited to meet your needs and exceed your expectations." />
      </div>
      <div className={styles.diningContent}>
        <h2 className={styles.heading}>Our Rooms</h2>
        {rooms.map((room) => (
          <div className={styles.content}>
            <div className={styles.image}>
              <img src={room6} alt="" />
              <div className={styles.leftArrow}>
                <div className={styles.innerArrow}>
                  <FaArrowLeft color="#AEAEAE" />
                </div>
              </div>
              <div className={styles.rightArrow}>
                <div className={styles.innerArrow}>
                  <FaArrowRight color="#AEAEAE" />
                </div>
              </div>
            </div>
            <div className={styles.text}>
              <h2>{room.heading}</h2>
              <p>
                Our stylish Premier rooms offer ample space to wind down and
                relax, as well as plenty of natural light through the
                floor-to-ceiling window. Up here, you'll be treated to superb
                urban views to savour and — don't forget — snap a selfie while
                you're at it.
              </p>
              <ul>
                <li>High-speed fibre optic Wi-Fi connection</li>
                <li>Max guest: 2</li>
                <li>Bed size(s): King/ Twin</li>
                <li>Room size: 34m²</li>
              </ul>
              <Button text="Book Now" color="#1E1E1E" hoverColor="#FFFFFF" />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.Gallery}>
        <h2>Discover Culinary Delights</h2>
        <div className={styles.galleryCont}>
          {photos.map((photo) => (
            <Gallery image={photo.image} />
          ))}
        </div>
      </div>
      <CTA />
      <Footer link="accommodation" />
    </div>
  );
};

export default Accommodation;
