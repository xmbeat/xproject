import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/home.module.sass'
import { BsFillPlayFill, BsFillPlayCircleFill } from 'react-icons/bs'
import { IoIosWallet, IoWallet } from 'react-icons/io'
import { motion } from 'framer-motion'
import { zoom, side } from 'effects/effects'
import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'

import { PerspectiveCamera } from '@react-three/drei'
import Wave from 'components/threejs/wave'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import Scene from 'components/threejs/scene'
import LandingLayout from 'components/layout/LandingLayout'
import { useTranslation } from 'react-i18next'
import Modal from 'components/Modal/modal'
import News from 'components/news_section/news'
import VideoCarrousel from 'components/VideoCarrousel/VideoCarrousel'
import AboutLandian from 'components/aboutLandian/AboutLandian'
import Marketplace from 'components/Marketplace'
export default function Home() {
  const { t } = useTranslation()
  const [showPlayer, setShowPlayer] = useState(false)
  return (
    <LandingLayout
      logo={
        <h1 className={styles.logo}><span>x</span> project</h1>
      }
    >
      <div>
        <Head>
          <title>X Project</title>
          <meta name="description" content="The X Project" />
          <link rel="icon" href="/assets/images/favicon.png" />

        </Head>
        <div className={styles.fixedbg}></div>
        <div className={styles.animatedbg}>
          <Canvas style={{ height: '100vh', width: '100vw', zIndex: -1 }}
            dpr={[1, 2]} >
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
              <ambientLight intensity={1} position={[10, 10, 0]} />
              <Scene />
            </Suspense>
          </Canvas>

        </div>

        <Modal onClose={() => setShowPlayer(false)} show={showPlayer} title={'Player'}>

        </Modal>

        <main className={styles.home}>
          <section className={`${styles.fixedSize} ${styles.first}`}>
            <div className={styles.centeredContent}>
              <motion.h1
                variants={side}
                initial="hidden"
                whileInView="visible"
                className={styles.title}><span>x</span> project</motion.h1>
              <div className={styles.text}>
                <motion.p
                  variants={zoom}
                  initial="zoomOut"
                  whileInView="visible"
                >
                  {t('welcome')}
                </motion.p>
              </div>
              <div className={styles.play} onClick={() => setShowPlayer(true)}>

                <BsFillPlayFill />
              </div>
            </div>
          </section>
          
          <section className={`${styles.fixedSize}`}>
            <News/>
          </section>
          <VideoCarrousel/>
          <AboutLandian/>

          <section className={styles.adaptativeSize}>
            <div className={styles.adaptativeContent}>
              <div className={styles.imageWithText}>
                <motion.div className={styles.image}
                  variants={zoom}
                  initial="zoomOut"
                  whileInView="visible"
                >
                  <div className={styles.borderedContainer}>
                    <div className={styles.bg}>
                      <Image src="/assets/images/what_is.png" alt="what is: image" style={{ "objectFit": "cover" }} fill="true" />
                    </div>
                  </div>
                </motion.div>
                <motion.div className={styles.text}
                  variants={zoom}
                  initial="zoomOut"
                  whileInView="visible"
                >
                  <h1 dangerouslySetInnerHTML={{ __html: t('metaverse-title') }}>

                  </h1>
                  <div dangerouslySetInnerHTML={{ __html: t('metaverse-desc') }}></div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className={styles.fixedSize}>
            <div className={styles.centeredContent}
            >
              <motion.div
                variants={zoom}
                initial="zoomOut"
                whileInView="visible"
                className={styles.imageWithText}>

                <div className={styles.text}>
                  <h1 dangerouslySetInnerHTML={{ __html: t('landian-title') }}>
                  </h1>
                  <div dangerouslySetInnerHTML={{ __html: t('landiant-desc') }}></div>

                </div>
                <div className={styles.image}>
                  <div className={styles.borderedContainer}>
                    <div className={styles.bg}>
                      <Image src="/assets/images/landian.png" alt="landian" style={{ "objectFit": "cover" }} fill="true" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section className={`${styles.adaptativeSize} ${styles.third}`}>
            <div className={styles.adaptativeContent}>
              <h1>Tutorial</h1>
              <div className={styles.steps}>
                <div className={styles.step1}>
                  <h2>
                    <span>1</span>
                    {t('first-step-title')}
                  </h2>
                  <div className={styles.icon}>
                    <BsFillPlayCircleFill />
                  </div>
                  <div className={styles.desc}>{t('first-step-desc')}</div>
                </div>
                <div className={styles.step2}>
                  <h2>
                    <span>2</span>
                    {t('second-step-title')}
                  </h2>
                  <div className={styles.icon}>
                    <IoIosWallet />
                  </div>
                  <div className={styles.desc}>{t('second-step-desc')}</div>
                </div>
                <div className={styles.step3}>
                  <h2>
                    <span>3</span>
                    {t('third-step-title')}
                  </h2>
                  <div className={styles.icon}>
                    <BsFillPlayCircleFill />
                  </div>
                  <div className={styles.desc}>{t('third-step-desc')}</div>
                </div>
              </div>
            </div>
          </section>
          <Marketplace />
        </main>
      </div>
    </LandingLayout>

  )
}
