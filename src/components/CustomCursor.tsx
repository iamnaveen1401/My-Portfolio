import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed w-5 h-5 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          border: '2px solid hsl(var(--primary))',
          borderRadius: '50%',
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
      {isHovering && (
        <motion.div
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            width: '60px',
            height: '60px',
            border: '1px solid hsl(var(--primary) / 0.3)',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        />
      )}
    </>
  );
};
