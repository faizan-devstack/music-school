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
          Music Production
        </div>
        <div className="font-extralight text-base md:text-xl dark:text-neutral-200 py-4 max-w-6xl">
        Music production is the process of creating, recording, and refining music, combining technical expertise with creative vision to bring songs to life. It involves various stages, including songwriting, arranging, recording, editing, mixing, and mastering. Music producers use digital audio workstations (DAWs), audio plugins, and equipment like microphones and synthesizers to shape the sound and texture of a track. Key elements in music production include managing levels, applying effects, layering sounds, and ensuring the overall balance and dynamics of the composition. Whether working on a simple demo or a complex studio project, music production bridges the gap between raw ideas and polished tracks ready for audiences.
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Debug now
        </button>
      </motion.div>
    </AuroraBackground>
  )
}

export default page
