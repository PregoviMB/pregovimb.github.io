"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useActiveSection } from "../hooks/useActiveSection";
import { SectionsPage } from "../constants/SectionsPage";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Naw items equal Section Page { label: string; href: string; id: string; }[]
  const navItems = SectionsPage;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`rounded-2xl backdrop-blur-xl border shadow-2xl transition-all duration-300 ${
            isScrolled ? "shadow-xl" : ""
          } ${
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
          <div className="flex items-center justify-between px-6 py-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Pregovi MB
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              <div className="flex items-center space-x-1 relative">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  const isHovered = hoveredItem === item.id;
                  const shouldShowIndicator = isActive || isHovered;
                  
                  return (
                    <motion.div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <AnimatePresence>
                        {shouldShowIndicator && (
                          <motion.div
                            layoutId={isHovered ? "hoverPill" : "activePill"}
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
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                              opacity: { duration: 0.2 },
                            }}
                          />
                        )}
                      </AnimatePresence>
                      
                      <motion.a
                        href={item.href}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative px-4 py-2 rounded-xl transition-colors duration-200 z-10 block ${
                          isActive
                            ? theme === "dark"
                              ? "text-white"
                              : "text-slate-900"
                            : theme === "dark"
                            ? "text-slate-400 hover:text-slate-200"
                            : "text-slate-600 hover:text-slate-800"
                        }`}
                      >
                        {item.label}
                      </motion.a>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Theme Toggle */}
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  theme === "dark"
                    ? "hover:bg-white/10"
                    : "hover:bg-slate-100"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-700" />
                )}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  theme === "dark"
                    ? "hover:bg-white/10"
                    : "hover:bg-slate-100"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-700" />
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  theme === "dark"
                    ? "hover:bg-white/10"
                    : "hover:bg-slate-100"
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden border-t px-6 py-4 space-y-2 ${
                theme === "dark" ? "border-white/10" : "border-slate-200"
              }`}
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? theme === "dark"
                          ? "text-white bg-white/10 border-l-4 border-purple-400"
                          : "text-slate-900 bg-slate-100 border-l-4 border-purple-600"
                        : theme === "dark"
                        ? "text-slate-200 hover:text-white hover:bg-white/10"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
