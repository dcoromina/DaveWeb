"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    // Simulate network delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));

    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="ContactSection" className="w-full section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Let&apos;s Connect</h2>
            <p className="text-gray-300 text-lg max-w-md leading-relaxed">
              I&apos;m currently working on my new project, but my inbox is always open for new opportunities.
              Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            <p className="text-gray-300 text-lg max-w-md leading-relaxed">If you send it through linkedin i won&apos;t miss it</p>

            <div className="flex gap-6">

              <Link href="https://www.linkedin.com/in/dcoromina" target="_blank" className="relative w-12 h-12 flex items-center justify-center rounded-full glass hover:border-primary/50 transition-all duration-300 group hover:scale-110">
                <Image src="/linkedin-icon.svg" width={24} height={24} className="group-hover:scale-110 transition-transform" alt="LinkedIn" />
              </Link>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass-strong p-8 rounded-2xl border border-white/10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {emailSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-12 space-y-4"
                  key="success"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto"
                  >
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <p className="text-xl font-semibold text-white">Message Sent Successfully!</p>
                  <p className="text-gray-400">I&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <motion.form
                  className="space-y-6"
                  onSubmit={handleSubmit}
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                      placeholder="dave@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      name="subject"
                      type="text"
                      id="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                      placeholder="Just saying hi!"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Let's talk about..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
                  >
                    Send Message
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
