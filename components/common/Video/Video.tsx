import React, { useEffect, useMemo, useRef, useState } from 'react'
import ProgressBar from './ProgressBar'
import styles from './Video.module.scss'

interface VideoProps {
    src: string
    //autoplay: boolean
}

const Video: React.FC<VideoProps> = (props) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [duration, setDuration] = useState<number>(0)
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [progress, setProgress] = useState<number>(0)

    const play = () => {
        setDuration(videoRef.current?.duration || 1);
        videoRef?.current?.play()
        setIsPlaying(true)
    }

    const pause = () => {
        setIsPlaying(false)
        videoRef?.current?.pause()
    }


    useEffect(() => {
        setDuration(videoRef.current?.duration || 71);

        const incrementTime = () => {
            const time = videoRef.current?.currentTime ?? 0
            setCurrentTime(time)
            setProgress((time / duration) * 100)
        }

        const intervall = setInterval(incrementTime, 1000)

        /*if (props.autoplay) {
            play()
        }*/

        return () => {
            clearInterval(intervall)
        }
    })


    const formattedDuration = useMemo(() => formatTime(duration), [duration])

    return (
        <div className={styles.container}>
            <video onClick={() => (isPlaying ? pause() : play())} src={props.src} ref={videoRef} disablePictureInPicture />
            {isPlaying ?
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
                        <ProgressBar progress={progress} />
                        <span>{formattedDuration}</span>
                    </div>
                </div>
                :
                <button className={styles.playButton} onClick={() => play()}><img src="/play.svg" alt="play" /></button>
            }
        </div>
    )
}

export default Video

const formatTime = (time: number) => Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)

