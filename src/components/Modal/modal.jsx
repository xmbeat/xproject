import { MdClose } from 'react-icons/md'
import styles from './modal.module.sass'
import { useRef } from 'react'
export default function Modal({title, children, icon, show, onClose}) {
    const containerRef = useRef(null)

    const onCloseHandler = ()=>{
        if (onClose){
            onClose()
        }
    }
    const onClickOutside = (event)=>{
        if (event.target === containerRef.current){
            onCloseHandler()
        }
    }
    return <div ref={containerRef} className={`${styles.container} ${show?styles.visible:''}`}  onClick={onClickOutside} >
        <div className={styles.content}>
            <div className={styles.header}>
                <div className={styles.icon}>
                    {icon}
                </div>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.close} onClick={onCloseHandler}>
                    <MdClose/>
                </div>
            </div>
            <div className={styles.body}>
                {children}
            </div>
        </div>
    </div>
}