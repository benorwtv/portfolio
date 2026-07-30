"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  EN: {
    title: "Frequently Asked",
    faqs: [
      {
        q: "What is your typical process for a new project?",
        a: "My process begins with a deep-dive discovery phase to understand your goals, target audience, and brand identity. This is followed by wireframing, high-fidelity UI/UX design, and finally, meticulous development and deployment with comprehensive testing.",
      },
      {
        q: "How long does a standard web application take to build?",
        a: "A standard landing page typically takes 2-3 weeks, while a full-scale web application ranges from 6 to 12 weeks depending on complexity, integrations, and feature requirements.",
      },
      {
        q: "Do you design the UI/UX as well as write the code?",
        a: "Yes. By handling both design and development, I eliminate the usual friction between design and engineering, resulting in a cohesive, polished final product.",
      },
      {
        q: "What technologies do you specialize in?",
        a: "I specialize in the modern React ecosystem, specifically Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. For backend services, I typically integrate with Supabase, Firebase, or custom Node.js APIs.",
      },
    ]
  },
  PT: {
    title: "Perguntas Frequentes",
    faqs: [
      {
        q: "Qual é o seu processo típico para um novo projeto?",
        a: "O meu processo começa com uma fase de descoberta profunda para entender os seus objetivos, público-alvo e identidade de marca. Segue-se o wireframing, design UI/UX de alta fidelidade e, finalmente, o desenvolvimento e implementação com testes rigorosos.",
      },
      {
        q: "Quanto tempo demora a construir uma aplicação web standard?",
        a: "Uma landing page típica demora 2-3 semanas, enquanto uma aplicação web completa varia entre 6 a 12 semanas, dependendo da complexidade, integrações e requisitos.",
      },
      {
        q: "Faz o design UI/UX além de escrever o código?",
        a: "Sim. Ao lidar com o design e com o desenvolvimento, elimino a fricção comum entre o design e a engenharia, resultando num produto final coeso e polido.",
      },
      {
        q: "Em que tecnologias se especializa?",
        a: "Especializo-me no ecossistema moderno de React, especificamente Next.js, TypeScript, Tailwind CSS e Framer Motion. Para backend, integro normalmente com Supabase, Firebase ou APIs Node.js personalizadas.",
      },
    ]
  }
};

export default function FAQ() {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-brand-darker/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-cream">
            {content[lang].title}
          </h2>
        </motion.div>

        <div className="space-y-4">
          {content[lang].faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border border-brand-earth/20 rounded-xl overflow-hidden bg-brand-dark"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-brand-earth/5"
                >
                  <span className="font-medium text-brand-cream text-lg">{faq.q}</span>
                  <ChevronDown
                    className={clsx(
                      "text-brand-metallic transition-transform duration-300",
                      isOpen ? "rotate-180" : "rotate-0"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 text-brand-cream/60 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
