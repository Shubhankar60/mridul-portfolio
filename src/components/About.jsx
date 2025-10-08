import React from "react";
import { motion } from "framer-motion";
import { SiAdobeaftereffects, SiDavinciresolve, SiAdobephotoshop } from "react-icons/si";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-shrink-0"
        >
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-yellow-400"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left max-w-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">About Me</h2>
          <p className="text-gray-300 mb-6">
            Hi, I’m <span className="text-white font-semibold">[Mridul]</span>, a passionate
            video editor who transforms raw footage into captivating cinematic stories.
            My expertise includes color grading, motion graphics, and seamless storytelling.
          </p>

          <h3 className="text-xl font-semibold mb-3">Specialized In</h3>
          <div className="flex justify-center md:justify-start gap-6 text-5xl">
            <SiAdobeaftereffects className="text-purple-500 hover:scale-110 transition-transform" title="Adobe After Effects" />
            <SiDavinciresolve className="text-cyan-400 hover:scale-110 transition-transform" title="DaVinci Resolve" />
            <SiAdobephotoshop className="text-blue-400 hover:scale-110 transition-transform" title="Adobe Photoshop" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
