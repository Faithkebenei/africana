import React from "react";
import styles from "./Gallery.module.scss";

const Gallery = ({ image }) => {
  return (
    <div className={styles.gallery}>
      <img src={image} alt="" />
    </div>
  );
};

export default Gallery;
