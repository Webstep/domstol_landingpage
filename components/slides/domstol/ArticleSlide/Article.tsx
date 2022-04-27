import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-hook-inview';
import styles from './Article.module.scss';

interface ArticleProps {
    image: string;
}

const Article: React.FC<ArticleProps> = ({ }) => {
    const [height, setHeight] = useState<number>(500);
    const [ref, inView] = useInView();

    useEffect(() => {
        setHeight(window.innerHeight);
    });

    return (
        <>
            <section ref={ref}>
                {inView && 
                <div className={styles.container}>
                    <motion.div
                        className={styles.image}
                        initial={{ y: -height/3, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                            transition={{ y: { duration: 1 }, opacity: { duration: 2 } }}
                        viewport={{ once: false }}>
                        <img src={"/images/samfunnsansvar.jpg"}/>
                    </motion.div>
                    <div className={styles.text}>
                        <motion.div
                            initial={{ y: -height/4, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ y:{duration: 1}, opacity:{duration:2} }}
                            viewport={{ once: false }}>
                            <h1 className={styles.heading}>
                                TRENGER VIKTIG KOMPETANSE FRA WEBSTEP
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ y: height/4, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                                transition={{ y: { duration: 1 }, opacity: { duration: 2 } }}
                            viewport={{ once: false }}>
                            <div className={styles.description}>
                                <p>Dagens DA-løsning er en hybridløsning, dels systemstøtte, dels manuelle operasjoner. Ting tar tid fra beslutning til resultat. Men hvordan skulle de løse de teknologiske problemene? Herman har svaret:
                                    <br />
                                    <br />
                                    -  Vi trengte bred digital kompetanse, og vi hadde behov for de beste. Webstep har vist oss at de både har kompetansen og kapasiteten til å hjelpe oss på denne veien.
                                </p>
                                <p>
                                    Dette er en stor og spennende oppgave, og Webstep bygger sterke software-team for å nå hårete DA-mål. Som nå er blitt våre.
                                    <br />
                                    <br />
                                    -  Alle som kommer inn døra her ønsker å levere på samfunns- oppdraget vårt.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>}

            </section>

        </>
    );
};

export default Article;
