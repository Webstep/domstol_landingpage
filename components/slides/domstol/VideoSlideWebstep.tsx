import React from 'react';
import Citation from '../../common/Citation';
import VideoSlide from './VideoSlide';
import styles from './VideoSlide/VideoSlide.module.scss';

const VideoSlideWebstep = () => {
    return (
        <>
            <VideoSlide src={require('../../../public/videos/Webstep_DA_intervju_Webstep_1208x1920_v01.mp4')} center={0.25} >
            <div className={styles.citation}>
                <Citation title={"Nytteverdi"} name={"Carl Bøkestad "} quote={"Vi har fått lov til å være med å utvikle den teknologien som kommer til å ligge foran oss i mange år"}/>
            </div> 
        </VideoSlide>
        </>
    );
};

export default VideoSlideWebstep;
