import { motion } from 'framer-motion';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Card } from '@/components/ui/card';
import { BarChart3, Code, Database, UserCheck, Wrench } from 'lucide-react';

const skills = [
  {
    category: 'Programming & Analysis',
    icon: Code,
    items: ['Python', 'SQL', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    category: 'Machine Learning',
    icon: Database,
    items: ['Scikit-Learn', 'Regression', 'Classification', 'Clustering', 'Model Evaluation', 'Feature Engineering'],
  },
  {
    category: 'Data Visualization',
    icon: BarChart3,
    items: ['Power BI', 'Tableau', 'Excel Analytics', 'Data Cleaning', 'Dashboard Design'],
  },
  {
    category: 'Tools & Environment',
    icon: Wrench,
    items: ['Jupyter Notebook', 'VS Code', 'Git', 'Google Colab','Anaconda','MySQL / PostgreSQL','Excel'],
  },
  {
    category: 'Soft Skills & Strengths',
    icon: UserCheck,
    items: [
      'Problem Solving',
      'Analytical Thinking',
      'Critical Thinking',
      'Team Collaboration',
      'Communication Skills',
      'Continuous Learning',
      'Time Management',
    ],
  },
];

const skillLevels: Record<string, 'Beginner' | 'Intermediate' | 'Advanced'> = {
  Python: 'Advanced',
  SQL: 'Advanced',
  Pandas: 'Advanced',
  NumPy: 'Advanced',
  Matplotlib: 'Intermediate',
  Seaborn: 'Intermediate',
  'Scikit-Learn': 'Advanced',
  Regression: 'Advanced',
  Classification: 'Advanced',
  Clustering: 'Intermediate',
  'Model Evaluation': 'Advanced',
  'Feature Engineering': 'Advanced',
  'Power BI': 'Advanced',
  Tableau: 'Intermediate',
  'Excel Analytics': 'Advanced',
  'Data Cleaning': 'Advanced',
  'Dashboard Design': 'Intermediate',
  'Jupyter Notebook': 'Advanced',
  'VS Code': 'Advanced',
  Git: 'Intermediate',
  'Google Colab': 'Advanced',
  Anaconda: 'Advanced',
  'MySQL / PostgreSQL': 'Intermediate',
  Excel: 'Advanced',
  'Problem Solving': 'Advanced',
  'Analytical Thinking': 'Advanced',
  'Critical Thinking': 'Advanced',
  'Team Collaboration': 'Intermediate',
  'Communication Skills': 'Intermediate',
  'Continuous Learning': 'Advanced',
  'Time Management': 'Intermediate',
};



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

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, rotateY: 2 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card className="glass p-6 h-full relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-primary glow-text">
                        {skillGroup.category}
                      </h3>
                    </div>
                    
                    <div className="space-y-4">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          className="group/item"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                          whileHover={{ x: 10 }}
                        >
                          <div className="flex items-center justify-between gap-3 p-3 rounded-lg glass group-hover/item:bg-primary/10 transition-colors">
                            <div className="flex items-center gap-3">
                              <motion.div
                                className="w-2 h-2 rounded-full bg-primary"
                                animate={{ 
                                  scale: [1, 1.5, 1],
                                  boxShadow: [
                                    '0 0 0 0 hsl(var(--primary) / 0.7)',
                                    '0 0 0 10px hsl(var(--primary) / 0)',
                                    '0 0 0 0 hsl(var(--primary) / 0)',
                                  ]
                                }}
                                transition={{ repeat: Infinity, duration: 2, delay: skillIndex * 0.2 }}
                              />
                              <span className="text-lg group-hover/item:text-primary transition-colors">
                                {skill}
                              </span>
                            </div>
                            {skillGroup.category !== 'Soft Skills & Strengths' && (
                              <span className="px-2.5 py-1 text-xs rounded-full glass text-muted-foreground group-hover/item:text-primary">
                                {skillLevels[skill] ?? 'Intermediate'}
                              </span>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
