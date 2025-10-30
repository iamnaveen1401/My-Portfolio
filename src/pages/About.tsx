import { motion } from 'framer-motion';
import { ParticleBackground } from '@/components/ParticleBackground';

export default function About() {
  return (
    <main className="min-h-screen pt-32 pb-20 relative">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-8 glow-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            About Me
          </motion.h1>

          <motion.div
            className="glass p-8 rounded-2xl space-y-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              I'm a passionate developer with expertise in building modern web applications
              using cutting-edge technologies. My journey in tech started with a curiosity
              for how things work under the hood, which evolved into a career creating
              immersive digital experiences.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              With a strong foundation in React, Three.js, and modern web technologies,
              I specialize in creating visually stunning and performant applications.
              I believe in writing clean, maintainable code and staying up-to-date with
              the latest industry trends.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              When I'm not coding, you can find me exploring new technologies, contributing
              to open-source projects, or sharing my knowledge through technical articles
              and tutorials.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '3+', label: 'Years Experience' },
              { number: '100K+', label: 'Lines of Code' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-primary mb-2 glow-text">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
