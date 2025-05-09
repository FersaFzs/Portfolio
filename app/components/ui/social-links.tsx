'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

export function SocialLinks() {
  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      <motion.a
        href="https://github.com/fersafzs"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiGithub className="w-5 h-5" />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/fersafzs/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiLinkedin className="w-5 h-5" />
      </motion.a>
      <motion.a
        href="https://www.instagram.com/fersa.outofcontext/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiInstagram className="w-5 h-5" />
      </motion.a>
    </div>
  );
} 