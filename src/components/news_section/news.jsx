import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';
import styles from './styles.module.sass'
export default function News() {
    const items = useMemo(() => {
        return [{
            title: 'Title 1',
            subtitle: 'Subtitle 1',
            date: new Date(),
            image: '/assets/images/video_banner.png',
            tldr: 'Metaverso es un universo post-realidad, un entorno multiusuario perpetuo y persistente que fusiona la realidad física con la virtualidad digital. Se basa en la convergencia de tecnologías, '
        }, {
            title: 'Title 2',
            subtitle: 'Subtitle 2',
            date: new Date(),
            image: '/assets/images/video_banner.png',
            tldr: 'Metaverso es un universo post-realidad, un entorno multiusuario perpetuo y persistente que fusiona la realidad física con la virtualidad digital. Se basa en la convergencia de tecnologías, '
        }]
    }, [])

    const formatDate = useCallback((date) => {
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options)
    }, [])

    const [currentNew, setCurrentNew] = useState(items[0]);

    return <div className={styles.container}>
        <div className={styles.newsFull}>
            <div className={styles.newsContent}>
                <div className={styles.newsDate}>{formatDate(currentNew.date)}</div>
                <h1>{currentNew.title}</h1>
                <h3>{currentNew.subtitle}</h3>
                <p>{currentNew.tldr}</p>
                <Link className={styles.linkButton} href='/'>
                    Read more
                </Link>
            </div>
            <div className={styles.newsImage}>
                <Image alt='Image' src={currentNew.image} style={{ objectFit: 'cover' }} fill='true' />
            </div>
        </div>
        <div className={styles.pager}>
            {items.map((item, index) =>
                <span key={index} className={`${currentNew == item?styles.selected:''}`}>

                </span>
            )}
        </div>
    </div>
}