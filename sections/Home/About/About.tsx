"use client";

import React, { useEffect, useRef } from "react";
import { Variants, motion, useAnimation, useInView } from "framer-motion";
import ArrowIcon from "@/components/ArrowIcon";

const parentAnimation = {
  visible: {
    transition: { staggerChildren: 0.5 },
  },
} as Variants;

const childAnimation = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.17, 0.55, 0.55, 1],
    },
  },
} as Variants;

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "240px 0px 0px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    controls.start(isInView ? "visible" : "hidden");
  }, [isInView, controls]);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={parentAnimation}
      ref={ref}
      className="relative flex flex-col md:items-center gap-4 mt-[80px] lg:mt-[200px]"
    >
      <motion.span
        variants={childAnimation}
        viewport={{ once: true }}
        className="text-gray-300/50 border-l-2 border-gray-300/50 pl-1 leading-4"
      >
        About Metaverse
      </motion.span>
      <motion.p
        variants={childAnimation}
        viewport={{ once: true }}
        className="md:text-center text-xl leading-10 md:text-3xl font-normal text-[#c7c7c7] md:leading-[180%] md:px-5"
      >
        <span className="text-white font-bold">Metaverse</span> is a new thing
        in the future, where you can enjoy the virtual world by feeling like
        it&apos;s really real, you can feel what you feel in this metaverse
        world, because this is really the{" "}
        <span className="text-white font-bold">madness of the metaverse</span>{" "}
        of today, using only <span className="text-white font-bold">VR</span>{" "}
        devices you can easily explore the metaverse world you want, turn your
        dreams into reality. Let&apos;s{" "}
        <span className="text-white font-bold">explore</span> the madness of the
        metaverse by scrolling down
      </motion.p>
      <ArrowIcon className="mt-4" />
    </motion.div>
  );
};

export default About;
