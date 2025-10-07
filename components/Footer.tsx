"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <div className="text-gray-400 text-sm md:text-base text-center md:text-left">
            <p>© 2025 Yves Monem. All rights reserved.</p>
          </div>

          {/* Built with */}
          <div className="flex items-center gap-2 text-gray-400 text-sm md:text-base">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-accent-500 fill-accent-500" />
            <span>using</span>
            <span className="text-gradient font-semibold">Next.js</span>
            <span>&</span>
            <span className="text-gradient font-semibold">TailwindCSS</span>
          </div>
        </motion.div>

        {/* Back to top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-center"
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-accent-400 hover:text-accent-300 transition-colors text-sm font-medium"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to top ↑
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
