import React, { useEffect, useRef, useState, useCallback } from 'react'
import ProgressBar from './ProgressBar'
import styles from './Video.module.scss'
import Image from 'next/image';
import PlayIcon from '../../../public/icons/play.svg';
import PauseIcon from '../../../public/icons/pause.svg';
import MuteIcon from '../../../public/icons/mute.svg';
import SoundIcon from '../../../public/icons/sound.svg';
import { useInView } from 'react-intersection-observer';
import useOneTimeSwitch from '../../../hooks/oneTimeSwitch';

interface VideoProps {
    src: string
    autoplay: boolean
    landscape?: boolean
}

const Video: React.FC<VideoProps> = ({ src, autoplay, landscape }) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(autoplay)
    const [hasSound, setHasSound] = useState<boolean>(!autoplay)
    const [duration, setDuration] = useState<number>()
    const [currentTime, setCurrentTime] = useState<number>(0)
    const { ref: containerRef, inView } = useInView()
    const inViewForFirstTime = useOneTimeSwitch(inView)

    const play = useCallback(() => {
        videoRef?.current?.play()
        setIsPlaying(true)
    }, [])

    const pause = useCallback(() => {
        setIsPlaying(false)
        videoRef?.current?.pause()
    }, [])

    useEffect(() => {
        if (inViewForFirstTime && autoplay) {
            play()
        }
    }, [inViewForFirstTime, autoplay, play]);

    useEffect(() => {
        if (!inView) {
            pause()
        }
    }, [pause, inView]);

    const toggleSound = useCallback(() => {
        setHasSound((hasSound) => {
            if (videoRef.current !== null) {
                videoRef.current.muted = hasSound
            }
            return !hasSound
        })
    }, [])

    useEffect(() => {
        if (!isPlaying) return;

        const incrementTime = () => {
            const time = videoRef.current?.currentTime ?? 0
            setCurrentTime(time)
        }

        const intervall = setInterval(incrementTime, 1000)

        return () => {
            clearInterval(intervall)
        }
    }, [isPlaying])

    const jumpToTime = useCallback((newTime: number) => {
        if (videoRef.current !== null) {
            videoRef.current.currentTime = newTime;
            videoRef.current.play;
            setCurrentTime(newTime)
        }
    }, [])

    const onClick = useCallback((e: any) => {
        e.stopPropagation()
        isPlaying ? pause() : play()
    }, [isPlaying, pause, play])

    return (
        <div className={styles.container} ref={containerRef}>
            <video
                onClick={onClick}
                src={src}
                ref={videoRef}
                autoPlay={autoplay}
                playsInline
                disablePictureInPicture
                muted={autoplay}
                onLoadedMetadata={() => setDuration(videoRef.current?.duration)}
                data-landscape={landscape}
            />
            <div className={styles.controls}>
                <div className={styles.buttonGroup}>
                    <button
                        className={styles.playButton}
                        onClick={onClick}
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
                            src={hasSound ? SoundIcon : MuteIcon}
                        />
                    </button>
                </div>
                <ProgressBar duration={duration} progress={currentTime} onClick={jumpToTime} />
            </div>
        </div>
    )
}

export default Video
