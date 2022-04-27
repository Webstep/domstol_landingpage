import { filterProps } from 'framer-motion';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Citation from '../../../common/Citation';
import Video from '../../../common/Video';
import styles from './VideoSlide.module.scss';

interface VideoSlideProps {
    src: string;
    //autoplay: boolean
}

const VideoSlide: React.FC<VideoSlideProps> = (props) => {
    const { ref, inView, entry } = useInView();


    return (
        <>
            <section ref={ref}>
                {inView && (<div className={styles.container}>

                    <div className={styles.video}>
                        <Video src={props.src}></Video>
                    </div>
                    {props.children}
                </div>)}
            </section>
        </>
    );
};

export default VideoSlide;
