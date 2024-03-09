import React, { useState } from "react";
import styles from "./TextContent.module.scss";
import { useInView } from "react-intersection-observer";

const TextContent = ({ heading, text, backgroundColor }) => {
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
      style={{ backgroundColor: backgroundColor }}
    >
      {/* {isVisible && ( */}
      <div>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      {/* )} */}
    </div>
  );
};

export default TextContent;
