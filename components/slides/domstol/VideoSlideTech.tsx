import React from 'react';
import Citation from '../../common/Citation';
import VideoSlide from './VideoSlide';
import styles from './VideoSlide/VideoSlide.module.scss';

const VideoSlideTech = () => {
    return (
        <>
            <VideoSlide src={require('../../../public/videos/Webstep_DA_intervju_teknisk_1208x1920_v01.mp4')} center={0.3}>
            <div className={styles.article}>
                    <q>– Webstep kom inn i prosjektet på et helt nytt fagfelt for alle involverte. DA har lagt godt til rette for oss og var klare over at vi ikke kunne så mye fra før. Det gode samarbeidet mellom DA og Webstep har vært avgjørende for dette prosjektet. </q>
                    <p className={styles.bold}>Calle Bøkestad</p>
                    <p className={styles.workPosition}>Systemutvikler, Webstep</p>
                    <p>Oppdraget har blitt langt mer enn timeleveranser dag for dag, for en og en konsulent, uke inn og uke ut. Dette er fellesskap, samarbeid og nybrottsarbeid.</p>
                    <q>– Og dette er ikke et hvilket som helst prosjekt. Vi har tatt med oss en kultur og et mindset, åpent for nye løsninger, innovativ tenkning og fravær av fastlåste tanker og forhåndsdefinerte svar.</q>
                    <p className={styles.ending}>Ønsker du mer teknisk info? Se Carl forklare i videoen til venstre!</p>
            </div> 
        </VideoSlide>
        </>
    );
};

export default VideoSlideTech;
