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
        </section>
    );
};

export default SeniorHelp;