"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Ruben perfectly balanced cutting-edge AI integrations with rock-solid software engineering. He listened to our needs and delivered a platform that truly solved our core business problems.",
    author: "Elena Rodriguez",
    role: "VP of Product, InnovateTech",
  },
  {
    quote: "Exceptional technical execution paired with outstanding customer service. Ruben is an absolute team player who guided us through the entire automation process seamlessly.",
    author: "James Chen",
    role: "Operations Director, Global Logistics",
  },
];

const brands = ["AERIS", "LUMINA", "VORTEX", "NEXUS"];

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-24 px-6 bg-brand-darker/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-brand-cream">
            Trusted by Industry Leaders
          </h2>
          <p className="text-brand-cream/60">Delivering excellence across global organizations.</p>
        </motion.div>

        {/* Brands */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 mb-20 opacity-40 grayscale">
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="text-2xl font-black tracking-widest text-brand-cream"
            >
              {brand}
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-8 rounded-2xl bg-brand-dark border border-brand-earth/10 relative"
            >
              <div className="flex text-brand-metallic mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg text-brand-cream/90 italic mb-8 leading-relaxed">
                &quot;{test.quote}&quot;
              </p>
              <div>
                <p className="font-semibold text-brand-cream">{test.author}</p>
                <p className="text-sm text-brand-cream/50">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
