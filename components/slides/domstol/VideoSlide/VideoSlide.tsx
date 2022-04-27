import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Video from '../../../common/Video';
import styles from './VideoSlide.module.scss';

interface VideoSlideProps {
    src: string;
    center: number;
    //autoplay: boolean
}

const VideoSlide: React.FC<VideoSlideProps> = (props) => {
    const [height, setHeight] = useState<number>(500);
    const [textHeight, setTextHeight] = useState<number>(50);

    useEffect(() => {
        setHeight(window.innerHeight-100)
        setTextHeight((window.innerHeight / 2) - window.innerHeight*props.center);
    })


    return (
        <>
            <section>
                <div className={styles.container}>
                    <div className={styles.video}>
                        <motion.div
                            initial={{ y: height }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: false }}
                        >
                        <Video src={props.src}></Video>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ y: height }}
                        whileInView={{ y: textHeight }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                    >
                    {props.children}
                    </motion.div>
                    </div>
            </section>
        </>
    );
};

export default VideoSlide;
