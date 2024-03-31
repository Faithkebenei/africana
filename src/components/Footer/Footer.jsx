/* Create a db
Creating careers
Reading available careers

Creating newsletter signups
Reading newsletter signups

Displaying the location on all maps
Linking to social media pages
Actual phone number
Actual email address
Actual location
Sending message to email
*/

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.scss";

import image from "../../utils/images/map.jpg";

import {
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = ({ link }) => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(link);
  const [hover, setHover] = useState(false);
  const [hoverSocial, setHoveredSocial] = useState();
  const [newsEmail, setNewsEmail] = useState("");

  const menus = [
    { index: 0, name: "Home", link: "" },
    { index: 1, name: "About Us", link: "about" },
    { index: 2, name: "Dining", link: "dining" },
    { index: 3, name: "Accomodation", link: "accommodation" },
    { index: 4, name: "Conference Rooms", link: "conference-rooms" },
    { index: 5, name: "Careers", link: "careers" },
    { index: 6, name: "Contact Us", link: "contact" },
  ];

  const handleClick = (whereTo) => {
    navigate(`/${whereTo}`);
    setActiveLink(whereTo);

    window.scrollTo(0, 0);
  };

  const socialIcons = [
    { index: 0, icon: FaXTwitter },
    { index: 1, icon: FaFacebookF },
    { index: 2, icon: FaYoutube },
    { index: 3, icon: FaInstagram },
    { index: 4, icon: FaLinkedinIn },
  ];
  // https://script.google.com/macros/s/AKfycbw2l2x-kdDrQWDtbg3W9w7GS1KBmOcXQ_otDJBlEljiWfMuObJ5aWAJAHsvvwSjigek5g/exec

  const handlenewsSignUp = async (e) => {
    e.preventDefault();
    fetch(
      "https://script.google.com/macros/s/AKfycbw2l2x-kdDrQWDtbg3W9w7GS1KBmOcXQ_otDJBlEljiWfMuObJ5aWAJAHsvvwSjigek5g/exec",
      { method: "POST", body: newsEmail }
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.footerCont}>
      <div className={styles.footer}>
        <div className={styles.menu}>
          {menus.map((menu) => (
            <p
              style={{ color: activeLink === menu.link ? "#ff7c36" : "" }}
              onClick={() => {
                handleClick(menu.link);
              }}
            >
              {menu.name}
            </p>
          ))}
        </div>
        <div className={styles.mailing}>
          <p>Sign up for offers and news </p>
          <div className={styles.content}>
            <form onSubmit={(e) => handlenewsSignUp(e)}>
              <input
                type="text"
                name="Email"
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                placeholder="Your email address"
              />
              <button className={styles.whyUsButton} type="submit" style={{}}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className={styles.address}>
          <div className={styles.addressContent}>
            <div className={styles.logo}>
              <p className={styles.first}>Africana</p>
              <p className={styles.second}>Hotel Bar & Resort</p>
            </div>
            <p className={styles.addressContentp}>
              Narok Narok Narok, Narok Road,
              <br /> Narok 1661, Kenya
              <br /> Telephone: 0712 345678 <br /> Email:
              events@africanahotel.com
            </p>
          </div>
          <div className={styles.map}>
            <img src={image} alt="" />
          </div>
        </div>
        <div className={styles.socials}>
          {socialIcons.map((socialIcon) => (
            <div
              style={{
                backgroundPosition:
                  hover && hoverSocial === socialIcon.index
                    ? "left bottom"
                    : "right bottom",
                color:
                  hover && hoverSocial === socialIcon.index
                    ? "#ffffff"
                    : "#1E1E1E",
                border:
                  hover && hoverSocial === socialIcon.index
                    ? "none"
                    : "2px solid #ff7c36",
              }}
              className={styles.circle}
              key={socialIcon.index}
              onMouseEnter={() => {
                setHover(true);
                setHoveredSocial(socialIcon.index);
              }}
              onMouseLeave={() => {
                setHover(false);
                setHoveredSocial();
              }}
            >
              <socialIcon.icon />
            </div>
          ))}
        </div>
        <div className={styles.copy}>
          <p>
            © 2024 Africana Hotel Bar & Restaurant. All rights reserved. Website
            by
            <a href="https://imarainno.com"> ImaraInno</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
