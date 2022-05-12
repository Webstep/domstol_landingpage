import { filterProps } from 'framer-motion'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import ProgressBar from './ProgressBar'
import styles from './Video.module.scss'

interface VideoProps {
    src: string
    //autoplay: boolean
}

const Video: React.FC<VideoProps> = (props) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(true)
    const [isSound, setIsSound] = useState<boolean>(false)
    const [duration, setDuration] = useState<number>(0)
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [progress, setProgress] = useState<number>(0)
    const [ref, inView] = useInView();

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
        setDuration(videoRef.current?.duration || 71);
        setIsSound(false);

        const incrementTime = () => {
            const time = videoRef.current?.currentTime ?? 0
            setCurrentTime(time)
            setProgress((time / duration) * 100)
        }

        const intervall = setInterval(incrementTime, 1000)

        return () => {
            clearInterval(intervall)
        }
    }, [inView])


    const formattedDuration = useMemo(() => formatTime(duration), [duration])

    const progressClick = (e: { nativeEvent: { offsetX: number } }) => {
        //setProgress((e.nativeEvent.offsetX  / duration) * 100)
        //const progressTime = (e.nativeEvent.offsetX / progress) * duration
        const progressTime = e.nativeEvent.offsetX *(duration / 100)
        console.log(e.nativeEvent.offsetX)
        console.log(progressTime)
        console.log(progress)
        //setProgress((progressTime / duration) * 100)
        if (videoRef.current != null) { videoRef.current.currentTime = progressTime; videoRef.current.play; }
        //setProgress(progressTime)
        //setCurrentTime(progressTime)
        //if (videoRef.current != null) { videoRef.current.currentTime = progressTime; videoRef.current.play; }
    }

    return (
        <div ref={ref}>
            {inView &&
                <div className={styles.container}>
                    <video onClick={() => { isPlaying ? pause() : play(); }} src={props.src} ref={videoRef} autoPlay disablePictureInPicture muted />
                    {isPlaying ?
                        <div className={styles.controls}>
                            <button
                                onClick={() => { setIsSound(!isSound); if(videoRef.current != null){ videoRef.current.muted = isSound }; }}
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
                                <button onClick={(e)=>progressClick(e)}><ProgressBar progress={progress}/></button>
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

