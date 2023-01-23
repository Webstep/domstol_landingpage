import React, { useRef, useState } from "react";
import { Title } from '../../../common/Typography'
import ArticleCard from './ArticleCard'
import styles from './ReadMore.module.scss'
import { articleData } from './ArticleData'
import ArrowButton, { Direction } from '../../../common/ArrowButton';
import DottedProgressBar from "../../../common/DottedProgressBar";
import * as ReactDOMServer from "react-dom/server";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";


const ReadMore = () => {
    const [currentCard, setCurrentCard] = useState<number>(1)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const [swiper, setSwiper] = useState<Swiper | null>(null)
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

    const slideTo = (index: number) => {
        swiper?.slideTo(index)
    }

    return (
        <section className={styles.section}>
            <Title className={styles.title}>VIL DU LSESE MER?</Title>
            <div className={styles.container}>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    // coverflowEffect={{
                    //     rotate: 50,
                    //     stretch: 0,
                    //     depth: 100,
                    //     modifier: 1,
                    //     slideShadows: true,
                    // }}
                    pagination={false}
                    modules={[EffectCoverflow, Navigation, Pagination]}
                    navigation={{
                        nextEl,
                        prevEl,
                    }}
                    className={styles.myswiper}
                    initialSlide={currentCard}
                    onSlideChange={(swiper) => setCurrentCard(swiper.activeIndex)}
                    onSwiper={setSwiper}
                >
                    {articleData.map((article, index) => {
                        return <SwiperSlide key={index}>
                            <ArticleCard
                                key={index}
                                title={article.title}
                                description={article.description}
                                image={article.image}
                                link={article.link}
                            />
                        </SwiperSlide>
                    })}
                </Swiper>
            </div >

            <div style={{
                marginTop: '5rem',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '3rem',
            }}>
                <div ref={node => setPrevEl(node)}>
                    <ArrowButton direction={Direction.Left} alt={''}>Forrige</ArrowButton>
                </div>
                <DottedProgressBar
                    size={articleData.length}
                    progress={currentCard}
                    onClick={(newCardIndex) => {
                        slideTo(newCardIndex)
                        setCurrentCard(newCardIndex)
                    }} />
                <div ref={node => setNextEl(node)}>
                    <ArrowButton direction={Direction.Right} alt={''}>Neste</ArrowButton>
                </div>
            </div>
        </section >
    )
}

export default ReadMore
