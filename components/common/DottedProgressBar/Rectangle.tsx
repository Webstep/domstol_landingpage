import React from 'react'
import styles from './ProgressBar.module.scss'

interface RectangleProps {
    highlight?: boolean
    onClick: () => void
}

const RectangleButton: React.FC<RectangleProps> = ({ highlight = false, onClick, children }) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}
            data-highlight={highlight}
        >
            {children}
            <span className={styles.rectangle} />
        </button>
    )
}

export default RectangleButton