'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend } from 'react-icons/fi';
import { GradientButton } from '../ui/gradient-button';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Reemplazar con tu Service ID de EmailJS
        'YOUR_TEMPLATE_ID', // Reemplazar con tu Template ID de EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Tu Nombre', // Reemplazar con tu nombre
          reply_to: formData.email,
        },
        'YOUR_PUBLIC_KEY' // Reemplazar con tu Public Key de EmailJS
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setError('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      console.error('Error sending email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="snap-section relative min-h-screen flex items-center justify-center overflow-hidden">
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="iridescent-text">Contacto</span>
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <motion.div
              className="text-center p-8 rounded-xl bg-primary/5 border border-primary/10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-primary">¡Gracias por tu mensaje!</h3>
              <p className="text-secondary">Te responderé lo antes posible.</p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {error && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
                  {error}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border-2 border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground transition-all duration-300 hover:border-primary/50 focus:shadow-[0_0_15px_rgba(var(--primary),0.3)] dark:focus:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border-2 border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground transition-all duration-300 hover:border-primary/50 focus:shadow-[0_0_15px_rgba(var(--primary),0.3)] dark:focus:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-background border-2 border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground transition-all duration-300 hover:border-primary/50 focus:shadow-[0_0_15px_rgba(var(--primary),0.3)] dark:focus:shadow-[0_0_15px_rgba(255,255,255,0.2)] resize-none"
                  required
                  disabled={isLoading}
                />
              </div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <GradientButton type="submit">
                  <span>Enviar mensaje</span>
                  <FiSend className="w-5 h-5" />
                </GradientButton>
              </motion.div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
} 