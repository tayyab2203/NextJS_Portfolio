'use client';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Calendar, MapPin } from 'lucide-react';

export default function Timeline({ items }) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-toffee_brown/30 hidden md:block" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ item, index }) {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative pl-16 md:pl-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-6 md:left-6 top-2 w-4 h-4 bg-toffee_brown rounded-full border-4 border-charcoal_brown z-10 hidden md:block" />

      <div className="bg-ebony/50 p-6 rounded-lg border border-dusty_olive/30 hover:border-camel/40 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
          <h3 className="text-xl font-bold text-khaki_beige-900 mb-2 md:mb-0">{item.title}</h3>
          <div className="flex items-center gap-2 text-camel text-sm">
            <Calendar size={16} />
            <span>{item.date}</span>
          </div>
        </div>

        {item.location && (
          <div className="flex items-center gap-2 text-dry_sage-700 text-sm mb-3">
            <MapPin size={16} />
            <span>{item.location}</span>
          </div>
        )}

        <p className="text-dry_sage-700 leading-relaxed">{item.description}</p>

        {item.achievements && item.achievements.length > 0 && (
          <ul className="mt-4 space-y-2">
            {item.achievements.map((achievement, idx) => (
              <li key={idx} className="text-dry_sage-600 text-sm flex items-start gap-2">
                <span className="text-toffee_brown mt-1">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

