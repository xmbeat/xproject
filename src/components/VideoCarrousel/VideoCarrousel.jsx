import { useState } from "react";
import Video from "./Video";
import styles from "./VideoCarrousel.module.sass";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { motion } from "framer-motion";
import { variants } from "animations";
import { videos } from "./videos";

const VideoCarrousel = () => {
  const [counter, setCounter] = useState(0);
  const [nextVideo, setNextVideo] = useState(false);
  const handleBack = () => {
    setNextVideo(true);
    setTimeout(() => {
      setNextVideo(false);
      setCounter((counter) => counter - 1);
    }, 750);
  };
  const handleNext = () => {
    setNextVideo(true);
    setTimeout(() => {
      setNextVideo(false);
      setCounter((counter) => counter + 1);
    }, 750);
    
  };

  return (
    <section className={styles.VideoCarrousel}>
      <div className={styles.carrousel}>
        <motion.div
          className={styles.mainVideo}
          animate={!nextVideo ? "open" : "closed"}
          variants={variants}
        >
          <Video url={videos[counter]} />
        </motion.div>

        <div className={styles.controls}>
          <motion.div
            className={styles.mainVideo}
            animate={!nextVideo ? "open" : "closed"}
            variants={variants}
          >
            {counter < 5 ? <Video url={videos[counter + 1]} /> : <div></div>}
          </motion.div>
          <motion.div
          className={styles.mainVideo}
            animate={!nextVideo ? "open" : "closed"}
            variants={variants}
          >
            {counter < 4 ? <Video url={videos[counter + 2]} /> : <div></div>}
          </motion.div>

          <div className={styles.buttons}>
            {counter > 0 ? (
              <IoArrowBackCircleOutline
                className={styles.btn}
                onClick={handleBack}
              />
            ) : (
              <div></div>
            )}
            {counter < 5 ? (
              <IoArrowForwardCircleOutline
                className={styles.btn}
                onClick={handleNext}
              />
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCarrousel;
