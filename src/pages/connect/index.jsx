import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import styles from './connect.module.sass'
import homeStyles from 'styles/home.module.sass'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import Scene from 'components/threejs/scene'
import Image from 'next/image'
export default function Connect() {
    const { t } = useTranslation()
    return <>
        <main>
            <div className={homeStyles.fixedbg}></div>
            <div className={homeStyles.animatedbg}>
                <Canvas style={{ height: '100vh', width: '100vw', zIndex: -1 }}
                    dpr={[1, 2]} >
                    <Suspense fallback={null}>
                        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
                        <ambientLight intensity={1} position={[10, 10, 0]} />
                        <Scene />
                    </Suspense>
                </Canvas>

            </div>
            <div className={styles.content}>
                <h3>
                    {t('start-now')}
                </h3>
                <h1> {t('connect-wallet')}</h1>
                <div className={styles.separator}></div>
                <form action="/transaction">
                    <div>
                        <label htmlFor="wallet">{t('wallet')}</label>
                        <input type="text" placeholder={t('wallet-desc')} />
                    </div>
                    <div>
                        <label htmlFor="email"> {t('email')}</label>
                        <input type="text" placeholder={t('email-desc')} />
                    </div>
                    <div className={styles.separator}></div>
                    <input type="submit" value={t('confirm')} />
                </form>
            </div>
            <div className={styles.logoContainer}>
                <Link href='/'>
                    <div className={styles.logo}>
                        <Image src='/assets/images/logo.png' fill />
                    </div>
                </Link>
            </div>
        </main>
    </>
}