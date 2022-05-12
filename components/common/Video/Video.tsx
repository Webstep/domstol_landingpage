import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import ProgressBar from './ProgressBar'
import styles from './Video.module.scss'

interface VideoProps {
    src: string
    autoplay: boolean
}

const Video: React.FC<VideoProps> = (props) => {
    const [ref, inView] = useInView();
    const buttonRef = useRef<HTMLButtonElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(props.autoplay)
    const [isSound, setIsSound] = useState<boolean>(!props.autoplay)
    const [duration, setDuration] = useState<number>(0)
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [progress, setProgress] = useState<number>(0)
    const [buttonWidth, setButtonWidth] = useState<number>(0)



    const play = () => {
        setDuration(videoRef.current?.duration || 1);
        videoRef?.current?.play()
        setIsPlaying(true)
    }

    const pause = () => {
        setIsPlaying(false)
        videoRef?.current?.pause()
    }

    const sound = () => {
        setIsSound(true)
    }

    const mute = () => {
        setIsSound(false)
    }


    useEffect(() => {
        setButtonWidth(buttonRef?.current?.clientWidth || 100);
        setDuration(videoRef.current?.duration || 71);

        const incrementTime = () => {
            const time = videoRef.current?.currentTime ?? 0
            setCurrentTime(time)
            setProgress((time / duration) * 100)
        }

        const intervall = setInterval(incrementTime, 1000)

        return () => {
            clearInterval(intervall)
        }
    }, [inView, buttonWidth])


    const formattedDuration = useMemo(() => formatTime(duration), [duration])

    const progressClick = (e: { nativeEvent: { offsetX: number } }) => {
        const click = (e.nativeEvent.offsetX /buttonWidth)* 100
        const progressTime = (duration/100) * click
        if (videoRef.current != null) { setProgress(progressTime); videoRef.current.currentTime = progressTime; videoRef.current.play; }
    }

    return (
        <div ref={ref}>
            {inView &&
                <div className={styles.container}>
                    <video onClick={() => { isPlaying ? pause() : play(); }} src={props.src} ref={videoRef} autoPlay={props.autoplay} disablePictureInPicture muted={props.autoplay}/>
                    {isPlaying ?
                        <div className={styles.controls}>
                            <button
                                onClick={() => { setIsSound(!isSound); if (videoRef.current != null) { videoRef.current.muted = isSound }; }}
                                className={styles.controlsIcon}
                            >
                                <img
                                    alt="Sound on/off"
                                    src={isSound ? '/sound.svg' : '/mute.svg'}
                                />

                            </button>
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
                                <button ref={buttonRef} onClick={(e) => progressClick(e)}><ProgressBar progress={progress} /></button>
                                <span>{formattedDuration}</span>
                            </div>
                        </div>
                        :
                        <button className={styles.playButton} onClick={() => play()}><img src="/play.svg" alt="play" /></button>
                    }
                </div>
            }
        </div>
    )
}

export default Video

const formatTime = (time: number) => Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)

