import React, { useState } from "react";
import styles from "./TextContent.module.scss";
import { useInView } from "react-intersection-observer";

const TextContent = ({ heading, text, backgroundColor, name }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 50% of the component is visible
  });

  if (inView !== isVisible) {
    setIsVisible(inView);
  }
  return (
    <div
      ref={ref}
      className={styles.textContent}
      style={{
        backgroundColor: backgroundColor,
        paddingTop: !heading ? "0px" : "",
      }}
    >
      {/* {isVisible && ( */}
      <div>
        <h2>{heading}</h2>
        <p>{text}</p>
        <h5>{name}</h5>
      </div>
      {/* )} */}
    </div>
  );
};

export default TextContent;
