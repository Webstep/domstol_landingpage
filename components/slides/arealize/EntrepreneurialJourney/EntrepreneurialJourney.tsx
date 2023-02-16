import React, { useContext, useEffect } from 'react';
import styles from './EntrepreneurialJourney.module.scss'
import Image from 'next/image';
import { Title, Text } from '../../../common/Typography';
import Citation from '../../../common/Citation';
import { motion, useAnimationControls } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import useOneTimeSwitch from '../../../../hooks/oneTimeSwitch';
import { DeviceContext } from '../../../common/Device';

const EntrepreneurialJourney = () => {
    const { inView, ref } = useInView();
    const startAnimation = useOneTimeSwitch(inView);
    const controls = useAnimationControls()
    const { isMobile } = useContext(DeviceContext);

    useEffect(() => {
        if (startAnimation) {
            controls.start({
                width: '100vw',
                transition: {
                    duration: 3,
                }
            })
        }
    }, [startAnimation, controls]);

    return (
        <div className={styles.background}>
            <section className={styles.section}>
                <div className={styles.container}>

                    {!isMobile && <Image src={'/assets/arealize/images/entrepreneurial.png'}
                        alt="Idémyldring"
                        width={607}
                        height={443}
                        style={{ objectFit: 'cover' }}
                        className={styles.image}
                    />}

                    <div className={styles.description}>

                        <Title>GRÜNDERREISEN</Title>

                        <Text>
                            Å starte en bedrift er en reise. Selv om visjonen er tydelig nok, er det alltid ting som dukker opp underveis. Også her har Webstep vært viktig for Arealize.
                        </Text>
                        <Citation quote={'Vi hadde en del usikkerhet rundt robustheten og sikkerheten til programvaren, men manglet seniorkompetanse for å sjekke dette ut. Her kom Webstep inn og sikret at vi gjorde ting 100% riktig fra starten av.'} quoteType="long" name="Yanislav Zagorov" occupation='Arealize CTO' />
                    </div>
                </div>
            </section>
            <motion.div initial={{ width: 0 }} className={styles.rocket} animate={controls} ref={ref}>
            </motion.div>
        </div>
    );
};

export default EntrepreneurialJourney;