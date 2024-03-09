import React from "react";
import styles from "./Button.module.scss";

const Button = ({ color, hoverColor, text, clicked, bgColor }) => {
  console.log(clicked);
  return (
    <button
      className={styles.button}
      style={{
        color: bgColor ? "#FFFFFF" : color,
        backgroundColor: bgColor,
      }}
      onMouseEnter={(e) => {
        e.target.style.color = hoverColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.color = bgColor ? "#FFFFFF" : color;
      }}
      onClick={clicked}
    >
      {text}
    </button>
  );
};

export default Button;
