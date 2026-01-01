'use client';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

export default function SkillBar({ name, level, years, icon: Icon }) {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          {Icon && <Icon className="text-toffee-brown" size={20} />}
          <span className="text-khaki-beige-900 font-semibold">{name}</span>
        </div>
        <div className="flex items-center gap-4">
          {years && (
            <span className="text-dry-sage-600 text-sm">{years} years</span>
          )}
          <span className="text-camel font-bold">{level}%</span>
        </div>
      </div>
      <div className="h-3 bg-ebony/50 rounded-full overflow-hidden border border-dusty-olive/30">
        <motion.div
          className="h-full bg-gradient-to-r from-toffee-brown via-camel to-khaki-beige rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

