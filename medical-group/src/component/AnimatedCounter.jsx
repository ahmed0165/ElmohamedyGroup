/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const timer = setInterval(() => {
            start += Math.ceil(end / (duration / 50));
            setCount(start > end ? end : start);
            if (start >= end) clearInterval(timer);
          }, 50);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration]);

  return (
    <div ref={countRef} className="text-5xl font-bold text-blue-600">
      {count}+
    </div>
  );
};

export default AnimatedCounter;
