import React, { SetStateAction, useEffect, useState } from "react";

import worldSrc from "@/public/world.webp";
import Image, { StaticImageData } from "next/image";
import { LayoutGroup, Variants, motion, useAnimation } from "framer-motion";

type WorldsData = {
  id: number;
  icon: React.ReactNode;
  name: string;
  img: StaticImageData;
  alt: string;
};

const worlds: WorldsData[] = [
  {
    id: 1,
    icon: <span>Icon</span>,
    name: "The Hogwarts",
    img: worldSrc,
    alt: "Background image",
  },
  {
    id: 2,
    icon: <span>Icon</span>,
    name: "The Upside Down",
    img: worldSrc,
    alt: "Background image",
  },
  {
    id: 3,
    icon: <span>Icon</span>,
    name: "Kadirojo Permai",
    img: worldSrc,
    alt: "Background image",
  },
  {
    id: 4,
    icon: <span>Icon</span>,
    name: "Paradise Island",
    img: worldSrc,
    alt: "Background image",
  },
  {
    id: 5,
    icon: <span>Icon</span>,
    name: "Hawkins Labs",
    img: worldSrc,
    alt: "Background image",
  },
];

const Item = ({
  data,
  handleClick,
  isActive,
}: {
  data: WorldsData;
  handleClick: React.Dispatch<SetStateAction<number>>;
  isActive: boolean;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(isActive ? "animate" : "hidden");
  }, [isActive, controls]);

  const spanVariants = {
    hidden: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  } as Variants;

  return (
    <motion.div
      layout
      style={{
        flex: isActive ? "2" : "1",
      }}
      className="relative h-[560px] w-full bg-blue-500 overflow-hidden"
      onClick={() => handleClick(data.id)}
    >
      <motion.div layout="position" className="relative z-10">
        <motion.span
          initial="hidden"
          animate={controls}
          variants={spanVariants}
        >
          {data.name}
        </motion.span>
      </motion.div>
      <motion.div
        layout="preserve-aspect"
        className="absolute top-0 left-0 w-[400px] h-full z-0"
      >
        <Image src={data.img} alt={data.alt} fill objectFit="cover" />
      </motion.div>
    </motion.div>
  );
};

const WorldsCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(2);
  return (
    <motion.div
      layout
      layoutRoot
      className="w-full flex gap-10 items-center justify-between"
    >
      <LayoutGroup id="worlds-carousel">
        {worlds.map((world) => (
          <Item
            key={world.id}
            data={world}
            isActive={activeSlide === world.id}
            handleClick={setActiveSlide}
          />
        ))}
      </LayoutGroup>
    </motion.div>
  );
};

export default WorldsCarousel;
