import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const experience = [
  {
    title: 'Machine Learning Intern',
    company: 'TechCiti Software Company',
    period: 'Aug 2024 - Nov 2024',
    description: 'Supported the machine learning pipeline by handling data preprocessing, model training, and performance tuning.',
  },
  {
    title: 'Artificial Intelligence & Machine Learning Intern',
    company: 'Edify Techno Solutions',
    period: 'Feb 2023',
    description: 'Applied basic AI and ML techniques to small-scale projects for concept understanding and practical exposure.',
  },
];

const education = [
  {
    degree: 'Bachelor of Technology - Computer Technology',
    school: 'Bannari Amman Institute of Technology',
    period: '2021 - 2025',
    percentage: '71.23%',
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
          <a
            href="/Naveen_M_Resume.pdf"
            download="Naveen_M_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="animate-pulse-glow inline-flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </a> 
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
            <h2 className="text-3xl font-bold glow-text">Internships</h2>
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
          className="mb-12"
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
                  <div className="text-muted-foreground">Percentage: {edu.percentage}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certification Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold glow-text">Certification</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Card className="glass p-6">
              <h3 className="text-xl font-bold text-primary mb-2">Data Science & Machine Learning</h3>
              <div className="text-muted-foreground mb-3">
                Entri Elevate, Illinois Tech USA • Aug 2024 - Jun 2025
              </div>
              <div className="mb-3 text-sm text-muted-foreground">
                Credential ID: <span className="font-medium">7KOHOII-GVIU</span>
              </div>
              <a
                href="https://certificate.entri.app/?ref=7KOHOII-GVIU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary underline underline-offset-4 hover:text-primary/80 transition-colors mb-4"
              >
                View Certificate
              </a>

              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Covered data analysis, machine learning, statistics, MySQL, Python, Power BI, and Excel.</li>
                <li>Hands-on projects on real-world data with a focus on implementation and reporting.</li>
              </ul>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
