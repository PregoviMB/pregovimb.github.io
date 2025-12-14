"use client"

import { motion } from "motion/react";
import { TechIcon } from "./TechIcon";
import { useTheme } from "../contexts/ThemeContext";

export function TechCarousel() {
  const { theme } = useTheme();

  const technologies = [
    "React / Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Python",
    "PostgreSQL",
    "React Native",
    "Flutter",
    "Figma",
    "Adobe Suite",
  ];

  // Dupliquer les technologies pour créer un effet de boucle infinie
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="relative">
        {/* Gradient fade sur le côté gauche uniquement */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
            theme === "dark"
              ? "bg-gradient-to-r from-slate-950 to-transparent"
              : "bg-gradient-to-r from-slate-50 to-transparent"
          }`}
        />

        {/* Conteneur du carrousel */}
        <motion.div
          className="flex gap-2.5 items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedTechnologies.map((tech, index) => (
            <div
              key={index}
              className={`flex items-center justify-center p-2.5 rounded-lg backdrop-blur-xl border ${
                theme === "dark"
                  ? "bg-white/5 border-white/10"
                  : "bg-white/60 border-slate-200"
              }`}
              style={{
                boxShadow:
                  theme === "dark"
                    ? "0 4px 16px 0 rgba(0, 0, 0, 0.2)"
                    : "0 4px 16px 0 rgba(0, 0, 0, 0.05)",
              }}
            >
              <div className={theme === "dark" ? "text-purple-400" : "text-purple-600"}>
                <TechIcon name={tech} className="w-5 h-5" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
