"use client"

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";

import { TechIcon } from "./TechIcon";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Motion", level: 85 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "API REST", level: 92 },
      ],
    },
    {
      title: "Mobile",
      skills: [
        { name: "React Native", level: 88 },
        { name: "Flutter", level: 80 },
        { name: "Swift", level: 75 },
        { name: "Kotlin", level: 75 },
      ],
    },
    {
      title: "Design",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Adobe Suite", level: 90 },
        { name: "Illustration", level: 85 },
        { name: "UI/UX Design", level: 92 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 px-4 ${theme === "dark" ? "bg-black/20" : "bg-slate-100/50"}`}
      ref={ref}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Compétences
          </h2>
          <p className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
            Technologies et outils que je maîtrise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className={`p-8 rounded-2xl backdrop-blur-xl border shadow-xl ${
                theme === "dark"
                  ? "bg-white/5 border-white/10"
                  : "bg-white/80 border-slate-200"
              }`}
              style={{
                boxShadow:
                  theme === "dark"
                    ? "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
                    : "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 className="text-2xl mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={theme === "dark" ? "text-purple-400" : "text-purple-600"}>
                          <TechIcon name={skill.name} className="w-5 h-5" />
                        </div>
                        <span className={theme === "dark" ? "text-slate-300" : "text-slate-700"}>
                          {skill.name}
                        </span>
                      </div>
                      <span className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`h-2 rounded-full backdrop-blur-xl overflow-hidden ${
                        theme === "dark" ? "bg-white/10" : "bg-slate-200"
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
