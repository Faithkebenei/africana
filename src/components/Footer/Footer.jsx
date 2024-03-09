import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = ({ link }) => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(link);
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
  return (
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
      <div></div>
    </div>
  );
};

export default Footer;
