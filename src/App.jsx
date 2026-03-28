import { useEffect } from "react";
import Sidebar from "./Sidebar";
import Landing from "./Landing";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Awards from "./Awards";
import FAQs from "./FAQs";

export default function Portfolio() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(".landing-section"));
    if (sections.length === 0) return;

    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;

    if (prefersReducedMotion) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-layout">
      <Sidebar />
      <main className="app-content">
        <div className="landing">
          <Landing />
          <About />
          {/* <Services /> */}
          <Projects />
          <Awards />
          <FAQs />
        </div>
      </main>
    </div>
  );
}
