import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, FileText, Mail, BookOpen, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/about', label: 'About', icon: User },
  { path: '/skills', label: 'Skills', icon: Code },
  { path: '/projects', label: 'Projects', icon: Briefcase },
  { path: '/articles', label: 'Articles', icon: BookOpen },
  { path: '/coding-profiles', label: 'Profiles', icon: Github },
  { path: '/resume', label: 'Resume', icon: FileText },
  { path: '/contact', label: 'Contact', icon: Mail },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div
              className="text-2xl font-bold glow-text"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.div>
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? 'default' : 'ghost'}
                    size="sm"
                    className="relative group"
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-primary/20 rounded-md -z-10"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
