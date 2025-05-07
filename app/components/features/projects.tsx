'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
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
    title: 'Diseño de Interfaz',
    description: 'Conjunto de diseños de interfaces para diferentes aplicaciones, enfocados en la accesibilidad y la experiencia de usuario.',
    technologies: ['Figma', 'UI/UX', 'Prototipado'],
    image: '/images/projects/design.png',
    showCode: false,
    showDemo: false
  },
  {
    title: 'Sistema de Gestión',
    description: 'Sistema interno de gestión para pequeñas empresas, con módulos de inventario, ventas y reportes.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/tuusuario/management-system',
    demo: 'https://typingtestfersa.netlify.app/',
    image: '/images/projects/management.png',
    showCode: true,
    showDemo: true
  }
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-primary/5 to-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tl from-primary/5 to-primary/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [45, 0, 45],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="iridescent-text">Proyectos</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-card-bg border border-card-border rounded-xl overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
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
            </motion.div>
          ))}
        </div>

        <div className="mt-8 mb-12">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-foreground text-background hover:bg-primary transition-all duration-300 hover:scale-105"
            >
              <span>Ver Todos los Proyectos</span>
              <FiExternalLink className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 