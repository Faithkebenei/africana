import React from "react";
import styles from "./Careers.module.scss";
import Header from "../../components/Header/Header";
import TextContent from "../../components/TextContent/TextContent";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

import heroImage from "../../utils/images/img29.jpg";

const Careers = () => {
  const handleViewCareer = () => {};
  return (
    <div className="">
      <Header image={heroImage} title="Careers" />
      <div className={styles.careerContainer}>
        <TextContent
          heading="Find your Dream Job"
          text="Are you passionate about making a difference? Do you thrive in a collaborative environment where innovation is encouraged? If so, we'd love to hear from you! Explore our current opportunities below and discover how you can be a part of our dynamic team."
        />
        <div className={styles.careers}>
          <div className={styles.smallContainer}>
            <div className={styles.header}>
              <h3>Dining</h3>
            </div>
            <div className={styles.content}>
              <p>
                Savor locally inspired culinary delights at our on-site
                restaurants, where talented chefs craft unforgettable dishes,
                promising a gastronomic journey like no other.
              </p>
              <p>
                <strong>Closes On 2024-03-20</strong>
              </p>
              <Button
                color="#1E1E1E"
                hoverColor="#FFFFFF"
                text="View More"
                clicked={handleViewCareer}
                bgColor="#ff7c36"
              />
            </div>
          </div>
          <div className={styles.smallContainer}>
            <div className={styles.header}>
              <h3>Dining</h3>
            </div>
            <div className={styles.content}>
              <p>
                Savor locally inspired culinary delights at our on-site
                restaurants, where talented chefs craft unforgettable dishes,
                promising a gastronomic journey like no other.
              </p>
              <p>
                <strong>Closes On 2024-03-20</strong>
              </p>
              <Button
                color="#1E1E1E"
                hoverColor="#FFFFFF"
                text="View More"
                clicked={handleViewCareer}
                bgColor="#ff7c36"
              />
            </div>
          </div>
          <div className={styles.smallContainer}>
            <div className={styles.header}>
              <h3>Dining</h3>
            </div>
            <div className={styles.content}>
              <p>
                Savor locally inspired culinary delights at our on-site
                restaurants, where talented chefs craft unforgettable dishes,
                promising a gastronomic journey like no other.
              </p>
              <p>
                <strong>Closes On 2024-03-20</strong>
              </p>
              <Button
                color="#1E1E1E"
                hoverColor="#FFFFFF"
                text="View More"
                clicked={handleViewCareer}
                bgColor="#ff7c36"
              />
            </div>
          </div>
          <div className={styles.smallContainer}>
            <div className={styles.header}>
              <h3>Dining</h3>
            </div>
            <div className={styles.content}>
              <p>
                Savor locally inspired culinary delights at our on-site
                restaurants, where talented chefs craft unforgettable dishes,
                promising a gastronomic journey like no other.
              </p>
              <p>
                <strong>Closes On 2024-03-20</strong>
              </p>
              <Button
                color="#1E1E1E"
                hoverColor="#FFFFFF"
                text="View More"
                clicked={handleViewCareer}
                bgColor="#ff7c36"
              />
            </div>
          </div>
          <div className={styles.smallContainer}>
            <div className={styles.header}>
              <h3>Dining</h3>
            </div>
            <div className={styles.content}>
              <p>
                Savor locally inspired culinary delights at our on-site
                restaurants, where talented chefs craft...
              </p>
              <p>
                <strong>Closes On 2024-03-20</strong>
              </p>
              <Button
                color="#1E1E1E"
                hoverColor="#FFFFFF"
                text="View More"
                clicked={handleViewCareer}
                bgColor="#ff7c36"
              />
            </div>
          </div>
        </div>
      </div>
      <CTA />
      <Footer />
    </div>
  );
};

export default Careers;
