import React from 'react';
import Citation from '../../common/Citation';
import VideoSlide from './VideoSlide';
import styles from './VideoSlide/VideoSlide.module.scss';

const VideoSlideTech = () => {
    return (
        <>
            <VideoSlide src={require('../../../public/videos/Webstep_DA_intervju_teknisk_1208x1920_v02.mp4')} autoplay={false} />
        </>
    );
};

export default VideoSlideTech;
