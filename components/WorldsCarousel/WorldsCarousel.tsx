import React, { useState } from "react";

import world1Src from "@/public/world-1.webp";
import world2Src from "@/public/world-2.webp";
import world3Src from "@/public/world-3.webp";
import world4Src from "@/public/world-4.webp";
import world5Src from "@/public/world-5.webp";
import world2Icon from "@/public/world-icon-2.svg";
import { LayoutGroup, motion } from "framer-motion";
import { WorldsData } from "./components/Item/Item.types";
import Item from "./components/Item";

const worlds: WorldsData[] = [
  {
    id: 1,
    icon: world2Icon,
    name: "The Hogwarts",
    img: world1Src,
    alt: "Background image",
    pos: "-250px center",
  },
  {
    id: 2,
    icon: world2Icon,
    name: "The Upside Down",
    img: world2Src,
    alt: "Background image",
    pos: "-445px center",
  },
  {
    id: 3,
    icon: world2Icon,
    name: "Kadirojo Permai",
    img: world3Src,
    alt: "Background image",
    pos: "-775px center",
  },
  {
    id: 4,
    icon: world2Icon,
    name: "Paradise Island",
    img: world4Src,
    alt: "Background image",
    pos: "center",
  },
  {
    id: 5,
    icon: world2Icon,
    name: "Hawkins Labs",
    img: world5Src,
    alt: "Background image",
    pos: "-500px center",
  },
];

const WorldsCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(2);
  return (
    <motion.div
      layout
      layoutRoot
      className="w-full flex gap-10 items-center justify-center mb-10 max-lg:flex-col max-md:gap-6"
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
