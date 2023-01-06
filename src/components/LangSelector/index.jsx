// Common
import { useEffect, useState } from 'react'
import Link from 'next/link'
// Flags
import Flags from 'country-flag-icons/react/3x2'
// Styles
import styles from './styles.module.sass'


export default function LangSelector({onChange = () => {}}) {
    
    const LOCALES = [
        {
            code: 'en',
            name: 'English',
            flag: <Flags.GB title="British" />
        },
        {
            code: 'es',
            name: 'Español',
            flag: <Flags.ES title="Spain" />
        },
        {
            code: 'pt',
            name: 'Português',
            flag: <Flags.BR title="Brazil" />
        },
        {
            code: 'kr',
            name: '한국어',
            flag: <Flags.KR title="Korean" />
        },
        {
            code: 'vi',
            name: 'Tiếng Việt',
            flag: <Flags.VN title="Vietnamese" />
        }
    ]

    const [isOpen, setIsOpen] = useState(false)
    const [currentLang, setCurrentLang] = useState({
        code: 'en',
        name: 'English',
        flag: <Flags.GB title="British" />
    })

    useEffect(() => {
        setCurrentLang(LOCALES.find(locale => locale.code === localStorage.getItem('language')))
        
        return () => {}
    }, [])

    const handleClick = (locale) => {
        setCurrentLang(locale)
        onChange(locale.code)
    }

    return (
        <div className={styles.container}>
            <button onClick={() => setIsOpen(!isOpen)}>
                <div>
                { currentLang.flag } <span>{ currentLang.code }</span>
                </div>
            </button>
            <div className={styles.langOptions}>
                <ul>
                    {
                        LOCALES.map((locale, i) => (
                            <li key={i}>
                                <Link href="/" onClick={() => handleClick(locale)}>  <div className={styles.flagContainer}>{locale.flag}</div> {locale.name} </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
