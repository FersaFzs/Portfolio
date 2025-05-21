'use client';

import { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import dynamic from 'next/dynamic';

// Componente de partículas
function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

// Componente principal con carga dinámica
const DynamicCanvas = dynamic(() => Promise.resolve(Canvas), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-black" />
});

export function Background3D() {
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    const isLowEnd = !window.matchMedia('(min-width: 1024px)').matches || 
                    navigator.hardwareConcurrency <= 4;
    setIsLowPerformance(isLowEnd);
  }, []);

  if (isLowPerformance) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      <DynamicCanvas
        camera={{ position: [0, 0, 1] }}
        style={{
          background: 'linear-gradient(to bottom, #000000, #1a1a1a)'
        }}
      >
        <ParticleField />
      </DynamicCanvas>
    </div>
  );
} 