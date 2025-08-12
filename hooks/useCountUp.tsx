import { useState, useEffect, useRef} from 'react';

interface UseCountUpOptions {
    end: number;
    duration?: number;
    start?: number;
    decimals?: number;
    suffix?: string;
    prefix?: string;
}

export const useCountup = ({
    end,
    duration = 2000,
    start = 0,
    decimals = 0,
    suffix = '',
    prefix = '',
}: UseCountUpOptions) => {
    const [count, setCount] = useState(start);
    const [isAnimating, setIsAnimating] = useState(false);
    const frameRef = useRef<number>();
    const startTimeRef = useRef<number>();

    const startAnimation = () => {
        if(isAnimating) return;

        setIsAnimating(true);
        startTimeRef.current = Date.now();

        const animate = () => {
            const now = Date.now();
            const elapsed = now - (startTimeRef.current || now);
            const progress = Math.min(elapsed/duration,1);

            // Function for smooth animation
            const easeOutQuart = 1 - Math.pow(1-progress, 4);
            const currentCount = start + easeOutQuart * (end - start);
            
            setCount(currentCount);

            if(progress<1){
                frameRef.current = requestAnimationFrame(animate);
            } else {
                setIsAnimating(false);
            }
        };
        frameRef.current = requestAnimationFrame(animate);
    };
    const reset = () => {
        if(frameRef.current){
            cancelAnimationFrame(frameRef.current);
        }
        setCount(start);
        setIsAnimating(false);
    }

    useEffect(() => {
        return () => {
            if(frameRef.current){
                cancelAnimationFrame(frameRef.current);
            }
        };
    },[]);

    const displayValue = `${prefix}${count.toFixed(decimals)}${suffix}`;

    return {
        value: displayValue, start:startAnimation, reset, isAnimating

    };

}
