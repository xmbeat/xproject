import styles from "./MobileCarousel.module.sass";
import { videos } from "./videos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ImYoutube2 } from "react-icons/im";

const MobileCarousel = () => {
  const handleSlideChange = useRef();
  return (
    <section className={styles.MobileCarousel}>
      <div>
        <Swiper
          className={styles.swiper}
          slidesPerView={1}
          spaceBetween={-60}
          initialSlide={1}
          onSlideChange={handleSlideChange}
          autoplay={{
            delay: 25000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
        >
          {videos.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.Card}>
                <div className={styles.image}>
                  <Image
                    alt="Image"
                    src={item.image}
                    width="300"
                    height="200"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className={styles.text}>
                  <h2>{item.title}</h2>
                  <div>
                    <Link href={item.url} className={styles.button}>
                      <ImYoutube2 className={styles.yt} />
                      <span>Watch on Youtube</span>
                    </Link>
                   
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MobileCarousel;
