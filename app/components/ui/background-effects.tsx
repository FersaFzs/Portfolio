'use client';

import { motion } from 'framer-motion';

export function BackgroundEffects() {
  return (
    <>
      {/* Gradiente base con efecto iridiscente */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Círculos decorativos con efecto iridiscente */}
      <motion.div
        className="fixed top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-white/20 via-white/10 to-white/5 dark:from-white/30 dark:via-white/20 dark:to-white/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-white/5 via-white/10 to-white/20 dark:from-white/10 dark:via-white/20 dark:to-white/30 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid de puntos con efecto iridiscente */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Efecto de brillo iridiscente */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
    </>
  );
} 