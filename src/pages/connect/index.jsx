import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import styles from './connect.module.sass'
export default function Connect() {
    const {t} = useTranslation()
    return <>
        <main>
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

                    <h1><span>x</span> project</h1>
                </Link>
            </div>
        </main>
    </>
}