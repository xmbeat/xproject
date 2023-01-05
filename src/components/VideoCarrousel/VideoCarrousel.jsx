import { useState } from "react";
import Video from "./Video";
import styles from "./VideoCarrousel.module.sass";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

const videos = [
  {
    url: "https://youtu.be/XvHCkcNQgVs",
    image: "/assets/videos/video1.jpg",
    title:
      "VISIT YOUR LAND💥 Explore and navigate your lands in the Landian Metaverse",
  },
  {
    url: "https://youtu.be/PPiVzE0NFnQ",
    image: "/assets/videos/video2.jpg",
    title: "Landian Desk l Landian biomes test 1 l Darlan Sierra l Episode 4",
  },
  {
    url: "https://youtu.be/Gb3Ktn5EuJA",
    image: "/assets/videos/video3.jpg",
    title: "Landian the future of metaverse",
  },
  {
    url: "https://youtu.be/d0rmkp-0St8",
    image: "/assets/videos/video5.jpg",
    title: "TUTORIAL DEL MARKETPLACE DE LANDIAN",
  },
  {
    url: "https://youtu.be/fN_KwYI3B_E",
    image: "/assets/videos/video6.jpg",
    title: "Landian, The Future of the Metaverse - Univision",
  },
  {
    url: "https://youtu.be/fIrt9_s3GuM",
    image: "/assets/videos/video4.jpg",
    title: "What’s behind Landian Biomes Test 1?",
  },
];

const VideoCarrousel = () => {
  const [counter, setCounter] = useState(0);

  const handleBack = () => {
    setCounter((counter) => counter - 1);
  };
  const handleNext = () => {
    setCounter((counter) => counter + 1);
    console.log(counter);
  };

  return (
    <section className={styles.VideoCarrousel}>
      <div className={styles.carrousel}>
        <Video url={videos[counter]} />
        <div className={styles.controls}>
            {counter < 5 ? <Video url={videos[counter + 1]} /> : <div></div>}
            {counter < 4 ? <Video url={videos[counter + 2]} /> : <div></div>}
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
