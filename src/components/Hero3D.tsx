import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

function AnimatedSphere() {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#00d9ff"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0}
        />
      </Sphere>
    </Float>
  );
}

export const Hero3D = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-[600px]"
    >
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </motion.div>
  );
};
