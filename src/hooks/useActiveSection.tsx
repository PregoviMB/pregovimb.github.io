import { useState, useEffect } from "react";
import { SectionsPage } from "../constants/SectionsPage";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Extract from Sections Page all IDs
    // console.log("Section ID");
    // console.log(SectionsPage.map((item) => item.id));
    const sections = SectionsPage.map((item) => item.id);
    
    const observer = new IntersectionObserver(
      (entries) => {
        // Trouver la section la plus visible
        let maxRatio = 0;
        let mostVisibleSection = activeSection;
        
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });
        
        if (maxRatio > 0.3) {
          setActiveSection(mostVisibleSection);
        }
      },
      {
        threshold: [0, 0.1, 0.3, 0.5, 0.7, 1],
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return activeSection;
}
