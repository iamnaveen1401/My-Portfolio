import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap } from 'lucide-react';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const experience = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: 'Leading development of enterprise web applications using React and Node.js.',
  },
  {
    title: 'Frontend Developer',
    company: 'Startup Inc',
    period: '2020 - 2022',
    description: 'Built responsive web applications and implemented modern UI/UX designs.',
  },
];

const education = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'University Name',
    period: '2016 - 2020',
  },
];

export default function Resume() {
  return (
    <main className="min-h-screen pt-32 pb-20 relative">
      <ParticleBackground />

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">Resume</h1>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="animate-pulse-glow">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold glow-text">Experience</h2>
          </div>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="glass p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{exp.title}</h3>
                  <div className="text-muted-foreground mb-2">
                    {exp.company} • {exp.period}
                  </div>
                  <p className="leading-relaxed">{exp.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold glow-text">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Card className="glass p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{edu.degree}</h3>
                  <div className="text-muted-foreground">
                    {edu.school} • {edu.period}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
