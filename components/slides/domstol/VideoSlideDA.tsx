import React from 'react';
import Citation from '../../common/Citation';
import VideoSlide from './VideoSlide';
import styles from './VideoSlide/VideoSlide.module.scss';

const VideoSlideDA = () => {
    return (
        <>
        <VideoSlide src={require('../../../public/videos/Webstep_DA_intervju_DA_1208x1920_v01.mp4')} center={0.2}>
            <div className={styles.citation}>
                <Citation title={"Det digitale skiftet"} name={"Herman Seip"} quote={"Vi skal være best i verden!"} />
            </div> 
        </VideoSlide>
        </>
    );
};

export default VideoSlideDA;
