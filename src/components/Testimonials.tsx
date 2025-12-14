"use client"

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { ImageWithFallback } from "./ImageWithFallback";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sophie Martin",
      role: "CEO, TechStart",
      image:
        "https://images.unsplash.com/photo-1585554414787-09b821c321c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MjMwOTE1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      content:
        "Un travail exceptionnel ! Le portfolio développé dépasse toutes nos attentes. L'attention aux détails et la créativité sont remarquables.",
      rating: 5,
    },
    {
      id: 2,
      name: "Thomas Dubois",
      role: "Directeur Marketing, InnovCorp",
      image:
        "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjIyNjE3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      content:
        "Collaboration fluide et résultats impressionnants. Notre application mobile a été livrée en temps et en heure avec une qualité irréprochable.",
      rating: 5,
    },
    {
      id: 3,
      name: "Marie Lefevre",
      role: "Fondatrice, DesignStudio",
      image:
        "https://images.unsplash.com/photo-1570170609489-43197f518df0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBlcnNvbnxlbnwxfHx8fDE3NjIzMDQ0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      content:
        "Une vision créative unique et des compétences techniques solides. Les illustrations créées ont apporté une réelle valeur ajoutée à notre marque.",
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-play
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section
      id="testimonials"
      className={`py-20 px-4 ${theme === "dark" ? "bg-black/20" : "bg-slate-100/50"}`}
      ref={ref}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Témoignages
          </h2>
          <p className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
            Ce que disent mes clients
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div
                    className={`p-8 md:p-12 rounded-2xl backdrop-blur-xl border shadow-xl ${
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
                    <div className="flex flex-col items-center text-center">
                      {/* Quote Icon */}
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                          theme === "dark"
                            ? "bg-gradient-to-br from-purple-500/20 to-cyan-500/20"
                            : "bg-gradient-to-br from-purple-200 to-cyan-200"
                        }`}
                      >
                        <Quote
                          className={`w-8 h-8 ${
                            theme === "dark" ? "text-purple-400" : "text-purple-600"
                          }`}
                        />
                      </div>

                      {/* Testimonial Content */}
                      <p
                        className={`text-lg md:text-xl mb-8 italic ${
                          theme === "dark" ? "text-slate-300" : "text-slate-700"
                        }`}
                      >
                        "{testimonial.content}"
                      </p>

                      {/* Rating */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 fill-current text-yellow-400"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-400/50">
                          <ImageWithFallback
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <h4
                            className={theme === "dark" ? "text-white" : "text-slate-900"}
                          >
                            {testimonial.name}
                          </h4>
                          <p
                            className={`text-sm ${
                              theme === "dark" ? "text-slate-400" : "text-slate-600"
                            }`}
                          >
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className={`-left-4 md:-left-12 ${
                theme === "dark"
                  ? "bg-white/10 border-white/20 hover:bg-white/20 text-white"
                  : "bg-white border-slate-300 hover:bg-slate-50 text-slate-900"
              }`}
            />
            <CarouselNext
              className={`-right-4 md:-right-12 ${
                theme === "dark"
                  ? "bg-white/10 border-white/20 hover:bg-white/20 text-white"
                  : "bg-white border-slate-300 hover:bg-slate-50 text-slate-900"
              }`}
            />
          </Carousel>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? theme === "dark"
                      ? "w-8 bg-purple-400"
                      : "w-8 bg-purple-600"
                    : theme === "dark"
                    ? "bg-white/30"
                    : "bg-slate-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
