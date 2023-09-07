"use client";

import { useEffect, useLayoutEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const handleWindowChange = () =>
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    handleWindowChange();
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("resize", handleWindowChange);

    return () => {
      window.removeEventListener("resize", handleWindowChange);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
