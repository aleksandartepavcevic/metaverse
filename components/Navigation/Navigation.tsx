"use client";

import React from "react";
import { motion } from "framer-motion";

import MenuIcon from "../MenuIcon";
import Search from "../Search";
import Logo from "../Logo";

const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 4, duration: 1 } }}
      className="fixed top-0 left-0 right-0 z-[999]"
    >
      <div className="container mx-auto my-4 md:my-8 flex justify-between items-center">
        <Search className="hidden md:block" />
        <Logo />
        <MenuIcon />
      </div>
    </motion.nav>
  );
};

export default Navigation;
