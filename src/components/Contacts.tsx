"use client"

import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { useTheme } from "../contexts/ThemeContext";
import { ContactsData } from "../datas/SectionsPageDatas";

export function Contacts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé avec succès !", {
      description: "Je vous répondrai dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  

  return (
    <section
      id="contacts"
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
            {ContactsData.title}
          </h2>
          <p className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
            {ContactsData.desciption}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div
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
              <h3 className={`text-2xl mb-6 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                Informations
              </h3>
              <div className="space-y-6">
                {ContactsData.infos.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex items-start gap-4 group p-4 rounded-xl transition-all duration-300 ${
                      theme === "dark" ? "hover:bg-white/5" : "hover:bg-slate-100"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${
                        theme === "dark"
                          ? "from-purple-500/20 to-cyan-500/20"
                          : "from-purple-200 to-cyan-200"
                      }`}
                    >
                      <info.icon
                        className={`w-6 h-6 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}
                      />
                    </div>
                    <div>
                      <h4 className={`mb-1 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                        {info.title}
                      </h4>
                      <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div
              className={`p-8 rounded-2xl backdrop-blur-xl bg-gradient-to-br border shadow-xl ${
                theme === "dark"
                  ? "from-purple-500/10 to-cyan-500/10 border-white/10"
                  : "from-purple-100 to-cyan-100 border-purple-200"
              }`}
              style={{
                boxShadow:
                  theme === "dark"
                    ? "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
                    : "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 className={`text-xl mb-3 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                {ContactsData.other.title}
              </h3>
              <p className={theme === "dark" ? "text-slate-300" : "text-slate-700"}>
              {ContactsData.other.content}
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
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
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block mb-2 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl backdrop-blur-xl border focus:border-purple-400 outline-none transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-white/5 border-white/10 text-white placeholder-slate-500"
                        : "bg-white border-slate-200 text-slate-900 placeholder-slate-400"
                    }`}
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block mb-2 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl backdrop-blur-xl border focus:border-purple-400 outline-none transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-white/5 border-white/10 text-white placeholder-slate-500"
                        : "bg-white border-slate-200 text-slate-900 placeholder-slate-400"
                    }`}
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block mb-2 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 rounded-xl backdrop-blur-xl border focus:border-purple-400 outline-none transition-all duration-300 resize-none ${
                      theme === "dark"
                        ? "bg-white/5 border-white/10 text-white placeholder-slate-500"
                        : "bg-white border-slate-200 text-slate-900 placeholder-slate-400"
                    }`}
                    placeholder="Votre message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 0.98 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`w-full px-6 py-4 rounded-xl backdrop-blur-xl border transition-all duration-200 shadow-lg flex items-center justify-center gap-2 relative ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-white/20 active:bg-white/5 text-white"
                      : "bg-gradient-to-r from-purple-200/60 to-cyan-200/60 border-purple-300 active:bg-purple-100/80 text-slate-900"
                  }`}
                >
                  <AnimatePresence>
                    {isHovered && (
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
                  <span className="relative z-10 flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Envoyer le message
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
