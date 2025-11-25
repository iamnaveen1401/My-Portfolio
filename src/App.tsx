import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { CustomCursor } from "@/components/CustomCursor";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div {...pageTransition} transition={{ duration: 0.4 }}>
            <Home />
          </motion.div>
        } />
        <Route path="/about" element={
          <motion.div {...pageTransition} transition={{ duration: 0.4 }}>
            <About />
          </motion.div>
        } />
        <Route path="/skills" element={
          <motion.div {...pageTransition} transition={{ duration: 0.4 }}>
            <Skills />
          </motion.div>
        } />
        <Route path="/projects" element={
          <motion.div {...pageTransition} transition={{ duration: 0.4 }}>
            <Projects />
          </motion.div>
        } />
        <Route path="/resume" element={
          <motion.div {...pageTransition} transition={{ duration: 0.4 }}>
            <Resume />
          </motion.div>
        } />
        <Route path="/contact" element={
          <motion.div {...pageTransition} transition={{ duration: 0.4 }}>
            <Contact />
          </motion.div>
        } />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CustomCursor />
        <Navigation />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
