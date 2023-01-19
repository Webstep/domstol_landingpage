import Image from "next/image"
import React from "react"
import styles from "./ReadMore.module.scss"

type ArticleCardProps = {
    title: string
    description: string
    image: string
    link: string
}

const ArticleCard = ({ title, description, image, link }: ArticleCardProps) => {
    return (
        <div className={styles.articleCard}>
            <Image src={image} alt={title} width={900} height={600} />
            <div className={styles.cardContent}>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noreferrer">Les mer</a>
            </div>
        </div>
    );
};

export default ArticleCard;