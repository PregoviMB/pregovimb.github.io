"use client"

import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { useTheme } from "../contexts/ThemeContext";
import { useParallax } from "../hooks/useParallax";


export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null);
  const { theme } = useTheme();
  const [parallaxRef, y] = useParallax(40);

  const projects = [
    {
      id: 1,
      title: "Application E-commerce",
      category: "web",
      description: "Plateforme de vente en ligne avec panier et paiement sécurisé",
      image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MjMxNDU2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "Node.js", "Stripe"],
    },
    {
      id: 2,
      title: "App Mobile Fitness",
      category: "mobile",
      description: "Application de suivi d'entraînement et nutrition",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYyMjc2NzA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React Native", "Firebase"],
    },
    {
      id: 3,
      title: "Identité Visuelle Startup",
      category: "design",
      description: "Branding complet pour une startup tech",
      image: "https://images.unsplash.com/photo-1664520132859-727fc515fc8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzYyMzQ5MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Figma", "Illustrator"],
    },
    {
      id: 4,
      title: "Portfolio Interactif",
      category: "web",
      description: "Site portfolio avec animations et effets 3D",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlfGVufDF8fHx8MTc2MjI2MDUzMnww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "Three.js", "Motion"],
    },
    {
      id: 5,
      title: "Illustrations Digitales",
      category: "illustration",
      description: "Série d'illustrations pour livre jeunesse",
      image: "https://images.unsplash.com/photo-1725347740942-c5306e3c970f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaWxsdXN0cmF0aW9uJTIwYXJ0fGVufDF8fHx8MTc2MjMzNzkxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Procreate", "Photoshop"],
    },
    {
      id: 6,
      title: "Dashboard Analytics",
      category: "web",
      description: "Interface de visualisation de données en temps réel",
      image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYyMjM5ODAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Next.js", "D3.js", "PostgreSQL"],
    },
  ];

  const filters = [
    { id: "all", label: "Tout" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "design", label: "Design" },
    { id: "illustration", label: "Illustration" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Projets
          </h2>
          <p className={`text-lg mb-8 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
            Découvrez une sélection de mes réalisations
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              const isHovered = hoveredFilter === filter.id;
              
              return (
                <motion.button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  whileHover={{ scale: 0.98 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setHoveredFilter(filter.id)}
                  onMouseLeave={() => setHoveredFilter(null)}
                  className={`px-6 py-2.5 rounded-xl backdrop-blur-xl border transition-all duration-200 shadow-lg relative ${
                    isActive
                      ? theme === "dark"
                        ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-white/20 text-white"
                        : "bg-gradient-to-r from-purple-200/60 to-cyan-200/60 border-purple-300 text-slate-900"
                      : theme === "dark"
                      ? "bg-white/5 border-white/10 text-slate-400 active:bg-white/10"
                      : "bg-white/60 border-slate-200 text-slate-600 active:bg-white/80"
                  }`}
                >
                  <AnimatePresence>
                    {isHovered && !isActive && (
                      <motion.div
                        className={`absolute inset-0 rounded-xl backdrop-blur-2xl border shadow-lg ${
                          theme === "dark"
                            ? "bg-gradient-to-br from-white/20 via-white/10 to-white/5 border-white/30"
                            : "bg-gradient-to-br from-white/90 via-white/70 to-white/50 border-white/60"
                        }`}
                        style={{
                          boxShadow:
                            theme === "dark"
                              ? "0 8px 32px 0 rgba(255, 255, 255, 0.1), inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)"
                              : "0 8px 32px 0 rgba(0, 0, 0, 0.08), inset 0 1px 1px 0 rgba(255, 255, 255, 0.8)",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative z-10">{filter.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={parallaxRef}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ y: index % 3 === 1 ? y : undefined }}
              className="group"
            >
              <div
                className={`h-full rounded-2xl backdrop-blur-xl border overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 hover:border-white/20"
                    : "bg-white/80 border-slate-200 hover:border-slate-300"
                }`}
                style={{
                  boxShadow:
                    theme === "dark"
                      ? "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
                      : "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t opacity-60 ${
                      theme === "dark"
                        ? "from-slate-950 via-slate-950/50 to-transparent"
                        : "from-slate-100 via-slate-100/50 to-transparent"
                    }`}
                  ></div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-cyan-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button className="p-3 rounded-lg backdrop-blur-xl bg-white/20 hover:bg-white/30 transition-all duration-300">
                      <Github className="w-5 h-5" />
                    </button>
                    <button className="p-3 rounded-lg backdrop-blur-xl bg-white/20 hover:bg-white/30 transition-all duration-300">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className={`text-xl mb-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                    {project.title}
                  </h3>
                  <p className={`mb-4 text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 rounded-lg backdrop-blur-xl border text-xs ${
                          theme === "dark"
                            ? "bg-white/10 border-white/10 text-slate-300"
                            : "bg-slate-100 border-slate-200 text-slate-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
