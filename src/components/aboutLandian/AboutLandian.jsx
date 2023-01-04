import styles from "./AboutLandian.module.sass";
import Lottie from "react-lottie";
import * as animationData from "../../../public/lotties/eyes.json";
import { useState } from "react";
import Link from "next/link";

const AboutLandian = () => {
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
    <section className={styles.AboutLandian}>
      <div className={styles.text}>
        <h2>About Landian</h2>
        <p>
          Landian exists so that people, businesses, organizations, and cultures
          can engage in the Metaverse unencumbered and without limitations.
          Moreover, it is where becoming anyone or anything is limited only by
          the imagination. One’s ability to evolve and thrive is determined by
          level of effort.
        </p>
        <p>
          At Landian, our focus is to build on the collective growth of virtual
          worlds by making them more interactive, accessible, and easier to
          navigate.
        </p>
        {more && (
          <div>
            <p>
              Rewarding creativity and social interaction is what all great
              societies have in common. That is why Landian is packed with
              exciting incentives that stimulate user engagement and commerce.
              Plus, it is governed by a shared value system that benefits
              founders and users.
            </p>
            <p>
              The Metaverse is a virtual environment that gives users the
              opportunity to create experiences and engage with others from
              around the world. The Metaverse is inevitable, and yet the concept
              is far from new. Over decades we have come to depend on similar
              adaptations centered on commerce, social interactions, and unique
              interpretations of personal expression.
            </p>
            <p>
              Welcome to the world of Landian and the Metaverse’s next evolution
              of cooperation, communication, storytelling, and emotional
              responses without the impediments often created by distance, time,
              money, race, and religion.
            </p>
          </div>
        )}
        {!more ? (
          <button onClick={viewMore}>... Read more</button>
        ) : (
          <button onClick={viewLess}>Read less ...</button>
        )}
        <div className={styles.whitepaper}> 
        <p>Learn more in</p>
        <button className={styles.whitepaperbtn}>
          <Link target="_blank" href="https://www.landian.io">Landian</Link>
        </button>
        </div>
        
      </div>
      <Lottie options={defaultOptions} height={650} width={650} />
    </section>
  );
};

export default AboutLandian;
