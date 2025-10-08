import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

// 🎬 Video Categories
const videoCategories = [
  {
    title: "Car & bikes Videos",
    description: "Cinematic edits showcasing power, motion, and precision.",
    videos: [
      { src: "/assets/car&bike2.mp4" },
      { src: "/assets/cars&bike1.mp4" },
      { src: "/assets/car&bike3.mp4" },
      { src: "/assets/car&bike4.mp4" },
      { src: "/assets/car&bike5.mp5" },
    ],
  },
  {
    title: "Wedding Videos",
    description: "Capturing emotions, moments, and memories in motion.",
    videos: [
      { src: "/assets/weding1.mp4" },
      { src: "/assets/weding2.mp4" },
      { src: "/assets/weding3.mp4" },
      { src: "/assets/weding4.mp4" },
    ],
  },
  {
    title: "Brand Promotions",
    description: "Creative visuals that bring brands to life.",
    videos: [
      { src: "/assets/brand1.mp4" },
      { src: "/assets/brand2.mp4" },
      { src: "/assets/brand3.mp4" },
    ],
  },
];

export default function ShowreelSection() {
  const [muted, setMuted] = useState(true); // global mute state
  const videoRefs = useRef([]);

  // 🧠 Toggle mute for ALL videos
  const toggleMute = () => {
    const newMuteState = !muted;
    setMuted(newMuteState);

    videoRefs.current.forEach((video) => {
      if (video) video.muted = newMuteState;
    });
  };

  // 🎞️ Auto play videos when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.4 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="showreel" className="bg-black text-white py-20">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 drop-shadow-lg">
          My Showreel
        </h1>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          A glimpse into my professional video editing work — cinematic
          storytelling through visuals.
        </p>

        {/* 🔊 Global Mute Button */}
        <button
          onClick={toggleMute}
          className="mt-6 bg-yellow-400 text-black rounded-full p-3 hover:bg-yellow-300 transition"
        >
          {muted ? <VolumeX size={28} /> : <Volume2 size={28} />}
        </button>
      </motion.div>

      {/* Video Categories */}
      {videoCategories.map((category, catIndex) => (
        <div key={catIndex} className="max-w-6xl mx-auto px-6 mb-20">
          {/* Category Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-semibold text-yellow-400 mb-2">
              {category.title}
            </h2>
            <p className="text-gray-400">{category.description}</p>
          </motion.div>

          {/* Videos Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.videos.map((video, vidIndex) => {
              const globalIndex = catIndex * category.videos.length + vidIndex;
              return (
                <motion.div
                  key={globalIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative rounded-2xl overflow-hidden shadow-lg group"
                >
                  <video
                    ref={(el) => (videoRefs.current[globalIndex] = el)}
                    src={video.src}
                    autoPlay
                    loop
                    muted={muted}
                    playsInline
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}

      {/* View More CTA */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <a
          href="/projects"
          className="inline-block px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition shadow-md"
        >
          View All Projects
        </a>
      </motion.div>
    </section>
  );
}
