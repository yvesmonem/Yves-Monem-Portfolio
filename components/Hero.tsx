"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Cpu } from "lucide-react";
import ProfileAvatar from "./ProfileAvatar";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/yvesmonem", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yves-monem-140407271/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:yves_menhem@outlook.com", label: "Email" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6 md:space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold"
            >
              <span className="text-gray-100">Yves Monem</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 rounded-full bg-gradient-to-r from-accent-500 to-primary-500 flex items-center justify-center"
              >
                <Cpu className="w-4 h-4 text-white" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gradient">
                Blockchain Frontend Developer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed"
            >
              Building user-friendly decentralized applications that merge
              creativity and logic.
            </motion.p>
          </motion.div>

          {/* Right Content - AI Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <ProfileAvatar />
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex items-center justify-center gap-6 pt-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-gray-700 bg-gray-900/50 hover:border-accent-500 hover:bg-accent-500/10 transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6 text-gray-400 group-hover:text-accent-400 transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="pt-16 text-center"
        >
          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex flex-col items-center gap-2 text-gray-400 hover:text-accent-400 transition-colors cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
