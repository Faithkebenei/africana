import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.scss";
import Button from "../Button/Button";

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
  const menus = [
    { index: 0, name: "Home", link: "" },
    { index: 1, name: "About Us", link: "about" },
    { index: 2, name: "Dining", link: "dining" },
    { index: 3, name: "Accomodation", link: "accommodation" },
    { index: 4, name: "Conference Rooms", link: "conference-rooms" },
    { index: 6, name: "Gallery", link: "gallery" },
    { index: 6, name: "Contact Us", link: "contact" },
  ];

  const handleClick = (whereTo) => {
    navigate(`/${whereTo}`);
    setActiveLink(whereTo);
  };

  const socialIcons = [
    { index: 0, icon: FaXTwitter },
    { index: 1, icon: FaFacebookF },
    { index: 2, icon: FaYoutube },
    { index: 3, icon: FaInstagram },
    { index: 4, icon: FaLinkedinIn },
  ];

  const handleMailClick = () => {};
  return (
    <div className={styles.footerCont}>
      <div className={styles.footer}>
        <div className={styles.menu}>
          {menus.map((menu) => (
            <p
              style={{ color: activeLink === menu.link ? "#ff7c36" : "" }}
              onClick={() => handleClick(menu.link)}
            >
              {menu.name}
            </p>
          ))}
        </div>
        <div className={styles.mailing}>
          <p>Sign up for offers and news </p>
          <div className={styles.content}>
            <input type="text" placeholder="Your email address" />
            <button
              className={styles.whyUsButton}
              style={{}}
              onClick={() => {
                handleMailClick();
              }}
            >
              Subscribe
            </button>
            {/* <Button
          color="#1E1E1E"
          hoverColor="#FFFFFF"
          bgColor="#ff7c36"
          text="Subscribe"
          border
          clicked={() => handleMailClick()}
        /> */}
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
