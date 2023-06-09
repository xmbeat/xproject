import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/home.module.sass'
import { BsFillPlayFill, BsFillPlayCircleFill } from 'react-icons/bs'
import { IoIosWallet, IoWallet } from 'react-icons/io'
import { BsFillCircleFill } from 'react-icons/bs'
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
import AboutLandian from 'components/aboutLandian/AboutLandian'
import Marketplace from 'components/Marketplace'
import { Parallax } from 'react-scroll-parallax';
import MobileCarousel from 'components/VideoCarrousel/MobileCarousel'
import Vcarousel from 'components/VideoCarrousel/VCarousel'
import InnerContainer from 'components/layout/InnerContainer'

export default function Home() {
  const { t } = useTranslation()
  const [showPlayer, setShowPlayer] = useState(false)

  return (
    <LandingLayout>
      <div>
        <Head>
          <title>Xifra | Agreement</title>
          <meta name="description" content="This website is intended to offer an exchange opportunity, obtaining your digital assets that will be your property." />
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
          {/* HERO */}
          <section style={{ height: '100vh' }} className={`${styles.fixedSize} ${styles.first}`}>
          <div className={styles.centeredContent}>
              <motion.div
                variants={side}
                initial="hidden"
                whileInView="visible"
                className={styles.logo}
              >
                <Image src='/assets/images/logo.png' fill />
              </motion.div>
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
            <span>{t('header-text')}</span>
          </section>

          {/* WHAT IS METAVERSE? */}
          <section className={`${styles.adaptativeSize } ${styles.metaverse}`} >
            <div className={styles.adaptativeContent}>
              <motion.div className={styles.text}
                variants={zoom}
                initial="zoomOut"
                whileInView="visible"
              >
                <div className={styles.metContent}>
                    <div className={styles.firstRow}>
                      <h1 dangerouslySetInnerHTML={{ __html: t('metaverse-title') }}></h1>
                      <div className= {styles.text} dangerouslySetInnerHTML={{ __html: t('metaverse-desc1') }}></div>
                      <div className = {styles.arrowOne}>
                        <BsFillCircleFill/>
                      </div>
                    </div>
                  <Parallax speed={-20} >
                    <div className={styles.secondRow}>
                      <div className={styles.bigBg}>
                        <Image src="/assets/images/metaverse.png" alt="what is: image" fill style={{ objectFit: "cover"}}/>
                      </div>
                    </div>
                  </Parallax>
                    <div className={styles.thirdRow}>
                        <div className = {styles.arrowTwo}>
                          <BsFillCircleFill/>
                        </div>
                      <div className= {styles.text} dangerouslySetInnerHTML={{ __html: t('metaverse-desc2') }}></div>
                    </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* WHAT IS LANDIAN? */}
          <section className={`${styles.adaptativeSize} ${styles.second}`}>
            <InnerContainer>
              <div className={styles.content}>
                <motion.div
                  className={styles.imageWithText}>
                  <Parallax speed={-10} >
                    <div className={styles.text}>
                      <h1 dangerouslySetInnerHTML={{ __html: t('landian-title') }} />
                      <div dangerouslySetInnerHTML={{ __html: t('landiant-desc') }} />
                    </div>
                  </Parallax>
                  <div className={styles.image}>
                    <div className={styles.borderedContainer}>
                      <div className={styles.bg}>
                        <Image src="/assets/images/landian.png" alt="landian" style={{ "objectFit": "contain" }} fill="true" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </InnerContainer>
          </section>

          {/* VIDEO CAROUSEL */}
          <section className={styles.adaptativeSize}>
            <Vcarousel/>
            <MobileCarousel />
          </section>


          {/* ABOUT LANDIAN */}
          <section className={`${styles.adaptativeSize} ${styles.landian}`}>
            <AboutLandian />
          </section>


          {/* ARTICLES CAROUSEL */}
          <section className={`${styles.adaptativeSize}`}>
            <News/>
          </section>

          {/* TUTORIAL */}
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

          {/* MARKETPLACE */}
          <Marketplace />

        </main>
      </div>
    </LandingLayout>

  )
}
