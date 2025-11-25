import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ExternalLink, Github, Database } from 'lucide-react';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';
import project4 from '@/assets/project4.jpg';
import project5 from '@/assets/project5.jpg';
import project6 from '@/assets/project6.jpg';

const projects: { title: string; description: string; image: string; tags: string[]; github: string; dataset?: string; Live?: string }[] = [
  {
    title: 'Prediction of Smartphone Addiction using ML',
    description: 'A machine learning model that predicts smartphone addiction levels based on user behavior data, screen time, and activity patterns.',
    image: project1,
    tags: ['React', "Python", "Scikit-learn", "Pandas", "Matplotlib", 'CSS'],
    github: 'https://github.com/mnaveen14/Prediction-of-Smartphone-Addiction-using-Machine-Learning',
    dataset : 'https://raw.githubusercontent.com/mnaveen14/Datasets/refs/heads/main/smartphone_addiction_data.csv',

  },
  {
    title: 'E-Commerce Customer Churn Analysis using MySQL',
    description: 'A MySQL-based project analyzing customer churn patterns to improve retention and business performance.',
    image: project2,
    tags: ["MySQL", "Data Cleaning", "Exploratory Analysis", "Customer Retention"],
    github: 'https://github.com/mnaveen14/E-Commerce-Customer-Churn-Analysis-Using-MySql',
    dataset : 'https://github.com/mnaveen14/Datasets/blob/main/customer_churn_data.csv',
  },
  {
    title: 'Amazon Review Prediction using Naive Bayes',
    description: 'A machine learning project that predicts the sentiment of Amazon product reviews using Multinomial and Bernoulli Naive Bayes models.',
    image: project3,
    tags: ["Python", "Scikit-learn", "Seaborn","Pandas", "Naive Bayes"],
    github: 'https://github.com/mnaveen14/Amazon-Review-Prediction-Using-Multinomial-Bernoulli-Naive-Bayes',
    dataset : 'https://raw.githubusercontent.com/mnaveen14/Datasets/refs/heads/main/amazon_reviews.csv',

  },
  {
    title: 'California House Price Prediction Using ML Regression',
    description: 'A regression-based project that predicts California house prices using key factors like income, location, and property features.',
    image: project4,
    tags: ["Python", "Scikit-learn", "Regression", "Data Visualization"],
    github: 'https://github.com/mnaveen14/California-House-Price-Prediction-Using-ML-Regression-Model',
    dataset : 'https://raw.githubusercontent.com/mnaveen14/Datasets/refs/heads/main/california_housing.csv',

  },
  {
    title: 'Country Development Classification Using Clustering',
    description: 'A project that groups countries by socio-economic indicators to classify their development levels using hierarchical clustering.',
    image: project5,
    tags: ["Python", "Scikit-learn", "Clustering", "Matplotlib"],
    github: 'https://github.com/mnaveen14/Country-Development-Classification-Using-Hierarchical-Clustering',
    dataset : 'https://raw.githubusercontent.com/mnaveen14/Datasets/refs/heads/main/Country-data.csv',

  },
  {
    title: 'Customer Churn Analysis Using ML Classification Models',
    description: 'machine learning project that predicts customer churn using classification models based on behavior and service data.',
    image: project6,
    tags: ["Python", "Scikit-learn", "Classification", "Data Analysis"],
    github: 'https://github.com/mnaveen14/Customer-Churn-Analysis-Using-ML-Classification-Models',
    dataset : 'https://raw.githubusercontent.com/mnaveen14/Datasets/refs/heads/main/customer_churn.csv',

  },
];

export default function Projects() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setLightboxSrc(null);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function openLightbox(src: string) {
    setLightboxSrc(src);
  }

  function closeLightbox() {
    setLightboxSrc(null);
  }
  return (
    <main className="min-h-screen pt-32 pb-20 relative">
      <ParticleBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-12 text-center glow-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Projects
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
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-contain cursor-pointer block"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => openLightbox(project.image)}
                  />                
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-2">
                    {/* GitHub Button */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} on GitHub`}
                    >
                      <Button size="sm" variant="outline" className="glass">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>

                    {/* Dataset Button */}
                    <a
                      href={project.dataset}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} Dataset`}
                    >
                      <Button size="sm" variant="outline" className="glass">
                        <Database className="w-4 h-4 mr-2" />
                        Dataset
                      </Button>
                    </a>
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
        {lightboxSrc && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Project image preview"
            className="fixed inset-0 z-50 flex items-center justify-center p-0"
            onClick={closeLightbox}
          >
            <div className="absolute inset-0 bg-black/80" />
            <img
              src={lightboxSrc}
              alt="Project full preview"
              className="relative w-screen h-auto max-h-screen object-contain shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </main>
  );
}
