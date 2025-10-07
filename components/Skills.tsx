"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      name: "React",
      category: "frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      category: "frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "TypeScript",
      category: "language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "JavaScript",
      category: "language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "TailwindCSS",
      category: "styling",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Rust",
      category: "language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
    },
    {
      name: "Python",
      category: "language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "C++",
      category: "language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "from-primary-500 to-primary-700";
      case "language":
        return "from-accent-500 to-accent-700";
      case "styling":
        return "from-pink-500 to-pink-700";
      case "web3":
        return "from-cyan-500 to-cyan-700";
      default:
        return "from-gray-500 to-gray-700";
    }
  };

  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gradient mb-4"
            >
              Skills & Technologies
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"
            />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8 text-center transition-all duration-300 hover:border-transparent glow-border-hover">
                  {/* Technology Logo */}
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg border border-gray-700/50">
                    <Image
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      width={48}
                      height={48}
                      className="w-12 h-12 md:w-14 md:h-14 object-contain"
                    />
                  </div>
                  <h3 className="text-gray-100 font-semibold text-base md:text-lg">
                    {skill.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
