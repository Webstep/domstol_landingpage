import React, { useMemo, useRef } from 'react'
import styles from './Video.module.scss'

interface ProgressBarProps {
    duration: number | undefined,
    progress: number,
    onClick: (newProgress: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ duration, progress, onClick }) => {
    const buttonRef = useRef<HTMLButtonElement>(null)

    const progressClick = (e: { nativeEvent: { offsetX: number } }) => {
        if (!duration) return;

        const buttonWidth = buttonRef.current?.clientWidth
        if (!buttonWidth) return;

        const progressPercentage = (e.nativeEvent.offsetX / buttonWidth) * 100
        const newProgress = (duration / 100) * progressPercentage
        onClick(newProgress)
    }

    const progressBarWidth = String(duration ? (progress / duration * 100) : 0) + "%"

    const formattedDuration = useMemo(() => formatTime(duration), [duration])

    return (
        <div className={styles.timeControl}>
            <span>{formatTime(progress)}</span>

            <button ref={buttonRef} onClick={(e) => progressClick(e)}>
                <div className={styles.progressBarContainer}>
                    <div
                        className={styles.progressBar}
                        style={{ width: progressBarWidth }}
                    />
                </div>
            </button>
            <span>{formattedDuration}</span>
        </div>
    )
}

export default ProgressBar

const formatTime = (time: number | undefined): string => time ?
    Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2) : "0:00"
