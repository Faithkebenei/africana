// import React from "react";
// import styles from "./Testimonials.module.scss";
// import TextContent from "../TextContent/TextContent";

// const Testimonials = () => {
//   return (
//     <div className={styles.testimonials}>
//   <TextContent
//     heading="Guests Share Rave Reviews for Africana Hotel"
//     text="Our stay at Africana Hotel was simply unforgettable. From the warm welcome at check-in to the impeccable service throughout our stay, every moment was a delight. The luxurious accommodations, delectable dining options, and stunning views made our visit truly special. We can't wait to return!"
//   />
//     </div>
//   );
// };

// export default Testimonials;

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "./Testimonials.module.scss";
import TextContent from "../TextContent/TextContent";

const Testimonials = () => {
  const testimonies = [
    {
      index: 0,
      name: "John and Sarah",
      text: "Our stay at Africana Hotel was simply unforgettable. From the warm welcome at check-in to the impeccable service throughout our stay, every moment was a delight. The luxurious accommodations, delectable dining options, and stunning views made our visit truly special. We can't wait to return!",
    },
    {
      index: 1,
      name: "Michael, Business Consultant",
      text: "I recently hosted a business conference at Africana Hotel, and I couldn't be happier with the experience. The conference facilities were top-notch, equipped with everything we needed for a successful event. The attentive staff ensured that every detail was taken care of, allowing me to focus on my presentations and networking. I highly recommend Africana Hotel for any corporate event.",
    },
    {
      index: 2,
      name: "The Smith Family",
      text: "Our family vacation at Africana Hotel exceeded all expectations. The kids loved the pool area, and we enjoyed relaxing on the beach just steps away from our room. The hotel's restaurant served delicious meals, and the staff went above and beyond to accommodate our dietary preferences. It was the perfect getaway for our family, and we can't wait to come back next year!",
    },
  ];
  return (
    <div className={styles.testimonials}>
      <h2>Guests Share Rave Reviews for Africana Hotel</h2>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={6000}
        showArrows={false}
        showStatus={false}
      >
        {testimonies.map((testimony) => (
          <TextContent text={testimony.text} name={testimony.name} />
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
