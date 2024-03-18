import React from "react";
import styles from "./CTA.module.scss";

import image from "../../utils/images/img11.jpg";

const CTA = () => {
  return (
    <div className={styles.CTA} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.bgOpacity}>
        <p>
          For reservations, feel free to contact us at{" "}
          <span> events@africanahotel.com </span>
          or give us a call at <span> 0712 345678</span>.
        </p>
      </div>
    </div>
  );
};

export default CTA;
