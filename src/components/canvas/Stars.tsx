'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { inSphere } from 'maath/random';

type StarsProps = {
  color?: string;
  size?: number;
  radius?: number;
};

export const Stars: React.FC<StarsProps> = ({ color = "#003366", size = 0.025, radius = 2.5 }) => {
  const ref = useRef<THREE.Group>(null);
  const [sphere, setSphere] = useState<Float32Array | null>(null);

  useEffect(() => {
    const positions = inSphere(new Float32Array(5000), { radius }) as Float32Array;
    if (positions.some(isNaN)) {
      console.error("Generated positions contain NaN values");
    } else {
      setSphere(positions);
    }
  }, [radius]);

  if (!sphere) return null;

  return (
    <Canvas>
      <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
        <Points positions={sphere} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color={color}
            size={size}
            sizeAttenuation
            depthWrite={false}
          />
        </Points>
      </group>
      <FrameUpdater groupRef={ref} />
    </Canvas>
  );
};

const FrameUpdater = ({ groupRef }: { groupRef: React.RefObject<THREE.Group> }) => {
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x -= delta / 10;
      groupRef.current.rotation.y -= delta / 15;
    }
  });
  return null;
};