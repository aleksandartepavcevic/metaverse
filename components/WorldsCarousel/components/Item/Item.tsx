import React, { useEffect, useMemo } from "react";
import {
  AnimatePresence,
  AnimationDefinition,
  motion,
  useAnimation,
} from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize/useWindowSize";
import { useItemVariants } from "../../WorldsCarousel.hooks";
import Image from "next/image";
import { ItemProps } from "./Item.types";

const Item = ({ data, handleClick, isActive }: ItemProps) => {
  const { width } = useWindowSize();
  const controls = useAnimation();
  const isLarge = useMemo(() => width >= 1024, [width]);

  const { activeVariants, inactiveVariants } = useItemVariants();

  const desktopAnimation: AnimationDefinition = isActive
    ? { width: "370px", height: "560px" }
    : { width: "170px", height: "560px" };
  const mobileAnimation: AnimationDefinition = isActive
    ? { height: "370px", width: "100%" }
    : { height: "100px", width: "100%" };
  const parentAnimation = isLarge ? desktopAnimation : mobileAnimation;

  useEffect(() => {
    controls.start({
      ...parentAnimation,
    });
  }, [isActive, controls, parentAnimation, isLarge]);

  return (
    <motion.div
      layout
      animate={controls}
      transition={{ delay: 0.65 }}
      className="relative h-[560px] w-[170px] drop-shadow-xl max-lg:h-[100px] max-lg:w-full transform-gpu"
      onClick={() => handleClick(data.id)}
    >
      <motion.div
        animate={{
          // Overflow issue on safari fix
          overflow: "hidden",
          WebkitMaskImage: "-webkit-radial-gradient(white, black)",
        }}
        className="w-full h-full overflow-hidden rounded-3xl transform-gpu"
      >
        <motion.div
          whileHover={{
            cursor: "pointer",
          }}
          layout="position"
          className="relative z-10 w-full h-full p-8"
        >
          <AnimatePresence mode="wait">
            {isActive ? (
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full h-full flex flex-col justify-end text-white"
                key={`active-${data.id}`}
              >
                <motion.div
                  custom={2.5}
                  variants={activeVariants}
                  className="w-[60px] h-[60px] flex items-center justify-center bg-white/5 backdrop-blur-xl rounded-full"
                >
                  <Image src={data.icon} alt="World icon" />
                </motion.div>
                <motion.span
                  custom={3.5}
                  variants={activeVariants}
                  className="uppercase tracking-wider text-base mt-4 mb-6"
                >
                  Enter metaverse
                </motion.span>
                <motion.h3
                  custom={4.5}
                  variants={activeVariants}
                  className="text-3xl font-bold max-md:text-2xl"
                >
                  {data.name}
                </motion.h3>
                <motion.div
                  variants={activeVariants}
                  className="[content: ''] absolute -z-10 bottom-0 left-0 w-full h-2/4 bg-gradient-to-t from-black/70 to-transparent"
                />
              </motion.div>
            ) : (
              <motion.span
                initial="initial"
                animate="animate"
                exit="exit"
                variants={inactiveVariants}
                custom={4}
                key={`inactiveName-${data.id}`}
                className="absolute z-10 w-0 bottom-8 left-1/2 whitespace-nowrap text-3xl font-bold max-lg:w-[unset] max-md:text-2xl"
              >
                {data.name}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          layout="preserve-aspect"
          className="absolute top-0 left-0 w-[560px] h-full max-lg:w-full max-lg:h-[370px]  z-0 before:[content: ''] before:w-full before:h-full before:block before:absolute before:top-0 before:left-0 before:bg-black/20 before:z-[1]"
        >
          <Image
            src={data.img}
            alt={data.alt}
            fill
            objectFit="cover"
            objectPosition={isLarge ? data.pos : "center"}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Item;
