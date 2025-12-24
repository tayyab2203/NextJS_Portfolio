'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import TypingEffect from './TypingEffect';
import Link from 'next/link';
import { ArrowRight, Download, Sparkles, Code, Rocket } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const roles = [
    'Full-Stack Developer',
    'AI Enthusiast',
    'Problem Solver',
    'Tech Innovator',
    'Creative Thinker',
  ];

  const stats = [
    { label: 'Projects', value: '50+', icon: Rocket },
    { label: 'Clients', value: '100+', icon: Code },
    { label: 'Experience', value: '5+', icon: Sparkles },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal_brown via-black to-charcoal_brown pt-20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(166, 138, 100, 0.15) 0%, transparent 50%)`,
        }} />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(147, 102, 57, 0.1) 0%, transparent 60%)',
              'radial-gradient(circle at 80% 70%, rgba(182, 173, 144, 0.1) 0%, transparent 60%)',
              'radial-gradient(circle at 50% 50%, rgba(194, 197, 170, 0.1) 0%, transparent 60%)',
              'radial-gradient(circle at 20% 30%, rgba(147, 102, 57, 0.1) 0%, transparent 60%)',
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ebony/50 border border-camel/30 mb-6"
            >
              <Sparkles className="text-camel" size={16} />
              <span className="text-dry_sage-600 text-sm font-medium">Available for Projects</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 font-comfortaa leading-tight"
            >
              <span className="text-khaki_beige-900">Transforming</span>
              <br />
              <span className="bg-gradient-to-r from-camel via-khaki_beige to-dry_sage bg-clip-text text-transparent">
                Ideas Into
              </span>
              <br />
              <span className="text-khaki_beige-900">Digital Reality</span>
            </motion.h1>

            {/* Subheading with Typing Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8"
            >
              <p className="text-xl sm:text-2xl md:text-3xl text-dry_sage-700 font-comfortaa mb-2">
                I'm a{' '}
                <span className="text-camel font-semibold">
                  <TypingEffect
                    strings={roles}
                    typeSpeed={50}
                    backSpeed={30}
                    backDelay={2000}
                  />
                </span>
              </p>
              <p className="text-dry_sage-600 text-lg mt-4 max-w-2xl mx-auto lg:mx-0">
                Crafting exceptional digital experiences with cutting-edge technology and creative problem-solving.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center lg:text-left"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon className="text-toffee_brown" size={20} />
                    <span className="text-3xl font-bold text-camel">{stat.value}</span>
                  </div>
                  <p className="text-dry_sage-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="group relative bg-gradient-to-r from-toffee_brown to-saddle_brown hover:from-saddle_brown hover:to-toffee_brown text-khaki_beige-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Work Together
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-camel to-khaki_beige opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                />
              </Link>
              <Link
                href="/projects"
                className="group border-2 border-camel text-camel px-8 py-4 rounded-xl font-semibold hover:bg-ebony/40 hover:border-khaki_beige hover:text-khaki_beige transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                View My Work
                <Code size={20} className="group-hover:rotate-12 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Animated Card/Box */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative bg-gradient-to-br from-ebony/80 to-charcoal_brown/80 p-8 rounded-2xl border border-camel/30 shadow-2xl backdrop-blur-sm"
              >
                {/* Code Preview Effect */}
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-saddle_brown" />
                    <div className="w-3 h-3 rounded-full bg-toffee_brown" />
                    <div className="w-3 h-3 rounded-full bg-camel" />
                  </div>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex gap-2">
                      <span className="text-toffee_brown">const</span>
                      <span className="text-khaki_beige-900">developer</span>
                      <span className="text-dry_sage-600">=</span>
                      <span className="text-camel">{'{'}</span>
                    </div>
                    <div className="pl-4 space-y-1">
                      <div>
                        <span className="text-dry_sage-600">  skill:</span>
                        <span className="text-khaki_beige-900"> 'Full-Stack'</span>
                      </div>
                      <div>
                        <span className="text-dry_sage-600">  passion:</span>
                        <span className="text-khaki_beige-900"> 'Innovation'</span>
                      </div>
                      <div>
                        <span className="text-dry_sage-600">  status:</span>
                        <span className="text-camel"> 'Available'</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-camel">{'}'}</span>
                    </div>
                  </div>
                </div>

                {/* Floating Icons */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-toffee_brown to-camel rounded-full flex items-center justify-center border-2 border-charcoal_brown shadow-lg"
                >
                  <Code className="text-charcoal_brown" size={24} />
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-camel to-khaki_beige rounded-full flex items-center justify-center border-2 border-charcoal_brown shadow-lg"
                >
                  <Rocket className="text-charcoal_brown" size={18} />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
