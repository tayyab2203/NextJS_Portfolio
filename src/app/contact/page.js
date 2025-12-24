'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, Calendar, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useInView } from '@/hooks/useInView';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const { ref: formRef, inView: formInView } = useInView({ threshold: 0.3 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Add your form submission logic here (e.g., API call to Formspree, SendGrid, etc.)
      // Example: 
      // const response = await fetch('/api/contact', { 
      //   method: 'POST', 
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData) 
      // });
      // if (!response.ok) throw new Error('Failed to send message');
      
      // Simulate API call (remove in production and use actual API)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // WhatsApp number - replace with your actual number (format: country code + number without +)
  const whatsappNumber = '+923326099495'; // Replace with your WhatsApp number
  const whatsappMessage = encodeURIComponent('Hello! I would like to discuss a project with you.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'www.linkedin.com/in/tayyab-sajjad',
      icon: Linkedin,
      color: 'hover:text-camel',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/tayyab2203',
      icon: Github,
      color: 'hover:text-dry_sage',
    },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/yourusername',
    //   icon: Twitter,
    //   color: 'hover:text-camel',
    // },
  ];

  return (
    <div className="min-h-screen bg-black text-khaki_beige-900">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-khaki_beige-900 font-comfortaa">
            Get In Touch
          </h1>
          <p className="text-xl text-dry_sage-700 mb-4">
            Let's work together on your next project
          </p>
          <p className="text-dry_sage-600">
            I'm always open to discussing new opportunities, interesting projects, or just having
            a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information & Social Links */}
          <div className="space-y-8">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-ebony/50 p-6 rounded-lg border border-dusty_olive/30 hover:border-camel/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-toffee_brown/20 p-3 rounded-lg">
                  <Mail className="text-toffee_brown" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-khaki_beige-900 mb-2">Email</h3>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-camel hover:text-toffee_brown transition-colors duration-300"
                  >
                    tayyabsajjad4679@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-ebony/50 p-6 rounded-lg border border-dusty_olive/30 hover:border-camel/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-3 rounded-lg">
                  <MessageCircle className="text-green-500" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-khaki_beige-900 mb-2">WhatsApp</h3>
                  <p className="text-dry_sage-600 mb-4 text-sm">
                    Chat with me directly on WhatsApp for quick responses
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Calendly Integration */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-ebony/50 p-6 rounded-lg border border-dusty_olive/30 hover:border-camel/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-toffee_brown/20 p-3 rounded-lg">
                  <Calendar className="text-toffee_brown" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-khaki_beige-900 mb-2">Schedule a Meeting</h3>
                  <p className="text-dry_sage-600 mb-4 text-sm">
                    Book a time that works for you. Let's discuss your project!
                  </p>
                  <a
                    href="https://calendly.com/tayyabsajjad4679"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-toffee_brown to-saddle_brown hover:from-saddle_brown hover:to-toffee_brown text-khaki_beige-900 px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Book a Meeting
                  </a>
                </div>
              </div>
              {/* Calendly Embed Widget */}
              <div className="mt-4 h-[400px] bg-charcoal_brown rounded-lg border border-dusty_olive/20 overflow-hidden">
                <iframe
                  src="https://calendly.com/tayyabsajjad4679"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="w-full h-full"
                  title="Calendly Scheduling"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-ebony/50 p-6 rounded-lg border border-dusty_olive/30 hover:border-camel/50 transition-all duration-300"
            >
              <h3 className="font-semibold text-khaki_beige-900 mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-charcoal_brown/50 p-3 rounded-lg border border-dusty_olive/30 hover:border-camel/50 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className={`text-dry_sage-600 ${social.color} transition-colors`} size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-ebony/80 to-charcoal_brown/80 p-6 rounded-lg border border-dusty_olive/40 hover:border-camel/50 transition-all duration-300"
            >
              <h3 className="font-semibold text-camel mb-2">Open to Opportunities</h3>
              <p className="text-dry_sage-700 text-sm">
                I'm currently available for freelance projects, full-time positions, and
                consulting opportunities. Feel free to reach out!
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 30 }}
            animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-ebony/50 p-6 md:p-8 rounded-lg border border-dusty_olive/30 hover:border-camel/50 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 text-khaki_beige-900 font-comfortaa">
                Send a Message
              </h2>
              
              {/* Success/Error Messages */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm"
                  >
                    ✗ Something went wrong. Please try again or contact me directly.
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-khaki_beige-900 mb-2 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    maxLength={100}
                    className="w-full px-4 py-3 bg-charcoal_brown/50 border border-dusty_olive/30 rounded-lg text-khaki_beige-900 focus:outline-none focus:border-camel transition placeholder-dry_sage-600"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-khaki_beige-900 mb-2 font-medium">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-charcoal_brown/50 border border-dusty_olive/30 rounded-lg text-khaki_beige-900 focus:outline-none focus:border-camel transition placeholder-dry_sage-600"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-khaki_beige-900 mb-2 font-medium">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    minLength={3}
                    maxLength={200}
                    className="w-full px-4 py-3 bg-charcoal_brown/50 border border-dusty_olive/30 rounded-lg text-khaki_beige-900 focus:outline-none focus:border-camel transition placeholder-dry_sage-600"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-khaki_beige-900 mb-2 font-medium">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={10}
                    maxLength={2000}
                    rows="6"
                    className="w-full px-4 py-3 bg-charcoal_brown/50 border border-dusty_olive/30 rounded-lg text-khaki_beige-900 focus:outline-none focus:border-camel transition resize-none placeholder-dry_sage-600"
                    placeholder="Tell me about your project..."
                  />
                  <p className="text-dry_sage-600 text-xs mt-1">
                    {formData.message.length}/2000 characters
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-toffee_brown to-saddle_brown hover:from-saddle_brown hover:to-toffee_brown text-khaki_beige-900 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-105 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-khaki_beige-900 border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
