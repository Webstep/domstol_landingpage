import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import ProgressBar from '../Video/ProgressBar'
import styles from './PopupVideo.module.scss'
import Image from 'next/image';
import PlayIcon from '../../../public/icons/play.svg';
import PauseIcon from '../../../public/icons/pause.svg';
import MuteIcon from '../../../public/icons/mute.svg';
import SoundIcon from '../../../public/icons/sound.svg';

interface VideoProps {
    src: string
    autoplay: boolean
}

const PopupVideo: React.FC<VideoProps> = (props) => {
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

    const toggleSound = () => {
        setIsSound(!isSound);
        if (videoRef.current !== null) {
            videoRef.current.muted = isSound
        };
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
    }, [inView, buttonWidth, duration])


    const formattedDuration = useMemo(() => formatTime(duration), [duration])

    const progressClick = (e: { nativeEvent: { offsetX: number } }) => {
        const click = (e.nativeEvent.offsetX / buttonWidth) * 100
        const progressTime = (duration / 100) * click
        if (videoRef.current !== null) { setProgress(progressTime); videoRef.current.currentTime = progressTime; videoRef.current.play; }
    }

    return (
        <div ref={ref}>
            {inView &&
                <div className={styles.container}>
                    <video onClick={() => { isPlaying ? pause() : play(); }} src={props.src} ref={videoRef} autoPlay={props.autoplay} disablePictureInPicture muted={props.autoplay} />
                    <div className={styles.controls}>
                        <div className={styles.buttonGroup}>
                            <button
                                onClick={toggleSound}
                                className={styles.soundButton}
                            >
                                <Image
                                    alt="sound on/off"
                                    src={isSound ? SoundIcon : MuteIcon}
                                />
                            </button>
                            <button
                                className={styles.playButton}
                                onClick={() => (isPlaying ? pause() : play())}
                            >
                                <Image
                                    alt="play/pause"
                                    src={isPlaying ? PauseIcon : PlayIcon}
                                />
                            </button>
                        </div>
                        <div className={styles.timeControl}>
                            <span>{formatTime(currentTime)}</span>
                            <button ref={buttonRef} onClick={(e) => progressClick(e)}><ProgressBar progress={progress} /></button>
                            <span>{formattedDuration}</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default PopupVideo

const formatTime = (time: number) => Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)

