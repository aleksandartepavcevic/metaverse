import useWindowSize from "@/hooks/useWindowSize/useWindowSize";
import { Variants } from "framer-motion";
import { useMemo } from "react";

export const useItemVariants = () => {
  const { width } = useWindowSize();
  const isLarge = useMemo(() => width >= 1024, [width]);

  const activeVariants = {
    initial: { opacity: 0, y: 5 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, type: "tween", ease: "easeOut" },
    }),
    exit: (i) => ({
      opacity: 0,
      y: 5,
      transition: { delay: i * 0.1, type: "tween", ease: "easeOut" },
    }),
  } as Variants;

  const inactiveVariants = {
    initial: {
      opacity: 0,
      transform: isLarge
        ? "translateY(-20px) rotate(-90deg)"
        : "translateX(-80%) rotate(0deg)",
    },
    animate: {
      opacity: 1,
      transform: isLarge
        ? "translateY(0px) rotate(-90deg)"
        : "translateX(-50%) rotate(0deg)",
      transition: { delay: 0.55 },
    },
    exit: {
      opacity: 0,
      transform: isLarge
        ? "translateY(-20px) rotate(-90deg)"
        : "translateX(-30%) rotate(0deg)",
      transition: { delay: 0.45 },
    },
  } as Variants;

  return { activeVariants, inactiveVariants };
};
