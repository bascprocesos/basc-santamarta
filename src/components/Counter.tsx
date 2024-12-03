"use client";

import { useEffect, useState } from "react";

interface CounterProps {
  endValue: number;
  label: string;
}

const Counter = ({ endValue, label }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startValue = 0;
    const increment = endValue / 100;

    const interval = setInterval(() => {
      startValue += increment;

      if (startValue >= endValue) {
        startValue = endValue;
        clearInterval(interval);
      }
      setCount(Math.floor(startValue));
    }, 20);

    return () => clearInterval(interval);
  }, [endValue]);

  return (
    <div className="text-center">
      <h1 className="md:text-5xl text-4xl font-bold text-darkBlue mb-2">
        {count}
      </h1>
      <p className="md:text-xl text-lg font-medium text-white">{label}</p>
    </div>
  );
};

export default Counter;
