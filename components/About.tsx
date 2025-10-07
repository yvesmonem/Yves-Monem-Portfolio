"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900/30"
    >
      <div className="max-w-5xl mx-auto">
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
              About Me
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"
            />
          </div>

          {/* Biography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12 glow-border-hover"
          >
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-6">
              <span className="block">
                I&apos;m a{" "}
                <span className="text-accent-400 font-semibold">
                  Web3 Frontend Developer
                </span>{" "}
                who started building{" "}
                <span className="text-primary-400 font-semibold">dApps</span>{" "}
                with a blockchain startup for over a year. I&apos;ve learned to
                combine{" "}
                <span className="text-accent-400 font-semibold">
                  frontend creativity
                </span>{" "}
                with{" "}
                <span className="text-primary-400 font-semibold">
                  backend logic
                </span>
                .
              </span>

              <span className="block">
                Working in a{" "}
                <span className="text-accent-400 font-semibold">
                  startup environment
                </span>{" "}
                accelerated my growth more than any classroom or online course
                could; at Andromeda, I wasn&apos;t given small isolated tasks. I was
                given{" "}
                <span className="text-primary-400 font-semibold">
                  full responsibility
                </span>{" "}
                over real products that people would actually use.
              </span>

              <span className="block">
                The{" "}
                <span className="text-accent-400 font-semibold">fast pace</span>{" "}
                forced me to learn quickly, think independently, and write{" "}
                <span className="text-primary-400 font-semibold">
                  production-level code
                </span>
                . There was no room for quick hacks or relying on someone else
                to fix things later. If something broke, I had to figure it out.
                If something was unclear, I had to research and decide. If
                something could be better, I was expected to improve it without
                waiting for instructions.
              </span>

              <span className="block">
                More than just coding, I learned{" "}
                <span className="text-accent-400 font-semibold">ownership</span>
                ,{" "}
                <span className="text-primary-400 font-semibold">
                  problem-solving under pressure
                </span>
                , and how to build features that work in{" "}
                <span className="text-accent-400 font-semibold">
                  real-world environments
                </span>
                , not just in theory. That experience turned me from a learner
                into a{" "}
                <span className="text-gradient font-bold">
                  developer who can deliver
                </span>
                .
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
