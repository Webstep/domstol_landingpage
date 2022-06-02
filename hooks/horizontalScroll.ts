import { useCallback, useEffect, useRef } from 'react'

export enum HorizontalScrollDirection {
    Left = 'LEFT',
    Right = 'RIGHT',
}

interface useScrollParams {
    handleScroll: (direction: HorizontalScrollDirection) => void
    threshold?: number
    resetTime?: number
}

/**
 * hook for checking if the user attempt to scoll vertically
 *
 * @param handleScroll function to run when user is scrolling, takes one parameter of type HorizontalHorizontalScrollDirection
 * @param threshold threshold before scroll should be triggered
 * @param resetTime seconds before scroll can be triggered again
 * @returns The direction the user scrolls
 */
const useHorizontalScroll = ({
    handleScroll,
    threshold = 25,
    resetTime = 0.5,
}: useScrollParams): void => {
    const scrollingTimer = useRef<any>()

    const onScroll = useCallback(
        (e: KeyboardEvent | WheelEvent) => {
            let direction

            if (e instanceof KeyboardEvent) {
                if (e.key === 'ArrowLeft') {
                    direction = HorizontalScrollDirection.Left
                } else if (e.key === 'ArrowRight') {
                    direction = HorizontalScrollDirection.Right
                }
            } else {
                if (Math.abs(e.deltaX) > threshold) {
                    direction =
                        e.deltaX > 0
                            ? HorizontalScrollDirection.Right
                            : HorizontalScrollDirection.Left
                }
            }

            if (!direction) return

            //deactivate eventlistener to limit how often handleScroll can be triggered
            window.removeEventListener('wheel', onScroll)
            window.removeEventListener('keydown', onScroll)

            //prevent old eventlisteneres to be applied
            clearTimeout(scrollingTimer.current)

            //reactivate eventlistener after specified amount of time
            scrollingTimer.current = setTimeout(() => {
                window.addEventListener('keydown', onScroll)
                window.addEventListener('wheel', onScroll)
            }, resetTime * 1000)

            handleScroll(direction)
        },
        [handleScroll, resetTime, threshold]
    )

    useEffect(() => {
        window.addEventListener('wheel', onScroll)
        window.addEventListener('keydown', onScroll)

        return () => {
            window.removeEventListener('wheel', onScroll)
            window.removeEventListener('keydown', onScroll)
            clearTimeout(scrollingTimer.current)
        }
    }, [onScroll])
}

export default useHorizontalScroll
