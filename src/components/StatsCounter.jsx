'use client';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from '@/hooks/useInView';

export default function StatsCounter({ end, suffix = '', prefix = '', duration = 2.5 }) {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      {hasAnimated ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          suffix={suffix}
          prefix={prefix}
          className="text-4xl md:text-5xl font-bold text-camel"
        />
      ) : (
        <span className="text-4xl md:text-5xl font-bold text-camel">0{suffix}</span>
      )}
    </div>
  );
}

