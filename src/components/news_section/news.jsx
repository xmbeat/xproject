import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './styles.module.sass'
import { motion } from 'framer-motion'

import { zoom, side } from 'effects/effects'
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation , EffectCards} from 'swiper';

import "swiper/css/effect-cards";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useTranslation } from 'react-i18next';
export default function News() {
    const carouselContainer = useRef()
    const cardStyle = useRef({})
    const { t } = useTranslation()
    const [itemsPerPage, setItemsPerPage] = useState(3)
    const items = useMemo(() => {
        return [{
            title: 'Criptomonedas, la divisa del metaverso',
            subtitle: 'Forbes',
            date: new Date(2022, 2, 23),
            href: "https://forbes.co/2022/03/23/criptomonedas/criptomonedas-la-divisa-del-metaverso",
            image: 'https://forbes.co/_next/image?url=https%3A%2F%2Fcdn.forbes.co%2F2021%2F02%2Fcriptomonedas-foto-Forbes-Argentina.jpg&w=1920&q=75',
            tldr: 'La descentralización de las criptomonedas en el mundo real las ha hecho serias candidatas para convertirse en la moneda oficial de los proyectos...'
        }, {
            title: 'Landian Metaverse sells out Tier 1',
            subtitle: 'Crypto New Flash',
            date: new Date(2022, 8, 15),
            href: "https://www.crypto-news-flash.com/landian-metaverse-sells-out-tier-1/",
            image: 'https://www.crypto-news-flash.com/wp-content/uploads/2022/09/unnamed-26.jpg',
            tldr: 'Selling more than 719,000 lots and minting over 380,000 NFT’s in four days, completing the largest NFT transaction ever! '
        },
        {
            title: 'Landian Metaverse Live Auction Debuts with Record-Breaking NFT Sales',
            subtitle: 'Global News Wire',
            date: new Date(2022, 8, 23),
            href: "https://www.globenewswire.com/news-release/2022/09/24/2522099/0/en/Landian-Metaverse-Live-Auction-Debuts-with-Record-Breaking-NFT-Sales.html",
            image: 'https://dplnews.com/wp-content/uploads/2022/05/dplnews_metaverso_mc300522-scaled.webp',
            tldr: 'Austin Yavorsky, CEO and founder of Landian (LNDA), announces that it has built the world\'s largest functional metaverse that\'s years ahead of anything ... '
        },
        {
            title: '¿Llegamos al futuro? Estos son los mundos que ya existen en el Metaverso',
            subtitle: 'El Universal',
            date: new Date(2022, 9, 23),
            href: 'https://www.eluniversal.com.co/tecnologia/llegamos-al-futuro-estos-son-los-mundos-que-ya-existen-en-el-metaverso-GG7392293',
            image: 'https://www.eluniversal.com.co/binrepository/1050x700/0c0/0d0/none/13704/OXGG/metaverso_6895978_20221023084720.jpg',
            tldr: 'Cualquier persona de a pie no puede entrar y va a construir su edificio y lo va a vender, o va a exhibir su marca, ...'
        },
        {
            title: 'Landian Metaverse Comes from Stealth Mode to Hit Record-Breaking NFT Sales',
            subtitle: 'VR Times',
            date: new Date(2022, 8, 22),
            href: "https://virtualrealitytimes.com/2022/09/22/landian-metaverse-comes-from-stealth-mode-to-hit-record-breaking-nft-sales/",
            image: 'https://virtualrealitytimes.com/wp-content/uploads/2022/09/Landian.png',
            tldr: 'After three years in stealth mode, the Landian Metaverse has launched in the past week with a Tier 1 live auction which had record-breaking NFT sales, notching up 98,463,595 square meters of land ...'
        }
        ]
    }, [])


    const formatDate = useCallback((date) => {
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options)
    }, [])

    useEffect(() => {
        var listener = () => {
            if (carouselContainer.current) {
                var rect = carouselContainer.current.getBoundingClientRect()
                var itemsPerPage = rect.width / 300
                if (itemsPerPage >= 2){
                    itemsPerPage = Math.ceil(itemsPerPage)
                }
                setItemsPerPage(itemsPerPage)
            }
        }
        window.addEventListener('resize', listener)
        listener()
        return () => {
            window.removeEventListener('resize', listener)
        }
    }, [])

    const handleSlideChange = useCallback((swiper) => {
        
    }, [])
    console.log(itemsPerPage)
    return <div className={styles.container}>
        <h1>{t('explore')} <span>{t('popular')}</span></h1>
        <div ref={carouselContainer} className={styles.newsMobile}>
            <Swiper
                className={styles.swiper}
                slidesPerView={itemsPerPage}
                spaceBetween={30}
                centeredSlides={true}
                autoHeight={false}
                initialSlide={2}
                onSlideChange={handleSlideChange}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay, Navigation, EffectCards]} >
                {
                    items.map((item, index) =>
                        <SwiperSlide key={index} className={styles.slide} >
                            <div className={styles.newsCard} style={cardStyle.current}>
                                <div className={styles.newsImage}>
                                    <Image alt='Image' src={item.image} style={{ objectFit: 'cover' }} fill='true' />
                                </div>

                                <div className={styles.newsBody}>
                                    <div className={styles.newsDate}>{formatDate(item.date)}</div>
                                    <h2>{item.title}</h2>
                                    <h3>{item.subtitle}</h3>
                                    <p>{item.tldr}</p>
                                    <Link className={styles.linkButton} href={item.href}>
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>

    </div>
}