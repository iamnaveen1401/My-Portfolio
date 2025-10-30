import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const articles = [
  {
    title: 'Building Immersive 3D Experiences with Three.js',
    excerpt: 'Learn how to create stunning 3D web experiences using Three.js and React Three Fiber.',
    date: 'Mar 15, 2024',
    readTime: '8 min read',
    tags: ['Three.js', 'React', 'WebGL'],
  },
  {
    title: 'Advanced Animation Techniques with Framer Motion',
    excerpt: 'Dive deep into advanced animation patterns and best practices for React applications.',
    date: 'Mar 10, 2024',
    readTime: '6 min read',
    tags: ['Framer Motion', 'Animation', 'React'],
  },
  {
    title: 'Optimizing Performance in Modern Web Apps',
    excerpt: 'Essential tips and tricks for building fast and responsive web applications.',
    date: 'Mar 5, 2024',
    readTime: '10 min read',
    tags: ['Performance', 'Optimization', 'Web Dev'],
  },
];

export default function Articles() {
  return (
    <main className="min-h-screen pt-32 pb-20 relative">
      <ParticleBackground />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-12 text-center glow-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Featured Articles
        </motion.h1>

        <div className="space-y-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ x: 10 }}
            >
              <Card className="glass p-8 group cursor-pointer">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3 text-primary group-hover:glow-text transition-all">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-sm rounded-full glass">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Button variant="ghost" size="icon" className="group-hover:animate-pulse-glow">
                      <ArrowRight className="w-6 h-6" />
                    </Button>
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
