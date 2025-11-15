import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const videoCategories = [
  {
    title: "Car & Bikes Videos",
    description: "Cinematic edits showcasing power, motion, and precision.",
    videos: [
      { src: "/assets/car&bike2.mp4" },
      { src: "/assets/cars&bike1.mp4" },
      { src: "/assets/car&bike3.mp4" },
      { src: "/assets/car&bike4.mp4" },
      { src: "/assets/car&bike5.mp4" },
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
  const videoRefs = useRef([]);
  const [activeSoundIndex, setActiveSoundIndex] = useState(null);

  // 🔊 Handle mute/unmute of a SINGLE video
  const toggleSound = (index) => {
    setActiveSoundIndex((prev) => (prev === index ? null : index));
  };

  // Apply sound logic to each video
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeSoundIndex) {
        video.muted = false; // enable sound
        video.volume = 1;
      } else {
        video.muted = true; // mute others
      }
    });
  }, [activeSoundIndex]);

  // Auto play when visible
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

    videoRefs.current.forEach((video) => video && observer.observe(video));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="showreel" className="bg-black text-white py-20">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 drop-shadow-lg">
          My Showreel
        </h1>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          A glimpse into my professional video editing work — cinematic
          storytelling through visuals.
        </p>
      </motion.div>

      {/* Video Categories */}
      {videoCategories.map((category, catIndex) => (
        <div key={catIndex} className="max-w-6xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-semibold text-yellow-400 mb-2">
              {category.title}
            </h2>
            <p className="text-gray-400">{category.description}</p>
          </motion.div>

          {/* Horizontal Scroll Reel Section */}
          <div className="flex overflow-x-auto space-x-6 px-4 py-4 scrollbar-hide snap-x snap-mandatory">
            {category.videos.map((video, vidIndex) => {
              const globalIndex = catIndex * 100 + vidIndex;

              return (
                <motion.div
                  key={globalIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative rounded-2xl overflow-hidden shadow-lg group flex-shrink-0 w-[360px] h-[640px] snap-center bg-gray-900"
                >
                 <video
  ref={(el) => (videoRefs.current[globalIndex] = el)}
  src={video.src}
  autoPlay
  loop
  muted
  playsInline
  disablePictureInPicture
  controlsList="nodownload noplaybackrate nofullscreen"
  onContextMenu={(e) => e.preventDefault()}
  draggable="false"
  className="w-full h-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
/>


                  {/* Individual Sound Button */}
                  <button
                    onClick={() => toggleSound(globalIndex)}
                    className="absolute bottom-4 right-4 bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:bg-yellow-300"
                  >
                    {activeSoundIndex === globalIndex ? (
                      <Volume2 size={26} />
                    ) : (
                      <VolumeX size={26} />
                    )}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
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
