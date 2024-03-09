import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TextImage.module.scss";
import Button from "../Button/Button";

const TextImage = ({
  image,
  heading,
  text,
  includeButton,
  reverse,
  toWhere,
}) => {
  const navigate = useNavigate();
  const handleClick = (toWhere) => {
    navigate(`/${toWhere}`);
  };
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxWidth = 767;

  return (
    <div
      className={styles.textImage}
      style={{
        flexDirection: reverse && screenSize > maxWidth ? "row-reverse" : "",
      }}
    >
      <div className={styles.image}>
        <img src={image} alt="" />
      </div>
      <div
        className={styles.content}
        style={{
          paddingRight: reverse && screenSize > maxWidth ? "50px" : "0",
          paddingLeft: !reverse && screenSize > maxWidth ? "50px" : "0",
        }}
      >
        <h2>{heading}</h2>
        <p>{text}</p>
        {includeButton ? (
          <Button
            color="#1E1E1E"
            hoverColor="#FFFFFF"
            text="Discover"
            clicked={() => handleClick(toWhere)}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TextImage;
