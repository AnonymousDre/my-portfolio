import githubIcon from "./assets/github.png";
import linkedinIcon from "./assets/linkedin.png";

function Sidebar() {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    // { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "awards", label: "Awards" },
    { id: "faqs", label: "FAQs" },
  ];

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;

    if (prefersReducedMotion) {
      target.scrollIntoView({ behavior: "auto", block: "start" });
      return;
    }

    const startY = window.scrollY || window.pageYOffset;
    const targetY =
      target.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);

    const durationMs = 250;
    let startTime;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const tick = (now) => {
      startTime ??= now;

      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      const eased = easeInOutCubic(progress);
      const nextY = startY + (targetY - startY) * eased;
      window.scrollTo(0, nextY);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  return (
    <div className="sidebar">
      {/* Top logo */}
      <div className="icon">
        <h1 className="name-logo">AQ</h1>
      </div>

      {/* Centered links */}
      <ul className="sections">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                history.pushState(null, "", `#${item.id}`);
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Bottom socials */}
      <div className="socials">
        <a href="https://www.linkedin.com/in/andre-thomas-quizon-386399331" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://github.com/AnonymousDre" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;