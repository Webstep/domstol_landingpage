import React from 'react'
import styles from './ProgressBar.module.scss'

interface RectangleProps {
    highlight?: boolean
    onClick: () => void
}

const RectangleButton: React.VFC<RectangleProps> = ({ highlight = false, onClick }) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}
            data-highlight={highlight}
        >
            <span className={styles.label}></span>
            <span className={styles.rectangle} />
        </button>
    )
}

export default RectangleButton