import React from 'react'
import ArrowButton, { Direction } from '../../../common/ArrowButton'
import styles from './Introduction.module.scss'

const DomstolIntroduction = () => {
    return (
        <section className={styles.container}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="clip">
                        <path
                            // clipPathUnits="objectBoundingBox"
                            d="M 0 0 L 0 273 L 129 273 C 129 273 212 268 233 376 L 275 516 L 300 374 C 325 248 466 245 488 362 L 531 516 L 574 313 C 579 284 593 281 609 282 L 653 283 C 668 283 682 286 673 314 L 613 581 C 589 691 475 691 451 593 L 398 388 L 359 593 C 341 693 226 698 200 600 L 132 372 C 127 355 120 354 105 354 L 0 354 L 0 819 L 1407 819 L 1407 0 L 0 0"
                        />
                    </clipPath>
                </defs>
            </svg>
            <div className={styles.overlay}>
                {/* <div className={styles.logo} /> */}
                <div className={styles.information}>
                    <img src="/assets/domstol/weight.svg" alt="" />
                    <h1>
                        DIGITALISERING <br /> AV DOMSTOLENE
                    </h1>
                    <p>
                        Maktfordelingsprinsippet og de norske domstolenes
                        uavhengighet er som stoffet din og min frihet er laget
                        av. I flere europeiske land er Domstolenes uavhengighet
                        truet. I Norge er uavhengigheten sterk og tilliten høy.
                        Og den øker år for år. Det skal vi være glad for. Men
                        tilliten til domstolene kommer med med et like stort
                        ansvar.
                    </p>
                    <div className={styles.scrollDown}>
                        <span>Scroll</span>
                        <ArrowButton
                            direction={Direction.Down}
                            onClick={() => {}}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.tintedBackground} />
            <div className={styles.videoContainer}>
                <video
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    autoPlay
                    muted
                ></video>
            </div>
        </section>
    )
}

export default DomstolIntroduction
