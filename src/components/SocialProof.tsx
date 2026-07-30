"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  EN: {
    title: "Client Experience",
    subtitle: "Real feedback from my professional history.",
    testimonials: [
      {
        quote: "Excelent customer service",
        author: "Pingo Doce",
        role: "5 stars",
      },
      {
        quote: "Teamwork was off the charts and the app delivered fulfilled our needs",
        author: "Ferreira de Sá S.A.",
        role: "5 stars",
      },
    ]
  },
  PT: {
    title: "Experiência de Clientes",
    subtitle: "Feedback real do meu percurso profissional.",
    testimonials: [
      {
        quote: "Excelente serviço ao cliente",
        author: "Pingo Doce",
        role: "5 estrelas",
      },
      {
        quote: "O trabalho de equipa foi excecional e a aplicação entregue satisfez as nossas necessidades",
        author: "Ferreira de Sá S.A.",
        role: "5 estrelas",
      },
    ]
  }
};

export default function SocialProof() {
  const { lang } = useLanguage();

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
            {content[lang].title}
          </h2>
          <p className="text-brand-cream/60">{content[lang].subtitle}</p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {content[lang].testimonials.map((test, index) => (
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
