import React, { useState } from "react";
import styles from "./WhyUs.module.scss";

import Button from "../Button/Button";

import hospitalityImg from "../../utils/images/img14.jpg";
import locationImg from "../../utils/images/img15.jpg";
import roomsImg from "../../utils/images/img22.jpg";
import diningImg from "../../utils/images/img21.jpg";

const WhyUs = () => {
  const whyUsObj = [
    {
      index: 0,
      img: diningImg,
      name: "Dining",
      text: "Savor locally inspired culinary delights at our on-site restaurants, where talented chefs craft unforgettable dishes, promising a gastronomic journey like no other.",
    },
    {
      index: 1,
      img: locationImg,
      name: "Location",
      text: "Centrally located in Narok, our hotel provides easy access to Nairagie Ngare Dam, ideal for both leisure and business travelers eager to explore the bustling area.",
    },
    {
      index: 2,
      img: roomsImg,
      name: "Rooms",
      text: "Experience ultimate comfort and relaxation in our well-appointed rooms and suites, complete with modern amenities and plush furnishings making your stay unforgettable.",
    },

    {
      index: 3,
      img: hospitalityImg,
      name: "Hospitality",
      text: "Our dedicated team goes above and beyond to ensure that every guest feels valued and cared for, providing personalized service and attention to detail that exceeds expectations.",
    },
  ];

  const [activeWhy, setActiveWhy] = useState(0);
  const handleButtonClick = (index) => {
    setActiveWhy(index);
  };
  return (
    <div className={styles.whyUs}>
      <div className={styles.whyUsContent}>
        <div className={styles.imageContainer}>
          <img src={whyUsObj[activeWhy].img} alt="" />
        </div>
        <div className={styles.smallContainer}>
          <div className={styles.img}>
            <img src={whyUsObj[activeWhy].img} alt="" />
          </div>
          <div className={styles.content}>
            <h5>{whyUsObj[activeWhy].name}</h5>
            <p>{whyUsObj[activeWhy].text}</p>
          </div>
        </div>
        <div className={styles.btnContainer}>
          {whyUsObj.map((why) => (
            <button
              className={styles.whyUsButton}
              style={{
                backgroundColor: activeWhy === why.index ? "#ff7c36" : "",
                color: activeWhy === why.index ? "#ffffff" : "",
              }}
              onClick={() => {
                handleButtonClick(why.index);
              }}
            >
              {why.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

// import React, { useState } from "react";
// import styles from "./WhyUs.module.scss";

// import hospitalityImg from "../../utils/images/img14.jpg";
// import locationImg from "../../utils/images/img15.jpg";
// import roomsImg from "../../utils/images/img22.jpg";
// import diningImg from "../../utils/images/img21.jpg";

// const WhyUs = () => {
//   const whyUsObj = [
//     {
//       index: 0,
//       img: hospitalityImg,
//       name: "Hospitality",
//       text: "Our dedicated team goes above and beyond to ensure that every guest feels valued and cared for, providing personalized service and attention to detail that exceeds expectations.",
//     },
//     {
//       index: 1,
//       img: locationImg,
//       name: "Location",
//       text: "Centrally located in Narok, our hotel provides easy access to Nairagie Ngare Dam, ideal for both leisure and business travelers eager to explore the bustling area.",
//     },
//     {
//       index: 2,
//       img: roomsImg,
//       name: "Rooms",
//       text: "Experience ultimate comfort and relaxation in our well-appointed rooms and suites, complete with modern amenities and plush furnishings making your stay unforgettable.",
//     },
//     {
//       index: 3,
//       img: diningImg,
//       name: "Dining",
//       text: "Savor locally inspired culinary delights at our on-site restaurants, where talented chefs craft unforgettable dishes, promising a gastronomic journey like no other.",
//     },
//   ];

//   const [activeWhy, setActiveWhy] = useState(0);
//   const handleButtonClick = (index) => {
//     setActiveWhy(index);
//   };

//   return (
//     <div className={styles.whyUs}>
//       <div className={styles.whyUsContent}>
//         <div className={styles.imageContainer}>
//           <img src={whyUsObj[activeWhy].img} alt="" />
//         </div>
//         <div className={styles.smallContainer}>
//           <div className={styles.img}>
//             <img src={whyUsObj[activeWhy].img} alt="" />
//           </div>
//           <div className={styles.content}>
//             <h5>{whyUsObj[activeWhy].name}</h5>
//             <p>{whyUsObj[activeWhy].text}</p>
//           </div>
//         </div>
//         <div className={styles.btnContainer}>
//           {whyUsObj.map((why) => (
// <button
//   className={styles.whyUsButton}
//   style={{
//     backgroundColor: activeWhy === why.index ? "#ff7c36" : "",
//     color: activeWhy === why.index ? "#ffffff" : "",
//   }}
//   onClick={() => {
//     handleButtonClick(why.index);
//   }}
// >
//   {why.name}
// </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyUs;
