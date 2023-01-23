import Image from "next/image"
import React from "react"
import styles from "./ArticleCard.module.scss"

export type ArticleCardProps = {
    title: string
    description: string
    image: string
    link?: string
}

const ArticleCard = ({ title, description, image, link }: ArticleCardProps) => {
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