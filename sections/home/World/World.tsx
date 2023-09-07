"use client";

import React from "react";
import { motion } from "framer-motion";
import WorldsCarousel from "@/components/WorldsCarousel";

const World = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-[200px] max-md:gap-6 max-md:mb-4">
      <motion.span
        viewport={{ once: true }}
        className="text-gray-300/50 border-l-2 border-gray-300/50 pl-1 leading-4"
      >
        The World
      </motion.span>
      <motion.h1 className="text-white text-6xl text-center font-bold max-w-[800px] leading-normal max-md:text-4xl">
        Choose the world you want to explore
      </motion.h1>
      <WorldsCarousel />
    </div>
  );
};

export default World;
