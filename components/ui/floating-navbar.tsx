"use client";

import React, { JSX, useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [activeHash, setActiveHash] = useState<string>("#");

  // 🔹 Show / hide navbar on scroll
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious() ?? 0;
      const direction = current - previous;

      if (scrollYProgress.get() <= 0 || direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  // 🔹 Track hash changes (#about, #projects, etc.)
  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#");
    };

    handleHashChange(); // initial
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed top-4 sm:top-10 inset-x-0 mx-auto z-[5000] flex max-w-fit items-center justify-center space-x-2 sm:space-x-4 rounded-full border border-transparent bg-white px-4 sm:px-8 py-1 sm:py-2 pr-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black",
          className
        )}
      >
        {navItems.map((navItem, idx) => {
          const isActive = activeHash === navItem.link;

          return (
            <a
              key={`nav-${idx}`}
              href={navItem.link}
              className={cn(
                "relative flex items-center space-x-1 text-xs sm:text-sm transition-colors text-neutral-600 hover:text-neutral-500 dark:hover:text-neutral-300",
                isActive && "text-purple-500 dark:text-purple-400"
              )}
            >
              <span className="block ">{navItem.icon}</span>
              <span className="block">{navItem.name}</span>
            </a>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};
