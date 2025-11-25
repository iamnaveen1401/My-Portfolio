import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, Instagram, Youtube, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ParticleBackground } from '@/components/ParticleBackground';
import heroBg from '@/assets/hero-bg.jpg';
import KaggleIcon from "../assets/kaggle.svg";
import heroPortrait from '@/assets/Profisional Image.jpg';
 

const socialLinks = [
  { icon: Github, href: 'https://github.com/mnaveen14', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mnaveen14/', label: 'LinkedIn' },
  { icon: KaggleIcon, href: 'https://www.kaggle.com/navin1401', label: 'Kaggle' },
];

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ParticleBackground />
      
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 w-full lg:w-1/2 order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-lg md:text-xl text-primary mb-2 glow-text">
                Hello, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 glow-text">
                Naveen M
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground glow-text">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-semibold">
                  Data Science & Machine Learning Specialist
                </span>
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Crafting immersive digital experiences powered by data and intelligence.
              Passionate about data science, machine learning, and transforming complex datasets into meaningful insights and smart solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/projects">
                <Button size="lg" className="group animate-pulse-glow">
                  View Projects
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="glass">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center animate-glow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {typeof social.icon === 'string' ? (
                    <img src={social.icon} alt={social.label} className="w-5 h-5" />
                  ) : (
                    <social.icon className="w-5 h-5" />
                  )}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="relative w-[320px] h-[320px] md:w-[360px] md:h-[360px]"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/70 via-indigo-500/40 to-purple-500/70 blur-3xl opacity-80" />
              <div className="relative w-full h-full rounded-full p-3 bg-slate-900/60 border border-white/10 shadow-[0_0_70px_rgba(99,102,241,0.45)]">
                <img
                  src={heroPortrait}
                  alt="Naveen M portrait"
                  className="w-full h-full object-cover rounded-full ring-4 ring-primary/30 shadow-[0_0_55px_rgba(147,197,253,0.35)]"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-primary text-4xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </main>
  );
}
