"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import clsx from "clsx";

const plans = [
  {
    name: "Consulting",
    price: "$150",
    period: "/ hr",
    description: "For strategic guidance, architecture reviews, and design system planning.",
    features: ["Technical Architecture", "UI/UX Audits", "Performance Profiling", "Strategic Planning"],
    isPopular: false,
  },
  {
    name: "Project",
    price: "$10k+",
    period: " fixed",
    description: "End-to-end delivery of web applications, landing pages, and complex interfaces.",
    features: ["Full-stack Development", "Premium UI/UX Design", "Framer Motion Animations", "90+ Lighthouse Score", "3 Months Support"],
    isPopular: true,
  },
  {
    name: "Retainer",
    price: "$4k",
    period: "/ mo",
    description: "Ongoing development and design support for evolving digital products.",
    features: ["Dedicated Monthly Hours", "Priority Support", "Iterative Design", "Continuous Deployment", "Direct Slack Channel"],
    isPopular: false,
  },
];

export default function Pricing() {
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
            Investment
          </h2>
          <p className="text-brand-cream/60 text-lg max-w-2xl mx-auto">
            Transparent pricing for premium digital craftsmanship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
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
                  Most Requested
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
                Inquire Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
