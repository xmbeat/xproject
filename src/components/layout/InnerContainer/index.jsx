// Styles
import styles from './styles.module.sass'

export default function InnerContainer({ children }) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.childrenContainer}>
                    { children }
                </div>
            </div>
        </>
    )
}
