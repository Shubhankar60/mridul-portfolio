import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef();

  // ✅ Replace with your WhatsApp number (include country code, no '+')
  const phoneNumber = "+919862210324"; // Example: +91 8765432109

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const name = e.target.user_name.value;
    const email = e.target.user_email.value;
    const message = e.target.message.value;

    const text = `New Message from Website:%0A%0A👤 Name: ${name}%0A📧 Email: ${email}%0A💬 Message: ${message}`;

    // Open WhatsApp chat in new tab
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");

    // Optional: reset the form after submission
    formRef.current.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-yellow-400"
        >
          Contact Me
        </motion.h2>
        <p className="text-center text-gray-300 mb-10">
          Got a project or collaboration in mind? Let’s connect!
        </p>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendToWhatsApp}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-800 shadow-xl rounded-2xl p-8 space-y-6 border border-yellow-400"
        >
          <div>
            <label className="block text-yellow-400 mb-2">Your Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
            />
          </div>

          <div>
            <label className="block text-yellow-400 mb-2">Your Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
            />
          </div>

          <div>
            <label className="block text-yellow-400 mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-xl transition-all"
          >
            Send Message via WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}
