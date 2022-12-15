import Link from 'next/link'
import styles from './connect.module.sass'
export default function Connect() {
    return <>
        <main>
            <div className={styles.content}>
                <h3>
                    Empieza ahora
                </h3>
                <h1> Connectar Wallet</h1>
                <div className={styles.separator}></div>
                <form action="/transaction">
                    <div>
                        <label htmlFor="wallet">Wallet</label>
                        <input type="text" placeholder='Your address wallet here' />
                    </div>
                    <div>
                        <label htmlFor="email"> Email</label>
                        <input type="text" placeholder='Your address wallet here' />
                    </div>
                    <div className={styles.separator}></div>
                    <input type="submit" value="confirmar" />
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