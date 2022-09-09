import React from 'react';
import Citation from '../../common/Citation';
import VideoSlide from './VideoSlide';
import styles from './VideoSlide/VideoSlide.module.scss';

const VideoSlideWebstep = () => {
    return (
        <>
            <VideoSlide src={require('../../../public/assets/domstol/videos/Webstep_DA_intervju_Webstep_1208x1920_v03.mp4')} autoplay={true} />
        </>
    );
};

export default VideoSlideWebstep;
