import React from "react";
import styles from "./Serenity.module.scss";

import TextContent from "../TextContent/TextContent";

const Serenity = ({ image }) => {
  return (
    <div className={styles.serenity}>
      <TextContent
        heading="Experience the Serenity of Nairagie Ngare Dam"
        text="Experience the tranquility of our hotel as you immerse yourself in the serene view of the Nairagie Ngare Dam. Nestled amidst the natural beauty of the landscape, the dam's tranquil waters and picturesque surroundings create a captivating backdrop for relaxation and contemplation. Whether you're enjoying a leisurely breakfast on the terrace, lounging by the poolside with a refreshing drink, or simply taking in the scenery from the comfort of your room, the breathtaking vista of the Nairagie Ngare Dam promises to elevate your stay with us to new heights of serenity and wonder."
      />

      <div className={styles.image}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Serenity;
