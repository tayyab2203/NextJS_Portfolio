'use client';
import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: Github,
      color: 'hover:text-khaki_beige',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
      icon: Linkedin,
      color: 'hover:text-camel',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: Twitter,
      color: 'hover:text-dry_sage',
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: Mail,
      color: 'hover:text-toffee_brown',
    },
  ];

  const footerLinks = [
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Decision Helper', path: '/decision-helper' },
    { name: 'Company', path: '/company' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-charcoal_brown border-t border-ebony/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold font-comfortaa bg-gradient-to-r from-camel to-khaki_beige bg-clip-text mb-4">
              Tayyab Sajjad
            </h3>
            <p className="text-dry_sage-700 text-sm mb-6 leading-relaxed">
              Full-stack developer passionate about creating innovative solutions and building
              amazing user experiences.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-lg bg-ebony/30 text-dry_sage-600 ${social.color} transition-all duration-300 hover:bg-ebony/50 hover:scale-110`}
                  aria-label={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-khaki_beige mb-4 font-comfortaa">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-dry_sage-700 hover:text-khaki_beige transition-all duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-camel mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-khaki_beige mb-4 font-comfortaa">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:your.email@example.com"
                  className="text-dry_sage-700 hover:text-khaki_beige transition-all duration-300 flex items-center gap-2 group"
                >
                  <Mail size={16} className="group-hover:scale-110 transition-transform" />
                  your.email@example.com
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dry_sage-700 hover:text-khaki_beige transition-all duration-300 flex items-center gap-2 group"
                >
                  <Calendar size={16} className="group-hover:scale-110 transition-transform" />
                  Schedule a Meeting
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-ebony/30 pt-8 text-center"
        >
          <p className="text-dry_sage-600 text-sm">
            © {currentYear} Your Name. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
