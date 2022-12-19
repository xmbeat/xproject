import { useCallback, useEffect, useState } from 'react'
import { MdLanguage } from 'react-icons/md'
import Flags from 'country-flag-icons/react/3x2'
import Modal from 'components/Modal/modal';
import styles from './LandingLayout.module.sass';
import { useTranslation } from 'react-i18next';

import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import Link from 'next/link';

export default function LandingLayout({ children, onlyTranslate = false, logo = null }) {
    const [modalVisibility, setModalVisibility] = useState(false);
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
        <Modal show={modalVisibility} onClose={() => setModalVisibility(false)} title={'Select your language'}>
            <div className={styles.langList} onClick={() => setModalVisibility(false)}>
                <ul>
                    <li >
                        <Link href="/" onClick={() => handleLanguageChange('en')}>  <div className={styles.flagContainer}><Flags.GB title="British" /></div> English </Link>
                    </li>
                    <li>
                        <Link href="/" onClick={() => handleLanguageChange('es')}>   <div className={styles.flagContainer}><Flags.ES title="Spain" /> </div> Español </Link>
                    </li>
                    <li>
                        <Link href="/" onClick={() => handleLanguageChange('pt')}>  <div className={styles.flagContainer}> <Flags.BR title="Brazil" /> </div> Português </Link>
                    </li>
                    <li>
                        <Link href="/" onClick={() => handleLanguageChange('kr')}>   <div className={styles.flagContainer}><Flags.KR title="Korean" /> </div> 한국어 </Link>
                    </li>
                   
                </ul>
            </div>
        </Modal>
        <div className={`${styles.navbar} ${isNavbarBlured ? styles.blur : ''}`}>
            <div className={styles.logoContainer}>
                {!onlyTranslate && logo}
            </div>
            <div className={styles.navbarItems}>
                <div className={styles.lang} onClick={() => setModalVisibility(true)} >
                    <MdLanguage />
                </div>
                {!onlyTranslate &&
                    <Link href="/connect" className={styles.desktopOnly}> 
                        <span className={styles.button}>{t('connect-wallet')}</span>
                    </Link>
                   
                }
                  {!onlyTranslate &&
                    <Link className={styles.mobileOnly} href="/connect">
                        <span className={styles.button}>{t('connect')}</span>
                    </Link>
                   
                }
            </div>
        </div>
        <div className={styles.content}>
            {children}
        </div>
        <div className={styles.footer}>
            <div className={styles.disclaimer}>
                {t('copyright')}
            </div>
            <div className={styles.imageContainer}>
                {logo}
                {/* <div className={styles.socials}>
                    <Link href='#'>
                        <FaFacebookF />
                    </a>
                    <a href='#'>
                        <AiFillInstagram />
                    </a>
                </div> */}
            </div>
            <div className={styles.linkContainer}>
                <Link href="/terms-conditions">
                    {t('disclaimer-title')}
                </Link>
            </div>

        </div>
    </div>
}