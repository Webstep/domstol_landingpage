import React, { useEffect, useMemo, useRef, useState } from 'react'
import ProgressBar from './ProgressBar'
import styles from './Video.module.scss'
import Image from 'next/image';
import PlayIcon from '../../../public/icons/play.svg';
import PauseIcon from '../../../public/icons/pause.svg';
import MuteIcon from '../../../public/icons/mute.svg';
import SoundIcon from '../../../public/icons/sound.svg';

interface VideoProps {
    src: string
    autoplay: boolean
}

const Video: React.FC<VideoProps> = (props) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(props.autoplay)
    const [isSound, setIsSound] = useState<boolean>(!props.autoplay)
    const [duration, setDuration] = useState<number>()
    const [currentTime, setCurrentTime] = useState<number>(0)

    const play = () => {
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
        const incrementTime = () => {
            const time = videoRef.current?.currentTime ?? 0
            setCurrentTime(time)
        }

        const intervall = setInterval(incrementTime, 1000)

        return () => {
            clearInterval(intervall)
        }
    }, [duration])

    const jumpToTime = (newTime: number) => {
        if (videoRef.current !== null) {
            videoRef.current.currentTime = newTime;
            videoRef.current.play;
            setCurrentTime(newTime)
        }
    }

    return (
        <div className={styles.container}>
            <video
                onClick={() => { isPlaying ? pause() : play(); }}
                src={props.src} ref={videoRef} autoPlay={props.autoplay} disablePictureInPicture
                muted={props.autoplay}
                onLoadedMetadata={() => setDuration(videoRef.current?.duration)}

            />
            <div className={styles.controls}>
                <div className={styles.buttonGroup}>
                    <button
                        className={styles.playButton}
                        onClick={() => (isPlaying ? pause() : play())}
                    >
                        <Image
                            alt="play/pause"
                            src={isPlaying ? PauseIcon : PlayIcon}
                        />
                    </button>
                    <button
                        onClick={toggleSound}
                        className={styles.soundButton}
                    >
                        <Image
                            alt="sound on/off"
                            src={isSound ? SoundIcon : MuteIcon}
                        />
                    </button>
                </div>
                <ProgressBar duration={duration} progress={currentTime} onClick={jumpToTime} />
            </div>
        </div>
    )
}

export default Video


