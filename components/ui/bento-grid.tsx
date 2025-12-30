"use client"
import type React from "react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import GlowButton from "./color-button";
import { GlobeDemo } from "./GridGlobe";
import { div } from "framer-motion/client";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json"
import MagicButton from "./magicbutton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
}) => {
  const[copied,setCopied]=useState(false);
  const handleCopy=()=>{
    navigator.clipboard.writeText('ishayankundu6@gmail.com');
    setCopied(true);
  }
  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col rounded-xl border border-neutral-200 overflow-hidden transition duration-200 hover:shadow-xl dark:border-white/[0.1]",
        className
      )}
    >
      {/* IMAGE (FIXED: pointer-events-none) */}
      {img && (
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={img}
            alt="grid image"
            className={cn(
              "absolute inset-0 w-full h-full object-cover object-center ",
              imgClassName
            )}
          />
        </div>
      )}

      {/* CONTENT */}
      <div
        className={cn(
          titleClassName,
          "relative z-10 group-hover/bento:translate-x-2 transition duration-200 md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
          id === 2 && "text-black"
        )}
      >
        {/* DESCRIPTION */}
        <div
          className={cn(
            "font-sans font-extralight text-sm md:text-base lg:text-lg text-[#C1C2D3] leading-relaxed",
            id === 2 ? "text-black font-bold" : "",
            id === 1 && "w-full",
            id === 1 && "bg-black/50 flex items-center justify-center" // full width for id 1
          )}
        >
          {description}
        </div>

        {/* TITLE */}
        <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold mt-2">
          {title}
        </div>
        {id === 3 && <GlobeDemo />}
        {id === 4 && (
          <div className="flex gap-1 lg:gap-5 w-fit h-full pt-2  -right-3 lg:right-5">
            <div className="flex flex-col gap-2 lg:gap-5">
              {["React.js", "Next.js", ].map((item) => (
                <span
                  key={item}
                  className="py-2 lg:py-4 lg:px-3 px-1 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-2 lg:gap-5">
              {["Express.js", "TailwindCss", ].map((item) => (
                <span
                  key={item}
                  className="py-2 lg:py-4 lg:px-3 px-1 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-2 lg:gap-5">
              {["Java", "Python", ].map((item) => (
                <span
                  key={item}
                  className="py-2 lg:py-4 lg:px-3 px-1 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

              
        )}
        {
          id===6 &&(
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie options={{
                  loop: copied,
                  autoplay:copied,
                  animationData,
                  rendererSettings:{
                    preserveAspectRatio:'xMidyMid slice'
                  }
                }} />
              </div>
              <MagicButton text={copied ? 'Email Copied':'Copy my email'} icon={<IoCopyOutline/>} position='left' handleClick={handleCopy} />
            </div>
          )
        }

        {/* BUTTON ONLY FOR ID === 2 */}
        {id === 2 && (
          <div className="relative tracking-[.25em] z-20 mt-4 ">
            <GlowButton
              text="LeetCode"
              href="https://leetcode.com/u/ishayan_06/"
            />
          </div>
        )}
      </div>
    </div>
  );
};
