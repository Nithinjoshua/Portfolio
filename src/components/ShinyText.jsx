import React, { useCallback, useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'motion/react';
import './ShinyText.css';

export default function ShinyText({
  text,
  disabled = false,
  speed = 2,
  className = '',
  color = '#b5b5b5',
  shineColor = '#ffffff',
  spread = 120,
  yoyo = false,
  pauseOnHover = false,
  direction = 'left',
  delay = 0
}) {
  const [isPaused, setIsPaused] = useState(false);
  const progress = useMotionValue(direction === 'left' ? 0 : 100);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef(null);
  const directionRef = useRef(direction === 'left' ? 1 : -1);

  const animationDuration = speed * 1000;
  const delayDuration = delay * 1000;

  useAnimationFrame(time => {
    if (disabled || isPaused) {
      lastTimeRef.current = null;
      return;
    }

    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }

    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;
    elapsedRef.current += deltaTime;

    if (delayDuration > 0 && elapsedRef.current > animationDuration) {
      if (elapsedRef.current < animationDuration + delayDuration) return;
      elapsedRef.current = 0;
      if (!yoyo) progress.set(direction === 'left' ? 0 : 100);
    }

    const currentProgress = progress.get();
    const deltaProgress = (deltaTime / animationDuration) * 100 * directionRef.current;
    let nextProgress = currentProgress + deltaProgress;

    if (nextProgress >= 100 || nextProgress <= 0) {
      if (yoyo) {
        directionRef.current *= -1;
        nextProgress = Math.max(0, Math.min(100, nextProgress));
      } else {
        nextProgress = directionRef.current > 0 ? 0 : 100;
      }
    }

    progress.set(nextProgress);
  });

  const backgroundPosition = useTransform(progress, p => `${150 - p * 2}% center`);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsPaused(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsPaused(false);
  }, [pauseOnHover]);

  const gradientStyle = {
    backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  return (
    <motion.span
      className={`shiny-text ${className}`}
      style={{ ...gradientStyle, backgroundPosition }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </motion.span>
  );
}
