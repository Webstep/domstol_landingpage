import React from 'react';
import styles from './Collaboration.module.scss';
import Image from 'next/image'
import BrigittAndHerman from '../../../../public/assets/domstol/images/BrigittAndHerman_horizontal.jpg';
import Text from '../../../common/Text';

const Collaboration: React.VFC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.imageContainer}>
                <Image
                    src={BrigittAndHerman}
                    width={463}
                    height={309}
                    alt="Brigitt og Herman i dialog"
                />
                <video width={574} height={327} loop muted autoPlay>
                    <source src="/assets/domstol/videos/Courtroom_loop_16x9.mp4" type="video/mp4" />
                </video>

            </div>
            <div className={styles.description}>
                <div>
                    <h2>webstep og domstolene</h2>
                    <Text>
                        DA drømmer om de beste løsningene for brukerne sine. Vi leverer team for å lage disse løsningene. Samarbeidet er tett og godt.
                    </Text>
                </div>
                <blockquote>
                    – Nytteverdien til løsningen er en mer effektiv arbeidsdag og arbeidsflyt for alle de som bruker systemet i hverdagen. Det er alt fra advokater og saksbehandlere, til oss utviklere som jobber med å forbedre koden.

                    <span className={styles.signature}>
                        <span>
                            Brigitt Bright
                        </span>
                        Systemutvikler, Webstep

                    </span>

                </blockquote>

                <Text isOverlay>
                    Domstolene er en massiv konfliktløser i det norske samfunnet. En strøm av skyld og uskyld, rett og galt strømmer gjennom.  Det gir mening å bygge så viktige systemer for en stolt og offensiv oppdragsgiver som domstoladministrasjonen. Da blir jobben som å bygge en katedral, i motsetning til å hugge stein.
                </Text>
            </div>

        </section>
    );
};

export default Collaboration;
