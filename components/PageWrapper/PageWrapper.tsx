"use client";

import React from "react";
import { motion } from "framer-motion";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        initial={{ translateY: "0" }}
        animate={{
          translateY: "-100%",
          transition: { delay: 3.3, duration: 1, ease: "easeInOut" },
        }}
        className="absolute top-0 left-0 bottom-0 right-0 z-50 bg-[#4F6DB8]"
      />
      {children}
    </div>
  );
};

export default PageWrapper;
