import { useState } from 'react'
import { Title } from '../../../common/Typography'
import ProgressBar from '../../../common/VideoSlide/ProgressBar'
import ArticleCard from './ArticleCard'
import styles from './ReadMore.module.scss'

const ReadMore = () => {
    const [currentEmployee, setCurrentEmployee] = useState<number>(0)

    return (
        <section className={styles.section}>
            <Title>VIL DU LSESE MER?</Title>
            <div className={styles.container}>
                <ArticleCard
                    title="Seniorhjelp"
                    description="Seniorhjelp er en tjeneste"
                    image="/assets/arealize/images/arve.png"
                    link="https://www.seniorhjelp.no/"
                />
            </div>
            {/* <ProgressBar progress={currentEmployee} size={EmployeeData.length} onClick={(value) => setCurrentEmployee(value)} /> */}
        </section>
    )
}

export default ReadMore
