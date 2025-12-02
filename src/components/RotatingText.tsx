"use client";

import { useState, useEffect, useRef, memo } from "react";

// Constants outside component
const TEXTS = [
  "Build with Us.",
  "Biz bilan yarating.",
  "Создавайте с нами.",
] as const;

const TYPING_SPEED = 80;
const DELETING_SPEED = 50;
const PAUSE_DURATION = 2000;

const RotatingText = memo(function RotatingText() {
  const [mounted, setMounted] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [displayLength, setDisplayLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  // Mount effect
  useEffect(() => {
    setMounted(true);
    setDisplayLength(TEXTS[0].length);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const currentFullText = TEXTS[textIndex];
    
    if (!isDeleting) {
      if (displayLength < currentFullText.length) {
        timerRef.current = setTimeout(() => {
          setDisplayLength((prev) => prev + 1);
        }, TYPING_SPEED);
      } else {
        timerRef.current = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
      }
    } else {
      if (displayLength > 0) {
        timerRef.current = setTimeout(() => {
          setDisplayLength((prev) => prev - 1);
        }, DELETING_SPEED);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % TEXTS.length);
      }
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [mounted, displayLength, isDeleting, textIndex]);

  if (!mounted) {
    return <span>{TEXTS[0]}</span>;
  }

  const displayText = TEXTS[textIndex].slice(0, displayLength);

  return (
    <span>
      {displayText}
      <span className="inline-block w-1 h-[1em] ml-1 bg-current animate-blink" />
    </span>
  );
});

export default RotatingText;
