import React from "react";
import styles from "./Accommodation.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import heroImg from "../../utils/images/img22.jpg";

const Accommodation = () => {
  return (
    <div className={styles.about}>
      <Header
        image={heroImg}
        title="Accommodation"
        text="Discover cozy nests for your dreams."
      />
      <Footer link="accommodation" />
    </div>
  );
};

export default Accommodation;
