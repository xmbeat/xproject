import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "./Video.module.sass";
import { ImYoutube2 } from "react-icons/im";

const Video = ({ url }) => {
  const { t } = useTranslation();
  return (
    <Link target="_blank" href={url.url}>
      <div className={styles.Video}>
        <div className={styles.imgContainer}>
          <picture>
            <img src={url.image} alt={url.image} />
          </picture>
        </div>
        <div className={styles.text}>
          <h3>{url.title}</h3>
        </div>
        <div className={styles.watch}>
          {t("watch")} 
          <ImYoutube2 className={styles.yt} />
        </div>
      </div>
    </Link>
  );
};

export default Video;
