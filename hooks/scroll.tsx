import { useEffect, useState } from 'react';

export enum ScrollDirection {
    Up = "UP",
    Down = "DOWN"
}

/**
 * hook for checking if the user attempt to scoll vertically
 * 
 * @param threshold threshold before scroll should be triggered
 * @param resetTime seconds before scoll state should reset
 * @returns The direction the user scrolls
 */
const useScroll = (threshold: number = 50, resetTime?: number,) => {
    const [value, setValue] = useState<undefined | ScrollDirection>();
    const [scrollSum, setScrollSum] = useState<number>(0);

    useEffect(() => {
        const onScrollAttempt = (e: WheelEvent) => {
            //if scroll has passed threshold then value should update
            if (Math.abs(scrollSum) > threshold) {
                const direction = scrollSum < 0 ? ScrollDirection.Up : ScrollDirection.Down
                if (value !== direction)
                    setValue(direction)
            }
            else {
                setScrollSum(scrollSum + e.deltaY)
            }
        }

        window.addEventListener("wheel", onScrollAttempt)

        return () => window.removeEventListener("wheel", onScrollAttempt)

    }, [scrollSum, threshold, value]);

    //resets value after resetTime
    useEffect(() => {
        if (scrollSum === 0 || resetTime === undefined || resetTime < 0) return;
        const timeout = setTimeout(() => {
            setScrollSum(0)
            setValue(undefined)
        }, resetTime * 1000)
        return () => clearTimeout(timeout)
    }, [scrollSum, resetTime])

    return value
};

export default useScroll;
