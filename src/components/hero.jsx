import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Loader */}
      {!videoLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: videoLoaded ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-30 flex items-center justify-center bg-black"
        >
          {/* Loader Circle */}
          <motion.div
            className="w-14 h-14 border-4 border-white/30 border-t-white rounded-full animate-spin"
          />
        </motion.div>
      )}

      {/* Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src="hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-lg"
        >
          I Edit. You Shine.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 max-w-2xl text-sm sm:text-lg md:text-xl text-gray-200 drop-shadow-md"
        >
          Cinematic edits, storytelling, color grading & motion design for creators and brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-6 flex gap-4"
        >
          <button
            onClick={() => scrollToSection("showreel")}
            className="px-6 py-3 rounded-full bg-blue-400 text-black font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            View Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition"
          >
            Hire Me
          </button>
        </motion.div>
      </div>
    </section>
  );
}
