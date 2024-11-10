"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 2000,
  className
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    const nextWord = words[(words.indexOf(currentWord) + 1) % words.length];
    setCurrentWord(nextWord);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        startAnimation();
      }
    }, duration);
    return () => clearInterval(interval); // Cleanup interval
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => setIsAnimating(false)}>
      <motion.div
        key={currentWord}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{
          opacity: 0,
          y: -40,
          scale: 0.8,
          filter: "blur(8px)",
          position: "absolute",
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
        }}
        className={cn(
          "relative inline-block text-rose-600 font-poppins",
          className
        )}>
        {currentWord.split("").map((letter, index) => (
          <motion.span
            key={letter + index}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{
              delay: index * 0.05,
              duration: 0.2,
            }}
            className="inline-block">
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
