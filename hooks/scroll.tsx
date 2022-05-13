import { useEffect, useState } from 'react';

export enum ScrollDirection {
    Up = "UP",
    Down = "DOWN"
}

const useScroll = (threshold: number = 50, disable: boolean = false) => {
    const [value, setValue] = useState<undefined | ScrollDirection>();
    const [scrollSum, setScrollSum] = useState<number>(0);

    useEffect(() => {
        if (disable) return;

        const onScrollAttempt = (e: WheelEvent) => {

            //if scroll has passed threshold then value should update
            if (Math.abs(scrollSum) > threshold) {
                setValue(scrollSum < 0 ? ScrollDirection.Up : ScrollDirection.Down)
            }
            else {
                setScrollSum(scrollSum + e.deltaY)
            }
        }

        window.addEventListener("wheel", onScrollAttempt)

        return () => window.removeEventListener("wheel", onScrollAttempt)

    }, [disable, scrollSum, threshold]);

    //resets sum if not progress have been made for a while
    useEffect(() => {
        if (scrollSum !== 0) {
            const timeout = setTimeout(() => {
                setScrollSum(0)
                setValue(undefined)
            }, 1000)
            return () => clearTimeout(timeout)
        }
    }, [scrollSum])

    return value
};

export default useScroll;
