"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Code2, HeartHandshake } from "lucide-react";

const features = [
  {
    title: "AI & Intelligent Automation",
    description:
      "Integrating modern artificial intelligence into existing workflows and building intelligent automation from the ground up to solve complex business operations and scale efficiency.",
    icon: BrainCircuit,
  },
  {
    title: "Custom Software Engineering",
    description:
      "Developing robust, custom web platforms and reliable applications. I combine modern frameworks with solid engineering principles to deliver high-quality, practical results.",
    icon: Code2,
  },
  {
    title: "Client-Centric Collaboration",
    description:
      "Drawing from a deep background in customer service and teamwork. I prioritize user satisfaction, empathetic problem-solving, and seamless communication in every project lifecycle.",
    icon: HeartHandshake,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-cream">
            Core Expertise
          </h2>
          <div className="w-20 h-1 bg-brand-crimson mb-6" />
          <p className="text-brand-cream/60 text-lg max-w-2xl">
            Delivering cross-industry impact by merging state-of-the-art AI technology with human-focused engineering and dedicated client support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-2xl bg-brand-dark border border-brand-earth/20 hover:border-brand-crimson/50 transition-colors overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-crimson/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-brand-earth/10 flex items-center justify-center mb-6 group-hover:bg-brand-crimson/20 transition-colors">
                  <feature.icon className="text-brand-metallic" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-brand-cream group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-brand-cream/60 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
