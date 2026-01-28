"use client";

import { HiArrowUpRight } from "react-icons/hi2";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/magicbutton";

const Hero = () => {
  return (
    <div className="pb-20 pt-30">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-40 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* ✅ ONLY CHANGE IS HERE (forced dark purple background) */}
      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-[#0b0616]">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_0.5px,transparent_0.5px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_0.5px,transparent_0.5px)]"
          )}
        />
      </div>

      <div className="flex justify-center lg:justify-around relative flex-col lg:flex-row my-20 z-10">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-sm md:text-base uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400"
          >
            <span className="text-purple-500 text-2xl">Hello</span>, I am
          </motion.p>

          <TextGenerateEffect
            words="ISHAYAN KUNDU"
            textColor="text-purple-500"
            className="text-center lg:max-w-[35vw] text-[40px] md:text-5xl lg:text-6xl"
          />

          <h1 className="tracking-[0.25em]">Coder and Web developer</h1>

          <a href="#about">
            <MagicButton
              icon={<HiArrowUpRight />}
              position="right"
              text="About me"
              className="tracking-[0.25em] mt-2 lg:mt-4"
            />
          </a>
        </motion.div>

        {/* Divider – lg only */}
        <div className="hidden lg:block bg-white w-1 h-[400px]" />

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="flex justify-center my-5 lg:my-0 items-center lg:max-w-[20vw]"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300" />

            <div className="relative bg-white dark:bg-black-100 rounded-lg p-1 overflow-hidden shadow-2xl">
              <img
                src="me.jpeg"
                alt="Ishayan Kundu - Portfolio"
                className="w-full h-auto rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
