import type { NextPage } from 'next'
import styles from '../styles/Test.module.scss'
import Citation from '../components/common/Citation'
import '../styles/Citation.module.scss'
import PixelatedMan from '../components/common/PixelatedMan'

const Test: NextPage = () => {
    return (
        <div className={styles.background}>
            <div></div>
            <h1>hello</h1>
            <p>this is pixel</p>
            <Citation title={'verdi'} name={'Karen Hompland'} quote={'hei dette er min quote som jeg er veldig stolt av'}></Citation>
            <PixelatedMan></PixelatedMan>
        </div>

    )
}

export default Test
