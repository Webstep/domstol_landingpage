import { useCallback, useEffect, useRef } from 'react';

export enum ScrollDirection {
    Up = "UP",
    Down = "DOWN"
}

interface useScrollParams {
    handleScroll: (direction: ScrollDirection) => void,
    threshold?: number,
    resetTime?: number
}

/**
 * hook for checking if the user attempt to scoll vertically
 *
 * @param handleScroll function to run when user is scrolling, takes one parameter of type ScrollDirection 
 * @param threshold threshold before scroll should be triggered
 * @param resetTime seconds before scroll can be triggered again
 * @returns The direction the user scrolls
 */
const useScroll = ({ handleScroll, threshold = 25, resetTime = 0.5 }: useScrollParams): void => {
    const scrollingTimer = useRef<any>()

    const onScroll = useCallback((e: KeyboardEvent | WheelEvent) => {
        let direction;

        if (e instanceof KeyboardEvent) {
            if (e.key === "ArrowDown") {
                direction = ScrollDirection.Down
            } else if (e.key === "ArrowUp") {
                direction = ScrollDirection.Up
            }
        }
        else {
            if (Math.abs(e.deltaY) > threshold) {
                direction = e.deltaY < 0 ? ScrollDirection.Up : ScrollDirection.Down
            }
        }

        if (!direction) return;

        //deactivate eventlistener to limit how often handleScroll can be triggered
        window.removeEventListener("wheel", onScroll)
        window.removeEventListener("keydown", onScroll)

        //prevent old eventlisteneres to be applied
        clearTimeout(scrollingTimer.current)

        //reactivate eventlistener after specified amount of time
        scrollingTimer.current = setTimeout(() => {
            window.addEventListener("keydown", onScroll)
            window.addEventListener("wheel", onScroll)
        }, resetTime * 1000)

        handleScroll(direction)

    }, [handleScroll, resetTime, threshold])

    useEffect(() => {
        window.addEventListener("wheel", onScroll)
        window.addEventListener("keydown", onScroll)

        return () => {
            window.removeEventListener("wheel", onScroll)
            window.removeEventListener("keydown", onScroll)
            clearTimeout(scrollingTimer.current)
        }
    }, [onScroll]);
};

export default useScroll;
