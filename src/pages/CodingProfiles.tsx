import { motion } from 'framer-motion';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const profiles = [
  {
    name: 'GitHub',
    username: '@iamnaveen1401',
    stats: '100+ repositories',
    link: 'https://github.com/iamnaveen1401',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'LeetCode',
    username: 'yourusername',
    stats: '500+ problems solved',
    link: 'https://leetcode.com',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    name: 'HackerRank',
    username: 'yourusername',
    stats: '5⭐ in Problem Solving',
    link: 'https://hackerrank.com',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'CodeChef',
    username: 'yourusername',
    stats: '4⭐ rating',
    link: 'https://codechef.com',
    color: 'from-blue-500 to-cyan-500',
  },
];

export default function CodingProfiles() {
  return (
    <main className="min-h-screen pt-32 pb-20 relative">
      <ParticleBackground />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-12 text-center glow-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Coding Profiles
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="glass p-8 h-full relative overflow-hidden group">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                />
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-2 glow-text">{profile.name}</h2>
                  <p className="text-muted-foreground mb-2">{profile.username}</p>
                  <p className="text-lg text-primary mb-6">{profile.stats}</p>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button asChild className="w-full group-hover:animate-pulse-glow">
                      <a
                        href={profile.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Profile
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
