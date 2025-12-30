"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  textColor = "text-purple-500",
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  textColor?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration,
        delay: stagger(0.2),
      }
    );
  }, [animate, duration, filter]);

  return (
    <div className={cn("font-bold", className)}>
      <motion.div ref={scope} className="mt-4 leading-snug tracking-wide">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={cn(
              idx >= 1 ? textColor : "text-black dark:text-white",
              "opacity-0"
            )}
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
