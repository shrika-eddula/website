import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Grid() {
  const gridRef = useRef<THREE.GridHelper>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (gridRef.current) {
      gridRef.current.position.y = -2 + mousePosition.current.y * 0.5;
      gridRef.current.rotation.x = 1.5 + mousePosition.current.y * 0.05;
    }
  });

  return (
    <group>
      <gridHelper
        ref={gridRef}
        args={[30, 30]}
        position={[0, -2, 0]}
        rotation={[1.5, 0, 0]}
      >
        <meshBasicMaterial attach="material" color="#4338ca" opacity={0.2} transparent />
      </gridHelper>
      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
    </group>
  );
}

export const GridBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas
        camera={{ position: [0, 5, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Grid />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};