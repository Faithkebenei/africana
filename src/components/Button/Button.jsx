import React from "react";
import styles from "./Button.module.scss";

const Button = ({
  color,
  hoverColor,
  text,
  clicked,
  bgColor,
  border,
  width,
}) => {
  return (
    <button
      className={styles.button}
      style={{
        color: bgColor ? "#FFFFFF" : color,
        backgroundColor: bgColor,
        borderRadius: border ? "0" : "",
        width: width,
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
