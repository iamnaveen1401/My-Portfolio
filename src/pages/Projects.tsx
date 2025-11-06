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
    title: 'Prediction of Smartphone Addiction using ML',
    description: 'A machine learning model that predicts smartphone addiction levels based on user behavior data, screen time, and activity patterns.',
    image: project1,
    tags: ['React', "Python", "Scikit-learn", "Pandas", "Matplotlib", 'CSS'],
    github: 'https://github.com/iamnaveen1401/Prediction-of-Smartphone-Addiction-using-Machine-Learning',
  },
  {
    title: 'E-Commerce Customer Churn Analysis using MySQL',
    description: 'A MySQL-based project analyzing customer churn patterns to improve retention and business performance.',
    image: project2,
    tags: ["MySQL", "Data Cleaning", "Exploratory Analysis", "Customer Retention"],
    github: 'https://github.com/iamnaveen1401/E-Commerce-Customer-Churn-Analysis-Using-MySql',
  },
  {
    title: 'Amazon Review Prediction using Naive Bayes',
    description: 'A machine learning project that predicts the sentiment of Amazon product reviews using Multinomial and Bernoulli Naive Bayes models.',
    image: project3,
    tags: ["Python", "Scikit-learn", "Seaborn","Pandas", "Naive Bayes"],
    github: 'https://github.com/iamnaveen1401/Amazon-Review-Prediction-Using-Multinomial-Bernoulli-Naive-Bayes',

  },
  {
    title: 'Customer Churn Prediction',
    description: 'End-to-end ML pipeline to predict churn with model monitoring and dashboards.',
    image: project1,
    tags: ['Python', 'scikit-learn', 'FastAPI'],
    github: 'https://github.com',

  },
  {
    title: 'NLP Insights Explorer',
    description: 'Topic modeling and semantic search over documents with interactive visualizations.',
    image: project2,
    tags: ['NLP', 'PyTorch', 'React'],
    github: 'https://github.com',

  },
  {
    title: 'Sales Forecasting Suite',
    description: 'Time-series forecasting with feature store and experiment tracking.',
    image: project3,
    tags: ['Time Series', 'XGBoost', 'MLflow'],
    github: 'https://github.com',

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
          Projects
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
