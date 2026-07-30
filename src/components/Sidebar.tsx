"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Home, Briefcase, Award, DollarSign, HelpCircle } from "lucide-react";
import Image from "next/image";

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "features", label: "Services", icon: Briefcase },
  { id: "social-proof", label: "Experience", icon: Award },
  { id: "pricing", label: "Rates", icon: DollarSign },
  { id: "faq", label: "FAQ", icon: HelpCircle },
];

export default function Sidebar() {
  const [lang, setLang] = useState<"EN" | "PT">("EN");
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleLang = () => {
    setLang(lang === "EN" ? "PT" : "EN");
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-brand-dark border-r border-brand-earth/20 p-6">
      <div className="flex items-center justify-between mb-12">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-brand-metallic">
          <Image src="/logo.png" alt="Ruben Monteiro Logo" fill className="object-cover" />
        </div>
        <button
          onClick={toggleLang}
          className="flex items-center space-x-2 text-sm font-medium text-brand-cream/70 hover:text-brand-metallic transition-colors"
        >
          <Globe size={16} />
          <span>{lang}</span>
        </button>
      </div>

      <nav className="flex-1 space-y-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="w-full flex items-center space-x-4 px-4 py-3 text-left text-brand-cream/70 hover:text-brand-metallic hover:bg-brand-earth/10 rounded-xl transition-all group"
          >
            <item.icon
              size={20}
              className="text-brand-cream/40 group-hover:text-brand-crimson transition-colors"
            />
            <span className="font-medium tracking-wide">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto">
        <p className="text-xs text-brand-cream/40 text-center">
          © {new Date().getFullYear()} Ruben Monteiro.
          <br /> All rights reserved.
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Top Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-brand-dark/80 backdrop-blur-md border-b border-brand-earth/20 z-50 flex items-center justify-between px-4">
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-brand-metallic">
          <Image src="/logo.png" alt="Ruben Monteiro Logo" fill className="object-cover" />
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLang}
            className="text-sm font-medium text-brand-cream/70 hover:text-brand-metallic transition-colors"
          >
            {lang}
          </button>
          <button onClick={() => setIsOpen(true)} className="text-brand-cream">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-50 md:hidden bg-brand-dark"
          >
            <div className="absolute top-4 right-4 z-50">
              <button onClick={() => setIsOpen(false)} className="text-brand-cream p-2">
                <X size={24} />
              </button>
            </div>
            {sidebarContent}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed top-0 left-0 w-64 h-screen z-40">
        {sidebarContent}
      </div>
    </>
  );
}
