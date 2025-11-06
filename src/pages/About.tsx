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
              Hi, I'm <span className="font-semibold text-blue-400">Naveen M</span>, a passionate <span className="text-purple-400"> Data Science and Machine Learning specialist</span> with a strong focus on <span className="text-blue-300">data analysis and visualization</span>. My journey began with a deep curiosity about how data influences decision-making, which soon grew into a passion for <span className="text-yellow-300"> extracting insights and solving real-world problems through data</span>.
            </motion.p>


            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              I’m a <span className="text-green-400 font-medium">B.Tech Computer Technology (2025)</span> graduate from 
              <span className="text-blue-300 font-medium"> Bannari Amman Institute of Technology</span>, and I’ve also 
              completed a <span className="text-purple-300 font-medium">Data Science and Machine Learning program</span> 
              from <span className="text-yellow-300 font-medium">Entri Elevate</span>, in collaboration with 
              <span className="text-red-300 font-medium"> Illinois Tech, USA</span>.
        </motion.p>


            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              With hands-on experience in 
              <span className="text-pink-300"> Machine Learning, Python, SQL, Power BI and Excel</span>, 
              I specialize in developing 
              <span className="text-blue-300"> predictive models, interactive dashboards,</span> 
              and <span className="text-purple-300">analytical reports</span> that empower 
              businesses to make <span className="text-yellow-300">data-driven decisions</span>. 
              I enjoy every step of the process — from exploring and cleaning datasets to transforming 
              and visualizing insights in meaningful ways.
            </motion.p>


            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Beyond data, I’m constantly exploring 
              <span className="text-blue-400"> new tools and technologies</span>, 
              improving my <span className="text-purple-300">technical skills</span>, 
              and sharing my knowledge through 
              <span className="text-green-400"> projects and tutorials</span>.  
              Let’s turn <span className="text-yellow-300">data into decisions</span> and 
              <span className="text-pink-300"> insights into impact !</span>
            </motion.p>

          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { number: '10+', label: 'Projects Completed' },
              { number: '27+', label: 'Datasets Analyzed' },
              { number: '23K+', label: 'Lines of Code' },
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
