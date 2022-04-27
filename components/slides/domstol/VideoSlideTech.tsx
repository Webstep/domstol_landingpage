import React from 'react';
import Citation from '../../common/Citation';
import VideoSlide from './VideoSlide';
import styles from './VideoSlide/VideoSlide.module.scss';

const VideoSlideTech = () => {
    return (
        <>
        <VideoSlide src={require('../../../public/videos/Webstep_DA_intervju_teknisk_1208x1920_v01.mp4')}>
            <div className={styles.article}>
                    <i>– Webstep kom inn i prosjektet på et helt nytt fagfelt for alle involverte. DA har lagt godt til rette for oss og var klare over at vi ikke kunne så mye fra før. Det gode samarbeidet mellom DA og Webstep har vært avgjørende for dette prosjektet. </i>
                    <br />
                    <br />
                    <p className={styles.bold}>Calle Bøkestad</p>
                    <p className={styles.workPosition}>Systemutvikler, Webstep</p>
                    <br />
                    <p>Oppdraget har blitt langt mer enn timeleveranser dag for dag, for en og en konsulent, uke inn og uke ut. Dette er fellesskap, samarbeid og nybrottsarbeid.</p>
                    <br />
                    <i>– Og dette er ikke et hvilket som helst prosjekt. Vi har tatt med oss en kultur og et mindset, åpent for nye løsninger, innovativ tenkning og fravær av fastlåste tanker og forhåndsdefinerte svar.</i>
                    <br /><br /><br />
                    <p>Ønsker du mer teknisk info? Se Carl forklare <strong className={styles.bold}>her</strong></p>
            </div> 
        </VideoSlide>
        </>
    );
};

export default VideoSlideTech;
