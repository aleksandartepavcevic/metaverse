"use client";

import Image from "next/image";
import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import mouseIcon from "@/public/mouse-icon.svg";
import scrollText from "@/public/scroll-text.svg";

const ScrollBadge = () => {
  const { scrollY } = useScroll();
  const rotateZ = useSpring(scrollY, {
    stiffness: 100,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <div className="fixed bottom-[2rem] right-[2rem] flex justify-center items-center w-[154px] h-[154px] rounded-full bg-white/25 drop-shadow-md backdrop-blur-xl">
      <Image src={mouseIcon} alt="Mouse icon" width={24} height={24} />
      {/* <motion.div
        style={{ rotateZ }}
        className="absolute top-[0] left-[-1%] right-[0] bottom-[0] origin-center"
      > */}
      <motion.div
        className="absolute top-[-15%] left-[-15%] right-[-15%] bottom-[-15%] origin-center"
        style={{ rotateZ }}
      >
        <Image
          src={scrollText}
          alt="Explore and enter the metaverse"
          fill
          objectFit="cover"
        />
      </motion.div>
      {/* </motion.div> */}
    </div>
  );
};

export default ScrollBadge;
