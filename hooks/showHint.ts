import { useEffect } from 'react'
import { useSlideStore } from '../stores/activeSlide'

const useShowHint = ({ delay = 5000, disable = false }) => {
    const setShowHint = useSlideStore((state) => state.setShowHint)

    useEffect(() => {
        if (!disable) {
            const timeout = setTimeout(() => setShowHint(true), delay)

            return () => {
                clearTimeout(timeout)
            }
        }
    })
}

export default useShowHint
