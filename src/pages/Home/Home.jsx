import React from "react";
import styles from "./Home.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import heroImg from "../../utils/images/img20.jpg";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header
        image={heroImg}
        title="Africana Hotel"
        text="Where every stay feels like home."
      />
      <Footer />
    </div>
  );
};

export default Home;
