"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Zap } from "lucide-react";

const ProfileAvatar = () => {
  return (
    <div className="relative">
      {/* AI Glow Effect */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-500/20 to-primary-500/20 blur-2xl"
      />

      {/* Profile Image Container */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-accent-500 bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl"
      >
        {/* Graduation Photo */}
        <Image
          src="/graduation-photo.jpg"
          alt="Yves Monem - Blockchain Developer"
          fill
          className="object-cover"
          style={{ objectPosition: "center 25%" }}
          priority
        />

        {/* AI Overlay Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-accent-500/10 to-transparent" />

        {/* Floating AI Icons */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-4 right-4 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center shadow-lg"
        >
          <Zap className="w-4 h-4 text-white" />
        </motion.div>

        <motion.div
          animate={{ y: [10, -10, 10], rotate: [0, -5, 5, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-4 left-4 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center shadow-lg"
        >
          <Cpu className="w-4 h-4 text-white" />
        </motion.div>
      </motion.div>

      {/* Data Stream Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute -top-4 -right-4 w-32 h-32 pointer-events-none"
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut",
            }}
            className="absolute w-1 h-4 bg-gradient-to-t from-accent-500 to-primary-500 rounded-full"
            style={{
              left: `${i * 20}px`,
              top: "100%",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ProfileAvatar;
