"use client";

import { Globe, Mail, Briefcase } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-brand-earth/20 bg-brand-dark py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-brand-metallic">
            <Image src="/logo.png" alt="Ruben Monteiro Logo" fill className="object-cover" />
          </div>
          <span className="text-xl font-bold text-brand-cream">Ruben Monteiro</span>
        </div>
        
        <div className="flex items-center space-x-6 text-brand-cream/60">
          <a href="https://contra.com/ruben_monteiro_xxdm1wyq?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=ruben_monteiro_xxdm1wyq" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-brand-metallic transition-colors group" aria-label="Contra Profile">
            <Briefcase size={20} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium tracking-wide">Contra</span>
          </a>
          <a href="#" className="hover:text-brand-metallic transition-colors" aria-label="Portfolio">
            <Globe size={20} />
          </a>
          <a href="mailto:benorwtv@proton.me" className="hover:text-brand-metallic transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 text-center md:text-left text-sm text-brand-cream/40">
        © {new Date().getFullYear()} Ruben Monteiro. Esmoriz, Portugal.
      </div>
    </footer>
  );
}
