// Components
import LandingLayout from 'components/layout/LandingLayout'
// Translation
import { useTranslation } from 'react-i18next'
// Styles
import styles from './styles.module.sass'

const InnerContainer = ({ children }) => (
    <>
        <div className={styles.innerContainer}>
            <div className={styles.childrenContainer}>
                { children }
            </div>
        </div>
    </>
)

export default function TermsAndConditionsPage() {

    const {t} = useTranslation()

    return (
        // <LandingLayout>
            <section className={styles.container}>
                <div className={styles.fixedbg}></div>
                <InnerContainer>
                    <div className={styles.content}>
                        <h1>Terms and conditions</h1>
                        {/* <h1>{t('disclaimer-title')}</h1> */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quod laboriosam. Incidunt dolorum exercitationem hic minus molestias architecto expedita corrupti harum accusamus omnis. Aliquam perferendis quos voluptates dignissimos dolore debitis soluta similique voluptas corrupti nemo, iusto tempore incidunt culpa amet ipsam natus atque aliquid error ad eaque impedit neque. Nisi?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quod laboriosam. Incidunt dolorum exercitationem hic minus molestias architecto expedita corrupti harum accusamus omnis. Aliquam perferendis quos voluptates dignissimos dolore debitis soluta similique voluptas corrupti nemo, iusto tempore incidunt culpa amet ipsam natus atque aliquid error ad eaque impedit neque. Nisi?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quod laboriosam. Incidunt dolorum exercitationem hic minus molestias architecto expedita corrupti harum accusamus omnis. Aliquam perferendis quos voluptates dignissimos dolore debitis soluta similique voluptas corrupti nemo, iusto tempore incidunt culpa amet ipsam natus atque aliquid error ad eaque impedit neque. Nisi?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quod laboriosam. Incidunt dolorum exercitationem hic minus molestias architecto expedita corrupti harum accusamus omnis. Aliquam perferendis quos voluptates dignissimos dolore debitis soluta similique voluptas corrupti nemo, iusto tempore incidunt culpa amet ipsam natus atque aliquid error ad eaque impedit neque. Nisi?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quod laboriosam. Incidunt dolorum exercitationem hic minus molestias architecto expedita corrupti harum accusamus omnis. Aliquam perferendis quos voluptates dignissimos dolore debitis soluta similique voluptas corrupti nemo, iusto tempore incidunt culpa amet ipsam natus atque aliquid error ad eaque impedit neque. Nisi?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quod laboriosam. Incidunt dolorum exercitationem hic minus molestias architecto expedita corrupti harum accusamus omnis. Aliquam perferendis quos voluptates dignissimos dolore debitis soluta similique voluptas corrupti nemo, iusto tempore incidunt culpa amet ipsam natus atque aliquid error ad eaque impedit neque. Nisi?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quod laboriosam. Incidunt dolorum exercitationem hic minus molestias architecto expedita corrupti harum accusamus omnis. Aliquam perferendis quos voluptates dignissimos dolore debitis soluta similique voluptas corrupti nemo, iusto tempore incidunt culpa amet ipsam natus atque aliquid error ad eaque impedit neque. Nisi?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quod laboriosam. Incidunt dolorum exercitationem hic minus molestias architecto expedita corrupti harum accusamus omnis. Aliquam perferendis quos voluptates dignissimos dolore debitis soluta similique voluptas corrupti nemo, iusto tempore incidunt culpa amet ipsam natus atque aliquid error ad eaque impedit neque. Nisi?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quod laboriosam. Incidunt dolorum exercitationem hic minus molestias architecto expedita corrupti harum accusamus omnis. Aliquam perferendis quos voluptates dignissimos dolore debitis soluta similique voluptas corrupti nemo, iusto tempore incidunt culpa amet ipsam natus atque aliquid error ad eaque impedit neque. Nisi?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quod laboriosam. Incidunt dolorum exercitationem hic minus molestias architecto expedita corrupti harum accusamus omnis. Aliquam perferendis quos voluptates dignissimos dolore debitis soluta similique voluptas corrupti nemo, iusto tempore incidunt culpa amet ipsam natus atque aliquid error ad eaque impedit neque. Nisi?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quod laboriosam. Incidunt dolorum exercitationem hic minus molestias architecto expedita corrupti harum accusamus omnis. Aliquam perferendis quos voluptates dignissimos dolore debitis soluta similique voluptas corrupti nemo, iusto tempore incidunt culpa amet ipsam natus atque aliquid error ad eaque impedit neque. Nisi?</p>
                    </div>
                </InnerContainer>
            </section>
        // </LandingLayout>
    )
}
