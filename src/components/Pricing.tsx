"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import clsx from "clsx";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  EN: {
    title: "Investment",
    subtitle: "Transparent pricing for custom software and AI solutions.",
    plans: [
      {
        name: "Consulting",
        price: "$50",
        period: "/ hr",
        description: "For strategic guidance, architecture reviews, and software planning.",
        features: ["Technical Architecture", "UI/UX Audits", "Performance Profiling", "Strategic Planning"],
        isPopular: false,
        popularBadge: "Most Requested",
        btn: "Inquire Now"
      },
      {
        name: "Project",
        price: "$2k+",
        period: " fixed",
        description: "End-to-end delivery of custom software, AI integrations, and web apps.",
        features: ["Full-stack Development", "AI Integrations", "Responsive UI/UX", "Project Support"],
        isPopular: true,
        popularBadge: "Most Requested",
        btn: "Inquire Now"
      },
      {
        name: "Retainer",
        price: "$1.5k",
        period: "/ mo",
        description: "Ongoing development, automation support, and software maintenance.",
        features: ["Dedicated Monthly Hours", "Priority Support", "Iterative Improvements", "Continuous Deployment", "Direct Slack Channel"],
        isPopular: false,
        popularBadge: "Most Requested",
        btn: "Inquire Now"
      },
    ]
  },
  PT: {
    title: "Investimento",
    subtitle: "Preços transparentes para software personalizado e soluções de IA.",
    plans: [
      {
        name: "Consultoria",
        price: "€45",
        period: "/ h",
        description: "Orientação estratégica, revisões de arquitetura e planeamento de software.",
        features: ["Arquitetura Técnica", "Auditorias UI/UX", "Análise de Desempenho", "Planeamento Estratégico"],
        isPopular: false,
        popularBadge: "Mais Pedido",
        btn: "Consultar"
      },
      {
        name: "Projeto",
        price: "€2k+",
        period: " fixo",
        description: "Entrega de software personalizado, integrações de IA e apps web.",
        features: ["Desenvolvimento Full-stack", "Integrações IA", "UI/UX Responsivo", "Suporte de Projeto"],
        isPopular: true,
        popularBadge: "Mais Pedido",
        btn: "Consultar"
      },
      {
        name: "Retenção",
        price: "€1.5k",
        period: "/ mês",
        description: "Desenvolvimento contínuo, suporte de automação e manutenção.",
        features: ["Horas Mensais Dedicadas", "Suporte Prioritário", "Melhorias Iterativas", "Deploy Contínuo", "Canal Slack Direto"],
        isPopular: false,
        popularBadge: "Mais Pedido",
        btn: "Consultar"
      },
    ]
  }
};

export default function Pricing() {
  const { lang } = useLanguage();

  return (
    <section id="pricing" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
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
          <p className="text-brand-cream/60 text-lg max-w-2xl mx-auto">
            {content[lang].subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {content[lang].plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={clsx(
                "relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2",
                plan.isPopular
                  ? "bg-brand-darker border-brand-crimson shadow-[0_0_30px_rgba(139,0,0,0.15)] md:py-12"
                  : "bg-brand-dark border-brand-earth/20 hover:border-brand-earth/50"
              )}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-crimson text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  {plan.popularBadge}
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-2 text-brand-cream">{plan.name}</h3>
              <p className="text-brand-cream/60 text-sm h-10 mb-6">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-brand-cream/50">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start text-sm text-brand-cream/80">
                    <CheckCircle2 size={18} className="mr-3 text-brand-metallic shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                className={clsx(
                  "w-full py-3 rounded-xl font-medium transition-colors",
                  plan.isPopular
                    ? "bg-brand-crimson hover:bg-red-800 text-white"
                    : "bg-brand-earth/10 hover:bg-brand-earth/20 text-brand-cream"
                )}
              >
                {plan.btn}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
