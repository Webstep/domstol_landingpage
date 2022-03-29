import React from 'react'
import styles from './Video.module.scss'

interface ProgressBarProps {
    progress: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    const progressBarWidth = progress + '%'

    return (
        <>
            <div className={styles.progressBarContainer}>
                <div
                    className={styles.progressBar}
                    style={{ width: progressBarWidth }}
                />
            </div>
        </>
    )
}

export default ProgressBar
