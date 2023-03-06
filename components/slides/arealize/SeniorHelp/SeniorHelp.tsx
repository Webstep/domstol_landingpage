import { motion } from 'framer-motion';
import { useContext } from 'react';
import { DeviceContext } from '../../../common/Device';
import styles from './SeniorHelp.module.scss';
import Image from 'next/image'
import { Title, Text } from '../../../common/Typography';
import Citation from '../../../common/Citation';
import { useInView } from 'react-intersection-observer';
import { AboutArve } from './AboutArve';
import { SeniorHelpCitation } from './SeniorHelpCitation';

const SeniorHelp = () => {
    const { isMobile } = useContext(DeviceContext)
    // the threshold is calculated of the elements height and padding
    // height + padding = 200vh. => threshold = 200vh * 0.25 = 50vh
    const { ref, inView: shouldChangeImage } = useInView({ threshold: 0.25 })

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageContainer} data-animate={shouldChangeImage}>
                    <div
                        className={styles.ellipse}
                    >
                        <motion.div
                            initial={isMobile ? {} : { height: 0, width: 0, rotate: 270, scale: 0.3 }}
                            whileInView={{ height: 125, width: 125, rotate: 0, scale: 1, transition: { duration: 1, delay: 1 } }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src={'/assets/arealize/ellipse.svg'}
                                width={125}
                                height={125}
                                alt={'Webstep'}
                            />
                        </motion.div>
                    </div>
                    <motion.div
                        className={styles.imageRight}
                        initial={isMobile ? {} : { y: -100, x: 50, opacity: 0, zIndex: 999 }}
                        whileInView={{ y: 0, x: 0, opacity: 1, transition: { duration: 1 } }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/assets/arealize/images/seniorhelp.png"
                            width={463}
                            height={309}
                            alt="Yanislav peker på tavle"
                        />
                    </motion.div>
                    <motion.video
                        width={574}
                        height={327}
                        loop
                        muted
                        autoPlay
                        initial={isMobile ? {} : { y: 100, x: -50, opacity: 0 }}
                        whileInView={{ y: 0, x: 0, opacity: 1, transition: { duration: 1 } }}
                        exit={{ y: 100, x: -50, opacity: 0, transition: { duration: 1 } }}
                        viewport={{ once: true }}
                    >
                        <source src="/assets/arealize/videos/seniorhelp-loop.mov" type="video/mp4" />
                    </motion.video>

                </div>
                <motion.div
                    className={styles.description}
                    initial={isMobile ? {} : { x: 100, y: 50, opacity: 0 }}
                    whileInView={{ x: 0, y: 0, opacity: 1, transition: { duration: 1 } }}
                    exit={{ x: 100, y: 50, opacity: 0, transition: { duration: 1 } }}
                    viewport={{ once: true }}
                >
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
                            occupation='Arealize CTO'
                        />
                        : <Citation
                            quote={'Som studenter trengte vi å jobbe sammen med flinke folk. Webstep var opptatt av oppstartsbedrifter i Trondheim og vi opplevde raskt riktig match. De hjalp oss med produktene, utviklingen og med å modne hele utviklingsprosessen raskere enn de vi kunne klart selv.'}
                            name={'Yanislav Zagorov'}
                            occupation={'Arealize CTO'}
                        />
                    }
                    <div ref={ref}>
                        <Text isOverlay>
                            Arealize har fått tilgang til flinke folk i Webstep og i Webstep sitt nettverk i Trondheim, ikke minst dyktige NTNU-studenter.
                        </Text>
                    </div>
                </motion.div>
            </div>
            {!isMobile && <AboutArve />}
            <SeniorHelpCitation />
        </section>
    );
};

export default SeniorHelp;