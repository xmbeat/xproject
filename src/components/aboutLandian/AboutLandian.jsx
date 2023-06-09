import styles from "./AboutLandian.module.sass";
import Lottie from "react-lottie";
import * as animationData from "../../../public/lotties/eyes.json";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Parallax } from 'react-scroll-parallax';
import { motion } from "framer-motion";
import { zoom, side } from "effects/effects";
import { useTranslation } from "react-i18next";

const AboutLandian = () => {
  const { t } = useTranslation();
  const [more, setMore] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const viewMore = () => {
    setMore(true);
  };
  const viewLess = () => {
    setMore(false);
  };

  return (
    <section
      className={styles.AboutLandian}
      style={{ marginBottom: more ? "35rem" : "5rem" }}
    >
      <div className={styles.about}>
        <picture>
          <img
            src="/assets/images/landian_d.png"
            alt="landian"
            className={styles.image}
          />
        </picture>
          <div
            className={styles.text}
            style={{ marginTop: more ? "30rem" : "0" }}
          >
          <Parallax speed={-20}>  
              <h1 dangerouslySetInnerHTML={{ __html: t("about") }}></h1>
              <p>{t("about1")}</p>
              <p>{t("about2")}</p>
              {more && (
                <motion.div variants={side} initial="hidden" whileInView="visible">
                  <p>{t("about3")}</p>
                  <p>{t("about4")}</p>
                  <p>{t("about5")}</p>
                </motion.div>
              )}
              {!more ? (
                <button onClick={viewMore}>... {t("readmore")}</button>
              ) : (
                <button onClick={viewLess}>{t("readless")} ...</button>
              )}
              <div className={styles.whitepaper}>
                <p>{t("learn")}</p>
                <button className={styles.whitepaperbtn}>
                  <Link target="_blank" href="https://www.landian.io">
                    Landian
                  </Link>
                </button>
              </div>
            </Parallax> 
          </div>
        <div className={styles.lottie}>
          <Lottie options={defaultOptions} height={650} width={650} />
        </div>
      </div>
    </section>
  );
};

export default AboutLandian;
