"use client";
import { useEffect, useState } from "react";

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export default function AnimatedText({
  children,
  className = "",
  delay = 0,
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span
      className={`block transform transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </span>
  );
}
