import { motion, Variants } from 'framer-motion';
import { useContext } from 'react';
import { DeviceContext } from '../../../common/Device';
import styles from './SeniorHelp.module.scss';
import Image from 'next/image'
import { Title, Text } from '../../../common/Typography';
import Citation from '../../../common/Citation';
import { useInView } from 'react-intersection-observer';

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

const videoVariants: Variants = {
    initial: {
        y: 100,
        x: -50,
        opacity: 0,
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
        y: 100, x: -50, opacity: 0,
        transition: { duration: 1 }
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


const SeniorHelp = () => {
    const { isMobile } = useContext(DeviceContext)
    // the threshold is calculated of the elements height and padding
    // height + padding = 200vh. => threshold = 200vh * 0.25 = 50vh
    const { ref, inView: shouldChangeImage } = useInView({ threshold: 0.25 })


    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageContainer} data-animate={shouldChangeImage}>
                    <motion.div
                        className={styles.ellipse}
                        {...(!isMobile ? imageVariants : {})}
                    >
                        <Image
                            src={'/assets/arealize/ellipse.svg'}
                            width={125}
                            height={125}
                            alt={'Webstep'}
                        />
                    </motion.div>
                    <motion.div className={styles.imageRight} {...(!isMobile ? imageVariants : {})}>
                        <Image
                            src="/assets/arealize/images/seniorhelp.png"
                            width={463}
                            height={309}
                            alt="Yanislav peker på tavle"
                        />
                    </motion.div>
                    <motion.video width={574} height={327} loop muted autoPlay {...(!isMobile ? videoVariants : {})}>
                        <source src="/assets/arealize/videos/seniorhelp-loop.mov" type="video/mp4" />
                    </motion.video>

                </div>
                <motion.div className={styles.description} {...(!isMobile ? containerVariants : {})}>
                    <Title>Seniorhjelp</Title>
                    {isMobile &&
                        <Text isOverlay>
                            Som studenter kjente Arealize på at de trengte seniorrådgivning. Webstep er interessert i oppstartsbedrifter i Trondheim og fant fort ut at dette var en god match.
                        </Text>
                    }
                    {isMobile ?
                        <Citation
                            quote='De hjalp oss med produktene, utviklingen, og med å modne hele utviklingsprosessen raskere enn det vi kunne gjort selv. '
                            name='Yanislav Zagorov'
                            occupation='CTO i Arealize'
                        />
                        : <Citation
                            quote={'Vi som studenter kjente på at vi trengte seniorrådgivning. Webstep var interessert i oppstartsbedrifter i Trondheim og vi fant fort ut at vi matchet bra på kompetansen. De hjalp oss med produktene, utviklingen, og med å modne hele utviklingsprosessen raskere enn det vi kunne gjort selv.'}
                            name={'Yanislav Zagorov'}
                            occupation={'CTO i Arealize'}
                        />
                    }
                    <div ref={ref}>
                        <Text isOverlay>
                            Webstep har koblet Arealize opp mot flere ressurser i selskapet og i Trondheim generelt sett. Arealize var blant annet med på å lage case for et hackathon som Webstep var involvert i, og satte Arealize i kontakt med dyktige studenter fra NTNU.
                        </Text>
                    </div>
                </motion.div>
            </div>
            {!isMobile && <div className={styles.container}>
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
            </div>}
            <div className={styles.citation}>
                <motion.blockquote className={styles.blockquote}>
                    <motion.q className={styles.qoute}>
                        Webstep har satt oss i kontakt med verdifulle personer og vært med på å bygge kulturen innad i Arealize som et sted å vokse og lære
                    </motion.q>
                    <motion.footer className={styles.signature}>
                        <span className={styles.name}>Yanislav Zagorov,</span>
                        <span>CTO i Arealize</span>
                    </motion.footer>
                </motion.blockquote>
            </div>
        </section>
    );
};

export default SeniorHelp;