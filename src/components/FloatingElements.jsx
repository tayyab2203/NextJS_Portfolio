'use client';
import { motion } from 'framer-motion';

export default function FloatingElements() {
  const elements = [
    { x: '10%', y: '20%', size: 60, delay: 0 },
    { x: '80%', y: '30%', size: 80, delay: 0.5 },
    { x: '50%', y: '70%', size: 100, delay: 1 },
    { x: '20%', y: '80%', size: 70, delay: 1.5 },
    { x: '90%', y: '60%', size: 50, delay: 2 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-8"
          style={{
            left: el.x,
            top: el.y,
            width: el.size,
            height: el.size,
            background: 'linear-gradient(135deg, rgba(166, 138, 100, 0.15), rgba(147, 102, 57, 0.15))',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            delay: el.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
