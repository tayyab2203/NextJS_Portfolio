'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Calendar, Send, MessageCircle, Phone, MapPin, Clock } from 'lucide-react';
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
  const whatsappNumber = '+923326099495';
  const whatsappMessage = encodeURIComponent('Hello! I would like to discuss a project with you.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tayyab-sajjad',
      icon: Linkedin,
      color: 'hover:text-camel',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/tayyab2203',
      icon: Github,
      color: 'hover:text-dry-sage',
    },
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'tayyabsajjad4679@gmail.com',
      link: 'mailto:tayyabsajjad4679@gmail.com',
      description: 'Send me an email anytime',
      color: 'toffee-brown',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: 'Chat with me',
      link: whatsappUrl,
      description: 'Quick response guaranteed',
      color: 'green-500',
      isExternal: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-charcoal-brown/20 to-black">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-charcoal-brown/40 via-ebony/60 to-charcoal-brown/40 border-b border-dusty-olive/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(166,138,100,0.1),transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ebony/50 border border-camel/30 mb-6"
            >
              <Calendar className="text-camel" size={18} />
              <span className="text-dry-sage-600 text-sm font-medium">Let's Connect</span>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-khaki-beige-900 font-comfortaa">
              Get In Touch
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-dry-sage-700 mb-3 sm:mb-4">
              Let's work together on your next project
            </p>
            <p className="text-base sm:text-lg text-dry-sage-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having
              a chat about technology.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* Contact Methods Cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.link}
              target={method.isExternal ? '_blank' : undefined}
              rel={method.isExternal ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-ebony/60 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-dusty-olive/30 hover:border-camel/60 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`${method.color === 'green-500' ? 'bg-green-500/20' : 'bg-toffee-brown/20'} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon 
                    className={method.color === 'green-500' ? 'text-green-500' : 'text-toffee-brown'} 
                    size={24} 
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-khaki-beige-900 mb-1 text-lg">{method.title}</h3>
                  <p className="text-sm text-dry-sage-600 mb-2">{method.description}</p>
                  <p className={`text-sm sm:text-base ${method.value.includes('@') ? 'break-all' : ''} text-camel group-hover:text-toffee-brown transition-colors`}>
                    {method.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -30 }}
            animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-ebony/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-dusty-olive/30 hover:border-camel/50 transition-all duration-300 shadow-xl">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="bg-toffee-brown/20 p-2 rounded-lg">
                  <Send className="text-toffee-brown" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-khaki-beige-900 font-comfortaa">
                    Send a Message
                  </h2>
                  <p className="text-sm text-dry-sage-600 mt-1">Fill out the form below and I'll get back to you</p>
                </div>
              </div>
              
              {/* Success/Error Messages */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm flex items-center gap-2"
                  >
                    <div className="w-5 h-5 rounded-full bg-green-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-400">✓</span>
                    </div>
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm flex items-center gap-2"
                  >
                    <div className="w-5 h-5 rounded-full bg-red-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-400">✗</span>
                    </div>
                    Something went wrong. Please try again or contact me directly.
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-khaki-beige-900 mb-2 font-medium text-sm sm:text-base">
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
                      className="w-full px-4 py-3 bg-charcoal-brown/50 border border-dusty-olive/30 rounded-lg text-khaki-beige-900 focus:outline-none focus:ring-2 focus:ring-camel/50 focus:border-camel transition placeholder-dry-sage-600 text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-khaki-beige-900 mb-2 font-medium text-sm sm:text-base">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-charcoal-brown/50 border border-dusty-olive/30 rounded-lg text-khaki-beige-900 focus:outline-none focus:ring-2 focus:ring-camel/50 focus:border-camel transition placeholder-dry-sage-600 text-sm sm:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-khaki-beige-900 mb-2 font-medium text-sm sm:text-base">
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
                    className="w-full px-4 py-3 bg-charcoal-brown/50 border border-dusty-olive/30 rounded-lg text-khaki-beige-900 focus:outline-none focus:ring-2 focus:ring-camel/50 focus:border-camel transition placeholder-dry-sage-600 text-sm sm:text-base"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-khaki-beige-900 mb-2 font-medium text-sm sm:text-base">
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
                    className="w-full px-4 py-3 bg-charcoal-brown/50 border border-dusty-olive/30 rounded-lg text-khaki-beige-900 focus:outline-none focus:ring-2 focus:ring-camel/50 focus:border-camel transition resize-none placeholder-dry-sage-600 text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                  />
                  <p className="text-dry-sage-600 text-xs mt-2">
                    {formData.message.length}/2000 characters
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-toffee-brown to-saddle-brown hover:from-saddle-brown hover:to-toffee-brown text-khaki-beige-900 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-105 disabled:hover:scale-100 text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-khaki-beige-900 border-t-transparent rounded-full"
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

          {/* Right Column - Calendar & Social */}
          <div className="space-y-6 sm:space-y-8">
            {/* Cal.com Integration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-ebony/60 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-dusty-olive/30 hover:border-camel/50 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-toffee-brown/20 p-2 rounded-lg">
                  <Calendar className="text-toffee-brown" size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-khaki-beige-900 text-lg mb-1">Schedule a Meeting</h3>
                  <p className="text-xs sm:text-sm text-dry-sage-600">
                    Book a time that works for you
                  </p>
                </div>
              </div>
              <a
                href="https://cal.com/tayyabsajjad4679"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-toffee-brown to-saddle-brown hover:from-saddle-brown hover:to-toffee-brown text-khaki-beige-900 px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:scale-105 text-center mb-4"
              >
                Book a Meeting
              </a>
              {/* Cal.com Embed Widget */}
              <div className="bg-charcoal-brown rounded-lg border border-dusty-olive/20 overflow-hidden">
                <div className="w-full h-[500px] sm:h-[600px] lg:h-[450px]">
                  <iframe
                    src="https://cal.com/tayyabsajjad4679"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    className="w-full h-full"
                    title="Cal.com Scheduling"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-ebony/60 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-dusty-olive/30 hover:border-camel/50 transition-all duration-300 shadow-xl"
            >
              <h3 className="font-semibold text-khaki-beige-900 mb-4 text-lg">Connect With Me</h3>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-charcoal-brown/50 p-4 rounded-lg border border-dusty-olive/30 hover:border-camel/50 transition-all duration-300 hover:scale-110 flex flex-col items-center gap-2 group"
                    aria-label={social.name}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className={`text-dry-sage-600 ${social.color} transition-colors`} size={24} />
                    <span className="text-xs text-dry-sage-600 group-hover:text-camel transition-colors">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-ebony/80 to-charcoal-brown/80 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-camel/40 shadow-xl"
            >
              <div className="flex items-start gap-3">
                <div className="bg-green-500/20 p-2 rounded-lg">
                  <Clock className="text-green-500" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-camel mb-2 text-lg">Available for Work</h3>
                  <p className="text-dry-sage-700 text-sm leading-relaxed">
                    I'm currently available for freelance projects, full-time positions, and
                    consulting opportunities. Feel free to reach out!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
