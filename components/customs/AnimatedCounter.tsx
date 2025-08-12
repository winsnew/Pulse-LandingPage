import React, { useEffect, useRef } from 'react';
import { useCountup } from '../../hooks/useCountUp';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  decimals = 0,
  suffix = '',
  prefix = '',
  className = ''
}) => {
  const { value, start } = useCountup({
    end,
    duration,
    decimals,
    suffix,
    prefix
  });
  
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            // Add a small delay for better visual effect
            setTimeout(() => {
              start();
            }, 200);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [start]);

  return (
    <div ref={elementRef} className={className}>
      {value}
    </div>
  );
};

export default AnimatedCounter;