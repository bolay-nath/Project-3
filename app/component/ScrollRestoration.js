"use client";

import { useEffect } from "react";

const ScrollRestoration = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return null;
};

export default ScrollRestoration;
