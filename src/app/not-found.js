'use client';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-9xl font-bold bg-gradient-to-r from-toffee-brown via-camel to-khaki-beige bg-clip-text text-transparent mb-4 font-comfortaa"
          >
            404
          </motion.h1>
          <h2 className="text-3xl md:text-4xl font-bold text-khaki-beige-900 mb-4 font-comfortaa">
            Page Not Found
          </h2>
          <p className="text-dry-sage-700 text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-toffee-brown to-saddle-brown hover:from-saddle-brown hover:to-toffee-brown text-khaki-beige-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Home size={20} />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 border-2 border-camel text-camel px-8 py-4 rounded-xl font-semibold hover:bg-ebony/30 transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
