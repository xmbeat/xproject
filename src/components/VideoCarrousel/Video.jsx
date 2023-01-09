import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "./VideoCarrousel.module.sass";

const Video = ({ url }) => {
  const {t} = useTranslation();
  return (
    <div className={styles.videoContainer}>
      <div
        className={styles.container}
        onClick={() => setVideo((video) => !video)}
      >
        <picture>
          <img src={url.image} alt={url.image}/>
        </picture>
      </div>
      <div className={styles.text}>
        <h3>{url.title}</h3>
        <div className={styles.watch}>
          <Link target="_blank" href={url.url}>
            {t("watch")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
