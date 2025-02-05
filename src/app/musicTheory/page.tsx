"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

function page() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-semibold dark:text-white text-center pt-28">
          Basic Music Theory
        </div>
        <div className="font-extralight text-base md:text-xl dark:text-neutral-200 py-4 max-w-6xl">
          Music theory is the study of the fundamental elements that make up music, including melody, harmony, rhythm, and form. It provides a framework for understanding how music is constructed and how its various components interact to create a cohesive sound. Key concepts in music theory include scales, chords, intervals, time signatures, and key signatures, which form the foundation for composing, performing, and analyzing music. Whether you are a beginner learning to play an instrument or an advanced musician seeking to refine your skills, music theory serves as a vital tool for enhancing creativity and musical expression.
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Learn more
        </button>
      </motion.div>
    </AuroraBackground>
  )
}

export default page
