import { motion, Variants } from 'framer-motion';
import styles from './SeniorHelp.module.scss';
import Image from 'next/image'
import { Title, Text } from '../../../common/Typography';
import { useContext } from 'react';
import { DeviceContext } from '../../../common/Device';

export const AboutArve = () => {
    const { isMobile } = useContext(DeviceContext)

    return (
        <div className={styles.container}>
            <motion.div
                className={styles.singleImageContainer}
                initial={isMobile ? {} : { x: -100, y: 50, opacity: 0, zIndex: 999 }}
                whileInView={isMobile ? {} : { x: 0, y: 0, opacity: 1, transition: { duration: 1 } }}
                exit={isMobile ? {} : { x: 50, y: -100, opacity: 0, transition: { duration: 1 } }}
                viewport={{ once: true }}
            >
                <Image
                    src="/assets/arealize/images/arve.png"
                    width={618}
                    height={599}
                    alt="Arve"
                />
            </motion.div>

            <motion.div
                className={styles.description}
                initial={isMobile ? {} : { x: 100, y: 50, opacity: 0 }}
                whileInView={isMobile ? {} : { x: 0, y: 0, opacity: 1, transition: { duration: 1 } }}
                exit={isMobile ? {} : { x: 100, y: 50, opacity: 0, transition: { duration: 1 } }}
                viewport={{ once: true }}
            >
                <Title>Seniorhjelp</Title>
                <Text>
                    Arve har Master of Computer Science fra NTNU, med spesialisering innen kunstig intelligens. Han har omfattende erfaring som arkitekt og har drevet utrettelig kompetansebygging på sine fagområder.
                </Text>
                <Text>
                    Arve har stått for arkitekturen på flere forretningskritiske systemer for anerkjente selskaper som Aker BP,  Enova, Trønderenergi og Telenor Digital, blant annet på tjenester for overvåkning og styring av strømnettet og varslingssystemer innen betalingsløsninger. Han har også jobbet med arkitektur, infrastruktur og integrering både for store selskapet og oppstartsselskaper som Arealize, Spiff og Stready.
                </Text>
                <Text>
                    Som arkitekt  og utvikler har Arve nylig gjennomført en større leveranse for Enova. Her har han hatt ansvar for for design og utvikling av Enovas nye digitale og skybaserte forretningsplattform, Plattform 42 - en verktøykasse for digitalisering innen energi og klima.
                </Text>
                <a className={styles.link} href='https://www.webstep.no/arve-nygard/'>
                    Les mer om Arve her
                </a>
            </motion.div>
        </div>
    );
}
