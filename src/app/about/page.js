'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Parallax } from 'react-parallax';
import StatsCounter from '@/components/StatsCounter';
import Timeline from '@/components/Timeline';
import { useInView } from '@/hooks/useInView';
import { Award, Users, Calendar } from 'lucide-react';

const timelineData = [
  {
    title: 'Started My Journey',
    date: '2022',
    location: 'Bahauddin Zakariya University',
    description: 'Began studying Computer Science with a focus on web development and software engineering.',
    achievements: [
      'Learned fundamentals of programming',
      'Built first web applications',
      'Joined coding communities',
    ],
  },
  {
    title: 'First Professional Role',
    date: '2024',
    location: 'MAXCORE Technologies',
    description: 'Landed my first internship as a Frontend Developer, working on real-world projects.',
    achievements: [
      'Developed responsive web applications',
      'Collaborated with cross-functional teams',
      'Learned agile methodologies',
    ],
  },
  // {
  //   title: 'Full-Stack Developer',
  //   date: '2023',
  //   location: 'Current Company',
  //   description: 'Promoted to Full-Stack Developer, leading projects and mentoring junior developers.',
  //   achievements: [
  //     'Led multiple successful projects',
  //     'Improved application performance by 40%',
  //     'Mentored 5+ junior developers',
  //   ],
  // },
  {
    title: 'Launched Startup',
    date: '2025',
    location: 'DevAndDone Tech',
    description:
      'Co-founded DevAndDone Tech with my class fellows. Currently working as a Co-Founder, Project Manager, and Full-Stack Developer, responsible for planning, development, and overall project execution.',
    achievements: [
      'Co-founded and launched the startup with a clear technical and business vision',
      'Defined project workflows, development standards, and team collaboration processes',
      'Actively building and improving products for real-world use cases',
    ],
  },
];

export default function About() {
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.3 });
  const { ref: timelineRef, inView: timelineInView } = useInView({ threshold: 0.2 });

  return (
    <div className="min-h-screen bg-black text-khaki-beige-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-khaki-beige-900 font-comfortaa">
            About Me
          </h1>
          <p className="text-xl text-dry-sage-700 mb-12">
            Passionate Full Stack developer, and problem solver
          </p>
        </motion.div>

        {/* Split Layout: Profile Image & Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Profile Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Parallax strength={200}>
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden border-2 border-stone_brown/30">
                <Image
                  src="/images/MyImage.jpeg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-stone_brown/20 to-khaki-beige/10 z-10 pointer-events-none" />
              </div>
            </Parallax>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-camel font-comfortaa">
              Who I Am
            </h2>
            <p className="text-dry-sage-700 leading-relaxed mb-4">
              I'm a passionate full-stack developer with a love for creating elegant solutions
              to complex problems. With years of experience in modern web technologies, I
              specialize in building responsive, user-friendly applications that make a difference.
            </p>
            <p className="text-dry-sage-700 leading-relaxed mb-4">
              My journey in tech has been driven by curiosity and a desire to solve real-world
              problems. I've worked on diverse projects ranging from AI-powered applications to
              enterprise solutions, always focusing on quality and user experience.
            </p>
            <p className="text-dry-sage-700 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community. I believe
              in continuous learning and staying updated with the latest industry trends.
            </p>
          </motion.div>
        </div>

        {/* Animated Stats */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <motion.div
            className="bg-ebony/50 p-8 rounded-lg border border-dusty-olive/30 text-center hover:border-camel/50 transition-all duration-300 hover:scale-105"
            whileHover={{ y: -5 }}
          >
            <div className="mb-4">
              <Award className="text-toffee-brown mx-auto" size={40} />
            </div>
            <StatsCounter end={50} suffix="+" />
            <p className="text-dry-sage-700 mt-2">Projects Completed</p>
          </motion.div>

          <motion.div
            className="bg-ebony/50 p-8 rounded-lg border border-dusty-olive/30 text-center hover:border-camel/50 transition-all duration-300 hover:scale-105"
            whileHover={{ y: -5 }}
          >
            <div className="mb-4">
              <Users className="text-toffee-brown mx-auto" size={40} />
            </div>
            <StatsCounter end={100} suffix="+" />
            <p className="text-dry-sage-700 mt-2">Happy Clients</p>
          </motion.div>

          <motion.div
            className="bg-ebony/50 p-8 rounded-lg border border-dusty-olive/30 text-center hover:border-camel/50 transition-all duration-300 hover:scale-105"
            whileHover={{ y: -5 }}
          >
            <div className="mb-4">
              <Calendar className="text-toffee-brown mx-auto" size={40} />
            </div>
            <StatsCounter end={5} suffix="+" />
            <p className="text-dry-sage-700 mt-2">Years Experience</p>
          </motion.div>
        </motion.div>

        {/* Interactive Timeline */}
        <motion.div
          ref={timelineRef}
          initial={{ opacity: 0 }}
          animate={timelineInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-khaki-beige-900 font-comfortaa">
            My Journey
          </h2>
          <Timeline items={timelineData} />
        </motion.div>

        {/* Company Highlight Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-gradient-to-r from-ebony/80 to-charcoal-brown/80 p-8 md:p-12 rounded-lg border border-dusty-olive/40 hover:border-camel/50 transition-all duration-300"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-camel font-comfortaa">
                My Company/Startup
              </h2>
              <p className="text-dry-sage-700 leading-relaxed mb-4">
                DevAndDone Tech is a newly launched tech startup co-founded with my class fellows.
                We focus on building modern, scalable web and software solutions tailored to real
                business needs.
              </p>
              <p className="text-dry-sage-700 leading-relaxed">
                As a Co-Founder, Project Manager, and Full-Stack Developer, I am actively involved
                in planning, development, and execution while shaping the technical direction of
                the startup.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-toffee-brown">Key Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-toffee-brown mt-1">✓</span>
                  <span className="text-dry-sage-700">
                    Co-founded and officially launched DevAndDone Tech
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-toffee-brown mt-1">✓</span>
                  <span className="text-dry-sage-700">
                    Built and leading a core team of 7 members
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-toffee-brown mt-1">✓</span>
                  <span className="text-dry-sage-700">
                    Defined project workflows and development standards
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-toffee-brown mt-1">✓</span>
                  <span className="text-dry-sage-700">
                    Managing projects and contributing as a full-stack developer
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </motion.div>
      </section>
    </div>
  );
}
