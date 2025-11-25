import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code, Briefcase, FileText, Mail, BookOpen, Github, Sun, Moon, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/about', label: 'About', icon: User },
  { path: '/skills', label: 'Skills', icon: Code },
  { path: '/projects', label: 'Projects', icon: Briefcase },
  { path: '/resume', label: 'Resume', icon: FileText },
  { path: '/contact', label: 'Contact', icon: Mail },
];

export const Navigation = () => {
  const location = useLocation();
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const userTheme = localStorage.getItem('theme');
      if (userTheme === 'dark' || userTheme === 'light') return userTheme;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
    }
    return 'dark';
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass overflow-x-clip">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between min-w-0">
        <Link to="/">
          <motion.div
            className="relative text-3xl md:text-4xl font-extrabold tracking-wide text-cyan-400 drop-shadow-[0_0_10px_#00ffff] hover:drop-shadow-[0_0_20px_#00ffff] transition-all duration-500 cursor-pointer select-none"
            whileHover={{ scale: 1.05 }}
            tabIndex={0}
          >
            Portfolio
          </motion.div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-1 relative">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path} tabIndex={0} className="focus:outline-none">
                <Button
                  variant={isActive ? 'default' : 'ghost'}
                  size="sm"
                  className="relative group px-3"
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                  {/* Framer Motion underline */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavBarBG"
                        className="absolute left-0 bottom-0 h-[2px] w-full rounded bg-primary"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                      />
                    )}
                  </AnimatePresence>
                </Button>
              </Link>
            );
          })}
          {/* Theme toggle button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-2"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
        >
          <Menu className="w-7 h-7" />
        </Button>

        {/* Mobile Sheet Overlay + Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-[2px] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            >
              <motion.div
                className="absolute top-0 left-0 right-0 bg-background glass drop-shadow-lg"
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%' }}
                transition={{ type: 'spring', bounce: 0.15, duration: 0.6 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between px-4 py-4 border-b">
                  <span className="text-xl font-bold glow-text">Menu</span>
                  <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                    <X className="w-7 h-7" />
                  </Button>
                </div>
                <motion.ul className="flex flex-col gap-2 px-6 pt-6 pb-12">
                  {navItems.map((item, idx) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    return (
                      <motion.li
                        key={item.path}
                        initial={{ opacity: 0, x: 32 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.06 }}
                      >
                        <Link
                          to={item.path}
                          tabIndex={0}
                          onClick={() => setMobileOpen(false)}
                          className="focus:outline-none"
                        >
                          <Button
                            size="lg"
                            variant={isActive ? 'default' : 'ghost'}
                            className="w-full justify-start px-4"
                          >
                            <Icon className="w-5 h-5 mr-3" />
                            {item.label}
                          </Button>
                        </Link>
                      </motion.li>
                    );
                  })}
                  <motion.li
                    initial={{ opacity: 0, x: 32 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + navItems.length * 0.06 }}
                  >
                    <Button
                      variant="ghost"
                      size="lg"
                      aria-label="Toggle theme"
                      className="w-full justify-start px-4 mt-2"
                      onClick={toggleTheme}
                    >
                      {theme === 'light' ? (
                        <>
                          <Moon className="w-5 h-5 mr-3" /> Dark Mode
                        </>
                      ) : (
                        <>
                          <Sun className="w-5 h-5 mr-3" /> Light Mode
                        </>
                      )}
                    </Button>
                  </motion.li>
                </motion.ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
