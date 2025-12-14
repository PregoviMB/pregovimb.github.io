"use client"

import { motion } from "motion/react";
import { Github, Linkedin, Mail, Facebook, Instagram } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useParallax } from "../hooks/useParallax";
import { TechCarousel } from "./TechCarousel";

export function Hero() {
  const { theme } = useTheme();
  const [ref, y] = useParallax(30);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Avatar with glass effect */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1 }}
            style={{ y }}
            className="relative"
          >
            <div
              className={`w-40 h-40 rounded-full backdrop-blur-xl bg-gradient-to-br p-1 shadow-2xl ${
                theme === "dark"
                  ? "from-purple-500/20 to-cyan-500/20 border border-white/20"
                  : "from-purple-300/40 to-cyan-300/40 border border-purple-200"
              }`}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-2xl opacity-30 -z-10"></div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Développeur Créatif
            </h1>
            <p className={`text-xl md:text-2xl ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
              Fullstack • Mobile • Designer • Illustrateur
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`max-w-2xl text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
          >
            Je crée des expériences numériques exceptionnelles en combinant code,
            design et créativité. De la conception à la réalisation, je donne vie
            à vos idées.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-xl backdrop-blur-xl bg-gradient-to-r border transition-all duration-200 shadow-lg ${
                theme === "dark"
                  ? "from-purple-500/20 to-cyan-500/20 border-white/20 hover:border-white/30 active:bg-white/5"
                  : "from-purple-200/60 to-cyan-200/60 border-purple-300 hover:border-purple-400 active:bg-purple-100/80"
              }`}
            >
              Voir mes projets
            </motion.a>
            <motion.a
              href="#contacts"
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-xl backdrop-blur-xl border transition-all duration-200 shadow-lg ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 hover:border-white/20 active:bg-white/10"
                  : "bg-white/60 border-slate-200 hover:border-slate-300 active:bg-white/80"
              }`}
            >
              Me contacter
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex gap-3"
          >
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Facebook, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Mail, href: "#contact" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-xl backdrop-blur-xl border transition-all duration-200 ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 hover:border-white/20 active:bg-white/10"
                    : "bg-white/60 border-slate-200 hover:border-slate-300 active:bg-white/80"
                }`}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Tech Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="w-full max-w-3xl"
          >
            <TechCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
