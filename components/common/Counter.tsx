import { animate } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

interface CounterProps {
    from: number;
    to: number;
    shouldAnimate: boolean;
    className?: string;
}

const Counter: React.FC<CounterProps> = ({ from, to, shouldAnimate, className }) => {
    const nodeRef = useRef() as React.MutableRefObject<HTMLParagraphElement>;

    useEffect(() => {
        if (shouldAnimate) {
            const controls = animate(from, to, {
                duration: 3,
                onUpdate(value) {
                    nodeRef.current.textContent = Number(value.toFixed()).toLocaleString('no');
                },
            });
            return () => controls.stop();
        }

    }, [from, to, shouldAnimate]);
    return <p className={className} style={{ margin: 0 }} ref={nodeRef} />;
};

export default Counter;
