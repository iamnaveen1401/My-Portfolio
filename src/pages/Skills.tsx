import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Text3D, Center } from '@react-three/drei';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Card } from '@/components/ui/card';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code'],
  },
];

function Skill3D({ text }: { text: string }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Center>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.2}
          curveSegments={12}
        >
          {text}
          <meshStandardMaterial color="#00d9ff" />
        </Text3D>
      </Center>
    </Float>
  );
}

export default function Skills() {
  return (
    <main className="min-h-screen pt-32 pb-20 relative">
      <ParticleBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-12 text-center glow-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Skills & Technologies
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="glass p-6 h-full">
                <h3 className="text-2xl font-bold mb-6 text-primary glow-text">
                  {skillGroup.category}
                </h3>
                <div className="space-y-4">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <div className="flex items-center gap-3">
                        <motion.div
                          className="w-2 h-2 rounded-full bg-primary"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ repeat: Infinity, duration: 2, delay: skillIndex * 0.2 }}
                        />
                        <span className="text-lg group-hover:text-primary transition-colors">
                          {skill}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="h-[400px] rounded-2xl overflow-hidden glass"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Skill3D text="React" />
          </Canvas>
        </motion.div>
      </div>
    </main>
  );
}
