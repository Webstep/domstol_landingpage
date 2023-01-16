import React from 'react';
import styles from './EntrepreneurialJourney.module.scss'
import Image from 'next/image';
import { Title, Text } from '../../../common/Typography';
import Citation from '../../../common/Citation';
import { motion } from 'framer-motion';

const EntrepreneurialJourney = () => {
    return (
        <div className={styles.background}>
            <section className={styles.section}>
                <div className={styles.container}>

                    <Image src={'/assets/arealize/images/entrepreneurial.png'}
                        alt="Idémyldring"
                        width={607}
                        height={443}
                        objectFit="cover"
                        className={styles.image}
                    />

                    <div className={styles.description}>

                        <Title>GRÜNDERREISEN</Title>

                        <Text>
                            Vi hadde en del usikkerhet rundt robustheten og sikkerheten til programvaren, men som vi manglet seniorkompetanse for å få til. Her kom Webstep inn og forsikret oss om at vi gjorde ting 100% riktig fra starten av
                        </Text>
                        <Citation quote={'Vi hadde en del usikkerhet rundt robustheten og sikkerheten til programvaren, men som vi manglet seniorkompetanse for å få til. Her kom Webstep inn og forsikret oss om at vi gjorde ting 100% riktig fra starten av'} quoteType="long" name="Yanislav Zagorov" occupation='CTO i Arealize' />
                    </div>
                </div>
            </section>
            <motion.div initial={{ width: 0 }} whileInView={{ width: "100vw", transition: { duration: 3, } }} className={styles.rocket}>
            </motion.div>
        </div>
    );
};

export default EntrepreneurialJourney;