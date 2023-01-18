import { motion, Variants } from 'framer-motion';
import styles from './SeniorHelp.module.scss';
import Image from 'next/image'
import { Title, Text } from '../../../common/Typography';
import { useContext } from 'react';
import { DeviceContext } from '../../../common/Device';

const containerVariants: Variants = {
    initial: { x: 100, y: 50, opacity: 0 },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
        }
    },
    exit: {
        x: 100,
        y: 50,
        opacity: 0,
        transition: {
            duration: 1,
        }
    }
}

const imageVariants: Variants = {
    initial: {
        y: -100,
        x: 50,
        opacity: 0,
        zIndex: 999
    },
    animate: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    },
    exit: {
        y: -100, x: 50, opacity: 0,
        transition: { duration: 1 }
    }
}

export const AboutArve = () => {
    const { isMobile } = useContext(DeviceContext)

    return (
        <div className={styles.container}>
            <motion.div className={styles.singleImageContainer} {...(!isMobile ? imageVariants : {})}>
                <Image
                    src="/assets/arealize/images/arve.png"
                    width={618}
                    height={599}
                    alt="Arve"
                />
            </motion.div>

            <motion.div className={styles.description} {...(!isMobile ? containerVariants : {})}>
                <Title>Seniorhjelp</Title>
                <Text>
                    Arve har Master of Computer Science fra NTNU med spesialisering innen Kunstig Intelligens. Som arkitekt har Arve bygget seg opp en sterk erfaringsbase og drevet utrettelig med kompetansebygging innenfor faget.
                </Text>
                <Text>
                    Hos etablerte og anerkjente selskaper, som Enova, Trønderenergi og Telenor Digital, har han stått for arkitekturen av flere forretningskritiske systemer. Eksempelvis tjenester for overvåkning og styring av strømnettet og varslingssystemer og innen domenet betalingsløsninger. Han har jobbet med arkitektur, infrastruktur og integrering hos giganter som Telenor Digital, Trønderenergi og Aker BP, samt hos oppstartsselskap som Arealize, Spiff og Stready.
                </Text>
                <Text>
                    Arve har nylig gjennomført en større leveranse i rollen som arkitekt og utvikler for Enova. Her har Arve vært ansvarlig for å designet og utvikle Enovas nye digitale forretningsplattform, Plattform 42. Den skybaserte plattformen vil være en verktøykasse for digitalisering av energi- og klimavirkemidler.
                </Text>
                <a className={styles.link} href='https://www.webstep.no/arve-nygard/'>
                    Les mer om Arve her
                </a>
            </motion.div>
        </div>
    );
}
