import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Header.module.scss";
import {
  FaBarsStaggered,
  FaChevronDown,
  FaXmark,
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import Button from "../Button/Button";
import map from "../../utils/images/map.jpg";

const Header = ({ image, title, text }) => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const [hoverSocial, setHoveredSocial] = useState();
  const [hamburger, setHamburger] = useState(false);

  const handleClick = (toWhere) => {
    navigate(`/${toWhere}`);
    setHamburger(false);
  };

  const socialIcons = [
    { index: 0, icon: FaXTwitter },
    { index: 1, icon: FaFacebookF },
    { index: 2, icon: FaYoutube },
    { index: 3, icon: FaInstagram },
    { index: 4, icon: FaLinkedinIn },
  ];

  const style = {
    backgroundImage: `url(${image})`,
  };

  const handleBookNow = () => {
    // window.open("tel:+1234567890");
    const email = "events@africanahotel.com";
    const subject = "Subject"; // Replace with email subject
    const body = "Body";
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };
  const handleArrowClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.header} style={style}>
      <div className={styles.opacity}></div>
      <div className={styles.content}>
        <div className={styles.nav}>
          <div className={styles.menu}>
            <FaBarsStaggered
              className={styles.icon}
              color="#ffffff"
              onClick={() => setHamburger(true)}
            />
          </div>
          <div className={styles.logo} onClick={() => handleClick("")}>
            <p className={styles.first}>Africana</p>
            <p className={styles.second}>Hotel Bar & Resort</p>
          </div>
          <div className={styles.buttonContainer}>
            <Button
              color="#FFFFFF"
              hoverColor="#FFFFFF"
              text="Book Now"
              clicked={handleBookNow}
            />
          </div>
        </div>

        <div className={styles.arrowDown} onClick={handleArrowClick}>
          <FaChevronDown size="2rem" color="#ffffff" />
        </div>

        <div className={styles.sectionIntro}>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>

      <div className={`${styles.menuItems} ${hamburger ? styles.active : ""}`}>
        <div className={`${styles.nav} ${styles.menuNav}`}>
          <div className={styles.menu}>
            <FaXmark
              color="#ff7c36"
              className={styles.icon}
              onClick={() => setHamburger(false)}
            />
          </div>
          <div className={styles.logo} onClick={() => handleClick("")}>
            <p className={styles.first}>Africana</p>
            <p className={styles.second}>Hotel Bar & Resort</p>
          </div>
          <div className={styles.buttonContainer}>
            <Button color="#1E1E1E" hoverColor="#FFFFFF" text="Book Now" />
          </div>
        </div>

        <div className={styles.menuContent}>
          <div className={styles.menuLinks}>
            <ul>
              <li>
                <h4 onClick={() => handleClick("")}>Home</h4>
              </li>
              <li>
                <h4 onClick={() => handleClick("about")}>About Us</h4>
              </li>
              <li>
                <h4 onClick={() => handleClick("dining")}>Dining</h4>
              </li>
              <li>
                <h4 onClick={() => handleClick("accommodation")}>
                  Accommodation
                </h4>
              </li>
              <li>
                <h4 onClick={() => handleClick("conference-rooms")}>
                  Conference Rooms
                </h4>
              </li>
              <li>
                <h4 onClick={() => handleClick("careers")}>Careers</h4>
              </li>
              <li>
                <h4 onClick={() => handleClick("contact")}>Contact Us</h4>
              </li>
            </ul>
            <p>
              © {new Date().getFullYear()} Africana Hotel Bar & Restaurant. All
              rights reserved.
            </p>
          </div>
          <div className={styles.moreInfo}>
            <div>
              <div>
                <p className={styles.address}>
                  Narok Narok Narok, Narok Road, Narok 1661, Kenya
                  <br />
                  Telephone: 0712 345678
                  <br />
                  Email: events@africanahotel.com
                </p>
              </div>

              <div className={styles.map}>
                <img src={map} alt="" />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
