"use client";

import React, { useEffect } from "react";

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (window) window.scrollTo({ top: 0 });
  }, []);

  return children;
};

export default RootTemplate;
