"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Zap, Cpu, Globe, Shield } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const billSplitterFeatures = [
    {
      icon: Zap,
      title: "Instant Distribution",
      description: "One-click splitting functionality with real-time execution",
    },
    {
      icon: Cpu,
      title: "Advanced Strategies",
      description: "Percentage-based, weighted, waterfall, and liquid splits",
    },
    {
      icon: Globe,
      title: "Multi-Chain Support",
      description: "Andromeda, Osmosis, and WASM devnets with native tokens",
    },
    {
      icon: Shield,
      title: "Smart Contracts",
      description: "Built on CosmWasm with Andromeda Digital Objects (ADOs)",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900/30"
    >
      <div className="max-w-7xl mx-auto">
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
              Featured Project
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6"
            />
          </div>

          {/* Bill Splitter Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 md:p-12 transition-all duration-300 glow-border-hover"
          >
            {/* Project Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent-500 to-primary-500 rounded-2xl flex items-center justify-center"
              >
                <Zap className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                Bill Splitter App
              </h3>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6">
                Split expenses and manage group payments seamlessly with this
                blockchain-based platform. Built on the Andromeda Protocol, it
                transforms complex fund management into an intuitive experience.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {[
                  "Andromeda Protocol",
                  "CosmWasm",
                  "TRPC",
                  "Next.js",
                  "TypeScript",
                  "Keplr Wallet",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm bg-primary-500/10 text-primary-300 rounded-full border border-primary-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Demo Button */}
              <motion.a
                href="https://bill-splitting-five.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-600 to-primary-600 hover:from-accent-500 hover:to-primary-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
                View Live Demo
              </motion.a>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {billSplitterFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                  }
                  transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                  className="flex items-start gap-4 p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-100 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Project Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="mt-8 p-6 bg-gray-800/20 rounded-2xl border border-gray-700/30"
            >
              <p className="text-gray-300 leading-relaxed">
                This blockchain-based platform simplifies the distribution of
                funds across multiple recipients through an elegant, dark-themed
                interface. It supports everything from simple percentage-based
                splits to advanced hierarchical structures like waterfall and
                liquid splits, making it suitable for DAOs, investment groups,
                and teams managing shared resources.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
