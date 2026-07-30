"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0"
    >
      {/* Abstract Background / Mock Shader */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-crimson/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-metallic/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-earth/10 border border-brand-earth/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-crimson animate-pulse" />
          <span className="text-sm font-medium text-brand-cream/80 tracking-wide uppercase">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-brand-cream"
        >
          Engineering <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-crimson via-brand-bronze to-brand-metallic">
            AI-Powered Solutions
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-brand-cream/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I&apos;m an AI specialist and software developer based in Esmoriz, Portugal. I specialize in combining modern artificial intelligence with real-world software engineering to build practical, scalable, and user-focused applications that solve real business problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto px-8 py-4 bg-brand-crimson hover:bg-red-800 text-white rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(139,0,0,0.4)] flex items-center justify-center space-x-2 group"
          >
            <span>Explore My Work</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-brand-earth/30 hover:border-brand-metallic/60 text-brand-cream rounded-xl font-medium transition-all"
          >
            View Rates
          </button>
        </motion.div>
      </div>
    </section>
  );
}
