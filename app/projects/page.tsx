'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

const projects = [
  {
    title: 'Portfolio Personal',
    description: 'Mi portfolio personal construido con Next.js, TypeScript y Tailwind CSS.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/tuusuario/portfolio',
    demo: 'https://tudominio.com',
    image: '/images/projects/portfolio.png',
    showCode: true,
    showDemo: true
  },
  {
    title: 'Prototipo de E-commerce',
    description: 'Prototipo de app móvil de comercio electrónico y delivery con enfoque en la experiencia de usuario y diseño intuitivo.',
    technologies: ['Figma', 'UX', 'UI'],
    demo: 'https://www.figma.com/proto/xrXiVDQBv1UR5PiY0C8S3t/Proyecto-clase-OASIS-APP?node-id=3-433&t=3mOWc5NwgEdPqClx-1',
    image: '/images/projects/proyecto1/thumbnail.png',
    showCode: false,
    showDemo: true
  },
  {
    title: 'Mini Red Social',
    description: 'Intento de red social web sencilla para usar en una red local, con funcionalidades básicas de publicación y comentarios.',
    technologies: ['React.js', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/tuusuario/task-manager',
    demo: 'https://tudominio.com/tasks',
    image: '/images/projects/social.png',
    showCode: true,
    showDemo: true
  },
  {
    title: 'Prácticas Empresariales en Aircury',
    description: 'Prácticas durante la formación dual en la empresa Aircury, realizando un prqueño proyecto de app web.',
    technologies: ['Next.js', 'Docker', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Figma'],
    image: '/images/projects/design.png',
    showCode: false,
    showDemo: false
  },
  {
    title: 'Typing Test',
    description: 'Juego de prueba de velocidad de escritura con generación de texto aleatorio.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/tuusuario/management-system',
    demo: 'https://typingtestfersa.netlify.app/',
    image: '/images/projects/management.png',
    showCode: true,
    showDemo: true
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-8 md:mb-12">
          <motion.div 
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-foreground text-background hover:bg-primary transition-all duration-300 hover:scale-105"
            >
              <FiArrowLeft className="w-5 h-5" />
              <span>Volver</span>
            </Link>
          </motion.div>
        </div>

        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-12 text-center mt-16 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="iridescent-text">Todos</span>{' '}
          <span className="iridescent-text">los</span>{' '}
          <span className="iridescent-text">Proyectos</span>
        </motion.h1>

        <div className="relative w-full">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-8 pb-8" style={{ width: 'max-content' }}>
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="w-[400px] flex-shrink-0"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="group relative bg-card-bg border border-card-border rounded-xl overflow-hidden hover-lift h-full">
                    <div className="relative aspect-video overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                      <p className="text-foreground/80 dark:text-foreground mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/30 text-foreground dark:text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-4">
                        {project.showCode && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background hover:bg-primary transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FiGithub className="w-5 h-5" />
                            <span>Código</span>
                          </motion.a>
                        )}
                        {project.showDemo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 hover:bg-primary/5 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FiExternalLink className="w-5 h-5 text-primary" />
                            <span className="iridescent-text">Demo</span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 