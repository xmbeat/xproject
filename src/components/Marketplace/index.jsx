// Common
import Image from 'next/image'
import Link from 'next/link'
// Components
import InnerContainer from 'components/layout/InnerContainer';
// Translation
import { useTranslation } from 'react-i18next';
// Styles
import styles from './styles.module.sass'

export default function Marketplace() {

    const { t } = useTranslation()

    return (
        <section className={styles.container}>
            <InnerContainer>
                <div className={styles.content}>
                    <h2>{t('marketplace')}</h2>
                    <div className={styles.grid}>
                        <Link href='https://element.market/'><Image src='/assets/images/element-logo.svg' alt='Element market' fill /></Link>
                        <Link href='https://opensea.io/'><Image src='/assets/images/opensea-logo.svg' alt='OpenSea' fill /></Link>
                    </div>
                </div>
            </InnerContainer>
        </section>
    )
}
