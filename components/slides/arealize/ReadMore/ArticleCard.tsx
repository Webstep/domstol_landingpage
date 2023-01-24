import Image from "next/image"
import React, { useContext } from "react"
import { DeviceContext } from "../../../common/Device"
import styles from "./ArticleCard.module.scss"

export type ArticleCardProps = {
    title: string
    description: string
    image: string
    link?: string
}

const ArticleCard = ({ title, description, image, link }: ArticleCardProps) => {
    const { isMobile } = useContext(DeviceContext);

    if (isMobile) {
        return (
            <div className={styles.articleCard} onClick={() => window.open(link)}>
                <Image src={image} alt={
                    title
                } width={390} height={472} />
                <div className={styles.cardContent}>
                    <h2 className={styles.title} >{title}</h2>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        );
    }

    return (
        <article className={styles.articleCard} onClick={() => window.open(link)}>
            <Image src={image} alt={
                title
            } width={810} height={540} />
            <div className={styles.cardContent}>
                <h2 className={styles.title} >{title}</h2>
                <p className={styles.description}>{description}</p>
            </div>
        </article>
    );
};

export default ArticleCard;