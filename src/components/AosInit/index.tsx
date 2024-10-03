"use client";

import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

export default function AosInit() {
  useEffect(() => {
    console.log("AOS", AOS);
    AOS.init({
      offset: 100,
      once: true,
    });
  }, []);

  return null;
}
