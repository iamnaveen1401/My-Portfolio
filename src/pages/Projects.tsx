import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';

const projects = [
  {
    title: 'Analytics Dashboard',
    description: 'A modern analytics platform with real-time data visualization and interactive charts.',
    image: project1,
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'AI Mobile App',
    description: 'Machine learning powered mobile application with neural network visualizations.',
    image: project2,
    tags: ['React Native', 'TensorFlow', 'Python'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with secure payments and inventory management.',
    image: project3,
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen pt-32 pb-20 relative">
      <ParticleBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-12 text-center glow-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Featured Projects
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="glass overflow-hidden group h-full flex flex-col">
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-2">
                    <Button size="sm" className="animate-fade-in">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                    <Button size="sm" variant="outline" className="glass">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 text-primary">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full glass"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
