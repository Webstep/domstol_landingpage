import React from 'react';
import Citation from '../../common/Citation';
import VideoSlide from './VideoSlide';
import styles from './VideoSlide/VideoSlide.module.scss';

const VideoSlideWebstep = () => {
    return (
        <>
            <VideoSlide src={require('../../../public/videos/Webstep_DA_intervju_Webstep_1208x1920_v03.mp4')} autoplay={true} center={0.25} >
            <div className={styles.citation}>
                    <Citation name={"Carl Bøkestad "} quote={"Vi har fått lov til å være med å utvikle den teknologien som kommer til å ligge foran oss i mange år"} quoteType={"long"} position={"Systemutvikler, Webstep"}/>
            </div> 
        </VideoSlide>
        </>
    );
};

export default VideoSlideWebstep;
