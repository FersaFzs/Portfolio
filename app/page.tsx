'use client';

import { Section } from './components/layout/section';
import { Navigation } from './components/layout/navigation';
import { Hero } from './components/features/hero';
import { About } from './components/features/about';
import { Projects } from './components/features/projects';
import { Contact } from './components/features/contact';
import { Background3D } from './components/features/background3d';

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory relative">
      <Background3D />
      <Navigation />
      <Section id="hero">
        <Hero />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </main>
  );
}
