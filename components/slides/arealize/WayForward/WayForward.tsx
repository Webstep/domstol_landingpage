import React from 'react';
import Citation from '../../../common/Citation';
import { Title, Text } from '../../../common/Typography';
import styles from './WayForward.module.scss';
import Image from 'next/image';

const WayForward = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <video className={styles.video}
                    autoPlay
                    loop
                    muted
                    src="/assets/arealize/videos/Arealize_loop2_1920x1080.mp4"
                />
                <div className={styles.description}>
                    <Title className={styles.title}>veien videre</Title>
                    <Text isOverlay>Fremtiden til Arealize ser lys ut. De er i full sving med brukertesting og vet hva neste steg i prosessen er.</Text>
                    <Citation quote="Akkurat nå har vi mye på gang. Vi har jobbet hardt og vi liker retningen vi går i. Så her er det bare å holde farten og fortsette med utviklingen!" name="Yanislav Zagorov" occupation='CTO i Arealize' />
                </div>

                <Image className={styles.image} src="/assets/arealize/images/way-forward.png" alt="Det jobbes hardt på Arealize kontoret"
                    width={462} height={289}
                />
            </div>
        </section>
    );
};

export default WayForward;