import React from 'react';
import Citation from '../../../common/Citation';
import { Title, Text } from '../../../common/Typography';
import styles from './WayForward.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

const WayForward = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.video}
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
                    exit={{ x: -100, opacity: 0, transition: { duration: 1 } }}
                    viewport={{ once: true }}
                >
                    <video
                        autoPlay
                        loop
                        muted
                        src="/assets/arealize/videos/Arealize_loop2_1920x1080.mp4"
                    />
                </motion.div>
                <motion.div
                    className={styles.description}
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
                    exit={{ x: 100, opacity: 0, transition: { duration: 1 } }}
                    viewport={{ once: true }}
                >
                    <Title className={styles.title}>veien videre</Title>
                    <Text isOverlay>Fremtiden til Arealize ser lys ut. De er i full sving med brukertesting og vet hva neste steg i prosessen er.</Text>
                    <Citation quote="Akkurat nå har vi mye på gang. Vi har jobbet hardt og vi liker retningen vi går i. Så her er det bare å holde farten og fortsette med utviklingen!" name="Yanislav Zagorov" occupation='CTO i Arealize' />
                </motion.div>
                <motion.div
                    className={styles.image}
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
                    exit={{ x: 100, opacity: 0, transition: { duration: 1 } }}
                    viewport={{ once: true }}
                >
                    <Image src="/assets/arealize/images/way-forward.png" alt="Det jobbes hardt på Arealize kontoret"
                        width={462} height={289}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default WayForward;