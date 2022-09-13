import React, { useEffect, useMemo, useRef, useState } from 'react'
import styles from './Video.module.scss'

interface ProgressBarProps {
    duration: number | undefined,
    progress: number,
    onClick: (newProgress: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ duration, progress, onClick }) => {
    const [buttonWidth, setButtonWidth] = useState<number>(0)
    const buttonRef = useRef<HTMLButtonElement>(null)

    const progressClick = (e: { nativeEvent: { offsetX: number } }) => {
        const click = (e.nativeEvent.offsetX / buttonWidth) * 100
        if (!duration) return;

        const newProgress = (duration / 100) * click
        onClick(newProgress)
    }

    useEffect(() => {
        setButtonWidth(buttonRef?.current?.clientWidth || 100);
    }, []);

    const progressBarWidth = duration ? (progress / duration * 100) : 0 + '%'

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
    Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2) : "00:00"
