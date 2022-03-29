import React, { useEffect, useMemo, useRef, useState } from 'react'
import styles from './Video.module.scss'

interface VideoProps {
    src: string
}

const Video: React.FC<VideoProps> = ({ src }) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [duration, setDuration] = useState<number>(0)
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [progress, setProgress] = useState(0)

    const play = () => {
        setIsPlaying(true)
        videoRef?.current?.play()
    }

    const pause = () => {
        setIsPlaying(false)
        videoRef?.current?.pause()
    }

    useEffect(() => {
        setDuration(videoRef.current?.duration ?? 0)

        const incrementTime = () => {
            const time = videoRef.current?.currentTime ?? 0
            setCurrentTime(time)
            setProgress((time / duration) * 100)
        }

        const intervall = setInterval(incrementTime, 1000)

        return () => {
            clearInterval(intervall)
        }
    }, [])

    const formattedDuration = useMemo(() => formatTime(duration), [duration])

    const statusbarProgress = progress + '%'

    return (
        <div className={styles.container}>
            <video src={src} ref={videoRef} />
            <div className={styles.controls}>
                <button
                    onClick={() => (isPlaying ? pause() : play())}
                    className={styles.controlsIcon}
                >
                    <img
                        alt="pause"
                        src={isPlaying ? '/pause.svg' : '/play.svg'}
                    />
                </button>
                <div className={styles.timeControl}>
                    <span>{formatTime(currentTime)}</span>
                    <div>
                        <div
                            style={{ width: statusbarProgress }}
                            className={styles.progressBar}
                        ></div>
                    </div>
                    <span>{formattedDuration}</span>
                </div>
            </div>
        </div>
    )
}

export default Video

const formatTime = (time: number) =>
    Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
