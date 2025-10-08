import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Amit Sharma",
      role: "Music Video Director",
      feedback:
        "Working with you was an absolute pleasure! The cuts, transitions, and color grading were spot on. My project came to life exactly as I envisioned.",
      rating: 5,
      photo: "/client1.jpg", // Replace with your image
    },
    {
      name: "Priya Mehta",
      role: "Wedding Planner",
      feedback:
        "The shoot was amazing and editing was perfect. You captured every emotion beautifully — truly cinematic work!",
      rating: 5,
      photo: "/client2.jpg",
    },
    {
      name: "Rahul Verma",
      role: "Content Creator",
      feedback:
        "Quick turnaround, professional approach, and brilliant creativity. Highly recommended for anyone who needs top-quality editing.",
      rating: 4,
      photo: "/client3.jpg",
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
          What My Clients Say
        </motion.h2>
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Genuine feedback from people I’ve had the privilege to work with.
        </motion.p>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800 hover:border-yellow-400 transition"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Photo */}
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-yellow-400"
              />

              {/* Name & Role */}
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-400 text-sm">{testimonial.role}</p>

              {/* Rating */}
              <div className="flex justify-center my-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-300 text-sm">{testimonial.feedback}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
