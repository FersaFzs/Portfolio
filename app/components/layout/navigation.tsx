'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { usePathname } from 'next/navigation';

const sections = [
  { id: 'hero', label: 'Inicio' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' },
];

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/fernandosarabia', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/fernando-sarabia/', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://www.instagram.com/fernandosarabia.dev/', label: 'Instagram' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Resetear el estado cuando cambie la ruta
  useEffect(() => {
    if (pathname === '/') {
      // Pequeño delay para asegurar que el observer no interfiera
      const timer = setTimeout(() => {
        setActiveSection('hero');
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0,
    };

    let currentSection = 'hero';

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentSection = entry.target.id;
        }
      });
      // Solo actualizar si la sección ha cambiado
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Navegación móvil */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-card-border shadow-lg"
        >
          {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-sm"
        >
          <div className="flex flex-col items-center justify-center h-full">
            {/* Enlaces de navegación */}
            <div className="flex flex-col items-center space-y-10 mb-20">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-3xl font-medium hover:text-primary transition-colors"
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* Separador */}
            <div className="w-24 h-px bg-foreground/20 mb-12" />

            {/* Enlaces sociales */}
            <div className="flex flex-col items-center space-y-6">
              <h3 className="text-lg font-medium text-foreground/60 mb-2">Redes Sociales</h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/fernandosarabia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/fernando-sarabia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/fernandosarabia.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Navegación de escritorio */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col items-center space-y-6">
          {sections.map((section) => (
            <div key={section.id} className="indicator-container group">
              <button
                onClick={() => scrollToSection(section.id)}
                className="relative w-3 h-3 rounded-full transition-all duration-300"
                aria-label={section.label}
              >
                <span className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  activeSection === section.id 
                    ? 'bg-foreground scale-100 shadow-[0_0_15px_rgba(0,0,0,0.9)] dark:shadow-[0_0_15px_rgba(255,255,255,0.8)]' 
                    : 'bg-foreground/20 scale-100'
                }`} />
              </button>
              <span className="indicator-label">
                {section.label}
              </span>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
} 