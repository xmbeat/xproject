import { useCallback, useEffect, useState } from 'react'
import styles from './LandingLayout.module.sass';
import { useTranslation } from 'react-i18next';

import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import Link from 'next/link';
import LangSelector from 'components/LangSelector';
import Image from 'next/image';

export default function LandingLayout({ children, onlyTranslate = false, logo = null }) {
    const [isNavbarBlured, setIsNavarBlured] = useState(false)
    const {t, i18n} = useTranslation()
    useEffect(() => {
        let listener = () => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                setIsNavarBlured(true)
            }
            else {
                setIsNavarBlured(false)
            }
        }
        window.addEventListener('scroll', listener);
        window.addEventListener('resize', listener)
        return () => {
            window.removeEventListener('scroll', listener)
            window.removeEventListener('resize', listener)
        }
    })
    useEffect(()=>{
        if (localStorage.getItem('language')){
            i18n.changeLanguage(localStorage.getItem('language'))
        }
        
    },[])
    const handleLanguageChange = useCallback((locale)=>{
        i18n.changeLanguage(locale)
        localStorage.setItem('language', locale)

    }, [])

    return <div className={styles.container}>
        <div className={`${styles.navbar} ${isNavbarBlured ? styles.blur : ''}`}>
            <div className={styles.logoContainer}>
                {/* {!onlyTranslate && logo} */}
                <div className={styles.logo}>
                    <Image src='/assets/images/logo.png' fill />
                </div>
                <div className={styles.mobilelogo}>
                    <Image src='/android-chrome-512x512.png' fill />
                </div>
            </div>
            <div className={styles.navbarItems}>
                <span>{ t('header-text') }</span>
                <LangSelector onChange={handleLanguageChange} />
                {/* <Link href="/connect"> 
                    <span className={styles.button}>{t('connect-wallet')}</span>
                </Link> */}
            </div>
        </div>
        <div className={styles.content}>
            {children}
        </div>
        <div className={styles.footer}>
            <div className={styles.imageContainer}>
                <div className={styles.logo}>
                    <Image src='/assets/images/logo.png' fill />
                </div>
            </div>
            <span className={styles.copyright}>
                {/* {t('copyright')} */}
                Xifra Global 2022 © All rights reserved
            </span>
        </div>
    </div>
}