import React from 'react';
import Citation from '../../common/Citation';
import VideoSlide from './VideoSlide';
import styles from './VideoSlide/VideoSlide.module.scss';

const VideoSlideDA = () => {
    return (
        <>
        <VideoSlide src={require('../../../public/videos/Webstep_DA_intervju_DA_1208x1920_v03.mp4')} autoplay={true}/>
        </>
    );
};

export default VideoSlideDA;
