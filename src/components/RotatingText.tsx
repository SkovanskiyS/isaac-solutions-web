"use client";

import { useState, useEffect } from "react";

const texts = [
  "Build with Us.",
  "Biz bilan yarating.",
  "Создавайте с нами.",
];

export default function RotatingText() {
  const [mounted, setMounted] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Wait for mount
  useEffect(() => {
    setMounted(true);
    setText(texts[0]);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const currentFullText = texts[textIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      // Typing
      if (text.length < currentFullText.length) {
        timer = setTimeout(() => {
          setText(currentFullText.slice(0, text.length + 1));
        }, 80);
      } else {
        // Pause before deleting
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      // Deleting
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 50);
      } else {
        // Move to next text
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timer);
  }, [mounted, text, isDeleting, textIndex]);

  // Server-side / initial render
  if (!mounted) {
    return <span>{texts[0]}</span>;
  }

  return (
    <span>
      {text}
      <span
        style={{
          borderRight: "4px solid currentColor",
          marginLeft: "4px",
          animation: "blink 0.7s step-end infinite",
        }}
      />
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
