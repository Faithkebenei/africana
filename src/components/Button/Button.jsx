import React from "react";
import styles from "./Button.module.scss";

const Button = ({ color, hoverColor }) => {
  return (
    <button
      className={styles.button}
      style={{
        color: color,
      }}
      onMouseEnter={(e) => {
        e.target.style.color = hoverColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.color = color;
      }}
    >
      Book Now
    </button>
  );
};

export default Button;
