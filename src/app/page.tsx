import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-brand-darker">
      <Sidebar />
      <main className="flex-1 md:ml-64 w-full">
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
