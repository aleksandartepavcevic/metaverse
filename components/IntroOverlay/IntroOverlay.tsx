"use client";

import React from "react";
import { motion } from "framer-motion";

const IntroOverlay = () => {
  "use client";
  return (
    <motion.div
      initial={{ translateY: "0" }}
      animate={{
        translateY: "-100%",
        transition: { delay: 3.3, duration: 1, ease: "easeInOut" },
      }}
      className="absolute top-0 left-0 bottom-0 right-0 bg-[#4F6DB8]"
    />
  );
};

export default IntroOverlay;
