"use client";
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, TorusKnot, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function MetallicObject() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float 
      speed={2} 
      rotationIntensity={1} 
      floatIntensity={2}
      floatingRange={[-0.2, 0.2]}
    >
      <TorusKnot args={[1.2, 0.4, 256, 32]} ref={meshRef}>
        <meshPhysicalMaterial 
          color="#d4d4d8"
          roughness={0.1}
          metalness={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={2}
        />
      </TorusKnot>
    </Float>
  );
}

export default function ThreeScene() {
  return (
    <Canvas style={{ pointerEvents: 'none' }}>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={35} />
      
      {/* Studio Lighting */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} intensity={2} penumbra={1} castShadow />
      
      {/* High Quality Reflections */}
      <Environment preset="studio" />
      
      <MetallicObject />

      <ContactShadows 
        position={[0, -2.5, 0]} 
        opacity={0.4} 
        scale={10} 
        blur={2} 
        far={4} 
      />
    </Canvas>
  );
}
