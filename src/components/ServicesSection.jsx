import React from "react";
import { motion } from "framer-motion";
import { Film, Camera } from "lucide-react"; // Icons

const ServicesSection = () => {
  const services = [
    {
      title: "Video Editing",
      description:
        "Transforming raw footage into cinematic stories with smooth transitions, perfect pacing, and creative effects.",
      icon: <Film size={50} className="text-yellow-400" />,
    },
    {
      title: "Shoot",
      description:
        "Professional on-location and studio shoots with the perfect lighting, angles, and equipment for stunning visuals.",
      icon: <Camera size={50} className="text-yellow-400" />,
    },
  ];

  return (
    <section className="w-full min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Services
        </motion.h2>
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          From concept to final cut — I offer end-to-end video production and editing to bring your vision to life.
        </motion.p>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800 hover:border-yellow-400 transition group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-yellow-400 transition">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
