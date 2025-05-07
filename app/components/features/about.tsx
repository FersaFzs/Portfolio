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
    <section id="about" className="snap-section relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32 md:pt-0 md:pb-0">
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
              Soy un desarrollador Full Stack con experiencia en la creación de aplicaciones web modernas y escalables. 
              Me especializo en el desarrollo de soluciones robustas utilizando las últimas tecnologías y mejores prácticas.
            </p>
            <p className="text-muted-foreground">
              Mi enfoque se centra en crear experiencias de usuario excepcionales mientras mantengo un código limpio y mantenible.
              Estoy constantemente aprendiendo y adaptándome a nuevas tecnologías para ofrecer las mejores soluciones.
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