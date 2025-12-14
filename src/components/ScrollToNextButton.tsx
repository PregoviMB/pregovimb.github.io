"use client"

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useActiveSection } from "../hooks/useActiveSection";
import { SectionsPage } from "../constants/SectionsPage";

export function ScrollToNextButton() {
  const { theme } = useTheme();
  const activeSection = useActiveSection();

  // Extract from Sections Page all IDs
  // console.log("Section ID");
  // console.log(SectionsPage.map((item) => item.id));
  const sections = SectionsPage.map((item) => item.id);

  const currentIndex = sections.indexOf(activeSection);
  const nextSection = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

  const handleClick = () => {
    if (nextSection) {
      const element = document.getElementById(nextSection);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Ne pas afficher le bouton sur la dernière section
  if (!nextSection) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-40 group"
      aria-label={`Scroll to ${nextSection}`}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className={`w-12 h-12 rounded-full backdrop-blur-xl border flex items-center justify-center transition-all duration-300 shadow-lg ${
          theme === "dark"
            ? "bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40 hover:shadow-purple-500/20"
            : "bg-white/90 border-slate-300 hover:bg-white hover:border-slate-400 hover:shadow-purple-500/30"
        }`}
      >
        <ChevronDown
          className={`w-6 h-6 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}
        />
      </motion.div>
    </motion.button>
  );
}
