'use client';

import { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import dynamic from 'next/dynamic';

// Componente de partículas optimizado
function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => {
    const positions = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return positions;
  });

  // Detectar el tema actual
  const [particleColor, setParticleColor] = useState('#e5e5e7'); // Color por defecto

  useEffect(() => {
    const updateColor = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setParticleColor(isDark ? '#e5e5e7' : '#424245');
    };

    // Observador para cambios en el tema
    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // Color inicial
    updateColor();

    return () => observer.disconnect();
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={particleColor}
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

// Componente principal con carga dinámica y optimización
const DynamicCanvas = dynamic(() => Promise.resolve(Canvas), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-background" />
});

export function Background3D() {
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Detección más precisa de dispositivos de bajo rendimiento
    const isLowEnd = 
      // Solo dispositivos muy antiguos o con muy poca memoria
      (navigator.hardwareConcurrency <= 2) || 
      // Dispositivos con poca memoria (con verificación de tipo)
      ('deviceMemory' in navigator && (navigator as any).deviceMemory <= 2) ||
      // Dispositivos con pantallas muy pequeñas
      window.innerWidth < 320;
    setIsLowPerformance(isLowEnd);
  }, []);

  if (!isMounted || isLowPerformance) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      <DynamicCanvas
        camera={{ position: [0, 0, 1] }}
        style={{
          background: 'transparent'
        }}
        dpr={[0.5, 1.5]} // DPR más bajo para móviles
        performance={{ min: 0.3 }} // Rendimiento más bajo para móviles
      >
        <ParticleField />
      </DynamicCanvas>
    </div>
  );
} 