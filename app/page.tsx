"use client";

import { Hero } from "@/src/components/Hero";
import { About } from "@/src/components/About";
import { Skills } from "@/src/components/Skills";
import { Projects } from "@/src/components/Projects";
import { Testimonials } from "@/src/components/Testimonials";
import { Contacts } from "@/src/components/Contacts";
import { Navigation } from "@/src/components/Navigation";
import { ScrollToNextButton } from "@/src/components/ScrollToNextButton";
import { Toaster } from "@/src/components/ui/sonner";
import { ThemeProvider, useTheme } from "@/src/contexts/ThemeContext";
import { motion, useScroll, useTransform } from "motion/react";

function AppContent() {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${
        theme === "dark"
          ? "bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
          : "bg-linear-to-br from-slate-50 via-white to-slate-100 text-slate-900"
      }`}
    >
      {/* Animated background orbs with parallax */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 200]),
          }}
          className={`absolute top-20 left-10 w-96 h-96 rounded-full blur-[120px] animate-pulse ${
            theme === "dark" ? "bg-purple-500/30" : "bg-purple-300/40"
          }`}
        ></motion.div>
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -150]),
          }}
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-[120px] animate-pulse delay-1000 ${
            theme === "dark" ? "bg-cyan-500/30" : "bg-cyan-300/40"
          }`}
        ></motion.div>
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 100]),
            x: useTransform(scrollYProgress, [0, 1], [0, -100]),
          }}
          className={`absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-[120px] animate-pulse delay-500 ${
            theme === "dark" ? "bg-pink-500/20" : "bg-pink-300/30"
          }`}
        ></motion.div>
        
        {/* Additional depth layers */}
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 300]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.2]),
          }}
          className={`absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-[100px] ${
            theme === "dark" ? "bg-indigo-500/20" : "bg-indigo-300/30"
          }`}
        ></motion.div>
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -200]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.4, 0.1]),
          }}
          className={`absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full blur-[110px] ${
            theme === "dark" ? "bg-teal-500/20" : "bg-teal-300/30"
          }`}
        ></motion.div>
      </div>

      <Navigation />
      <ScrollToNextButton />
      
      {/* my main section */}
      <main className="relative z-10">              
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contacts />
      </main>

      <footer
        className={`relative z-10 border-t py-8 ${
          theme === "dark"
            ? "border-white/10 text-slate-400"
            : "border-slate-200 text-slate-600"
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Portfolio. Tous droits réservés.</p>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}

// Le composant principal reste un composant serveur
export default function Home() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
