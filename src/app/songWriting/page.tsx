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
          Song Writing
        </div>
        <div className="font-extralight text-base md:text-xl dark:text-neutral-200 py-4 max-w-6xl">
        Songwriting is the creative process of crafting lyrics, melodies, and harmonies to form a cohesive and expressive piece of music. It involves combining words and music to tell a story, convey emotions, or communicate ideas in a meaningful way. Key elements of songwriting include developing a catchy melody, structuring verses and choruses, and creating a memorable hook that resonates with listeners. Songwriters often draw inspiration from personal experiences, observations, or abstract concepts to create lyrics that connect deeply with audiences. Whether writing alone or collaborating with others, songwriting is a powerful art form that transforms ideas into songs that inspire and move people.
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Debug now
        </button>
      </motion.div>
    </AuroraBackground>
  )
}

export default page
