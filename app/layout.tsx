import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './context/theme-context';
import { ThemeToggle } from './components/ui/theme-toggle';
import { Navigation } from './components/layout/navigation';
import { SocialLinks } from './components/ui/social-links';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Fersa | Desarrollador Web',
  description: 'Portfolio personal de Fersa, desarrollador web especializado en diseño y desarrollo UX/UI.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased font-sans">
        <ThemeProvider>
          <Navigation />
          <ThemeToggle />
          <SocialLinks />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
