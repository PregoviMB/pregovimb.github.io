"use client"

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Smartphone, Palette, Pencil } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useParallax } from "../hooks/useParallax";
import { AboutData } from "../datas/SectionsPageDatas";


export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const [parallaxRef, y] = useParallax(50);


  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {AboutData.title}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
            {AboutData.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12" ref={parallaxRef}>
          {AboutData.stacks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ y: index % 2 === 0 ? y : undefined }}
              className="group"
            >
              <div
                className={`h-full p-8 rounded-2xl backdrop-blur-xl border transition-all duration-300 shadow-xl ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                    : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white"
                }`}
                style={{
                  boxShadow:
                    theme === "dark"
                      ? "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
                      : "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
                }}
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                    theme === "dark"
                      ? "from-purple-500/20 to-cyan-500/20"
                      : "from-purple-200 to-cyan-200"
                  }`}
                >
                  <item.icon className={`w-8 h-8 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`} />
                </div>
                <h3 className={`text-2xl mb-3 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                  {item.title}
                </h3>
                <p className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
