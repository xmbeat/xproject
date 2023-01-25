import styles from "./MobileCarousel.module.sass";
import { videos } from "./videos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ImYoutube2 } from "react-icons/im";
import { useTranslation } from "react-i18next";

const MobileCarousel = () => {
  const {t} = useTranslation();
  const handleSlideChange = useRef();
  return (
    <section className={styles.MobileCarousel}>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={-60}
          initialSlide={1}
          onSlideChange={handleSlideChange}
          loop={true}
          autoplay={{
            delay: 5000,
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
                      <span>{t("watch")}</span>
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
