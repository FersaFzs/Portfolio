'use client';

import { motion } from 'framer-motion';
import { cn } from '@/app/utils/cn';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={cn(
        'min-h-screen w-full snap-start snap-always flex items-center justify-center',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 py-16">
        {children}
      </div>
    </motion.section>
  );
} 