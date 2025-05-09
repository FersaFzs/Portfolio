'use client';

import { motion } from 'framer-motion';

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Java',
  'C++',
  'MySQL',
  'Firebase',
  'CSS',
  'HTML',
  'Docker',
  'Git',
  'UX/UI'
];

export function About() {
  return (
    <section id="about" className="relative py-16 md:py-20">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-bl from-primary/5 to-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-primary/5 to-primary/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [-45, 0, -45],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12 md:py-0">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="iridescent-text">Sobre</span>{' '}
          <span className="iridescent-text">Mí</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Mi Experiencia</h3>
            <p className="text-muted-foreground mb-6">
            Apasionado del desarrollo web con una visión integral que combina funcionalidad y experiencia de usuario. Me especializo en crear interfaces limpias, intuitivas y eficientes, siempre con el objetivo de que cada proyecto no solo funcione bien, sino que también se sienta natural al usarlo. Domino HTML, CSS, JavaScript y React, y me esfuerzo por mantenerme al día con las últimas tendencias en diseño UX/UI para ofrecer soluciones modernas y bien pensadas.
            </p>
            <p className="text-muted-foreground">
            Creo firmemente que el diseño y el desarrollo deben ir de la mano, por eso disfruto tanto programar como diseñar. Trabajo con herramientas como Figma para prototipar ideas claras y centradas en el usuario, y luego las convierto en productos funcionales con código. Me interesa especialmente crear experiencias web que sean accesibles, atractivas y adaptadas a las personas reales que las usan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pb-8 md:pb-0"
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Habilidades Técnicas</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="p-3 rounded-lg bg-primary/5 border border-primary/10 text-center transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-background cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 