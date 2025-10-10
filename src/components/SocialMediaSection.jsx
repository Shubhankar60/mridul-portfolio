import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";

export default function SocialMediaSection() {
  return (
    <section
      id="social-media"
      className="bg-black text-white py-20 flex flex-col items-center justify-center"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">
          Connect With Me
        </h2>
        <p className="text-gray-400 mt-3">
          Follow me on social media for my latest updates and reels.
        </p>
      </motion.div>

      {/* Icons */}
      <motion.div
        className="flex space-x-8 mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Instagram */}
        <a
          href="https://www.instagram.com/your_instagram_username"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-black p-4 rounded-full hover:bg-yellow-300 transition transform hover:scale-110"
        >
          <Instagram size={28} />
        </a>

        
      </motion.div>
    </section>
  );
}
