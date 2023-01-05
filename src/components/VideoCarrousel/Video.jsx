import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./VideoCarrousel.module.sass";
import zoom from "effects/effects";

const Video = ({ url }) => {
  return (
    <motion.div
      variants={zoom}
      initial="zoomOut"
      whileInView="visible"
      className={styles.videoContainer}
    >
      <div className={styles.container}>
        <picture>
          <img src={url.image} />
        </picture>
      </div>
      <div className={styles.text}>
        <h3>{url.title}</h3>
        <div className={styles.watch}>
          <Link target="_blank" href={url.url}>
            Mirar en YouTube
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Video;
