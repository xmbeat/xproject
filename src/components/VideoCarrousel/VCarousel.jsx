import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { videos } from "./videos";
// Import Swiper styles
import "swiper/css/effect-coverflow";
// import required modules
import { EffectCoverflow } from "swiper";
import Video from "./Video";
import styles from "./VCarousel.module.sass";

const Vcarousel = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        initialSlide={2}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1, 
          slideShadows: false
        }}
        modules={[EffectCoverflow]}
        className={styles.Swipper}
      >
        {videos.map((item, index) => (
          <SwiperSlide key={index}>
            <Video url={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Vcarousel;
