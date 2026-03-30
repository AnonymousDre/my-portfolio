import { useEffect, useState } from "react";

import award11 from "./assets/1 1.jpg";
import award12 from "./assets/1 2.jpg";
import award21 from "./assets/2 1.jpg";
import award22 from "./assets/2 2.jpg";
import award31 from "./assets/3 1.jpg";
import award32 from "./assets/3 2.jpg";
import award41 from "./assets/4 1.jpg";

export default function Awards() {
  const [lightbox, setLightbox] = useState(null);
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const shouldUseInPlaceZoom = () => {
    if (typeof window === "undefined") return false;
    const coarsePointer = window.matchMedia?.("(hover: none) and (pointer: coarse)")
      ?.matches;
    const smallViewport = window.matchMedia?.("(max-width: 900px)")?.matches;
    return Boolean(coarsePointer || smallViewport);
  };

  useEffect(() => {
    if (!lightbox) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setLightbox(null);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [lightbox]);

  useEffect(() => {
    if (zoomedIndex === null) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setZoomedIndex(null);
    };

    const onPointerDown = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const activeButton = document.querySelector(
        `button.award-media[data-award-index="${zoomedIndex}"]`
      );
      if (activeButton && activeButton.contains(target)) return;
      setZoomedIndex(null);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [zoomedIndex]);

  const awards = [
    {
      title: "Dean’s Lister",
      detail: "Holy Angel University • 1st Year • 1st Semester",
      imageSrc: award11,
      imageAlt: "Dean’s Lister award (1st year, 1st semester)",
    },
    {
      title: "Dean’s Lister",
      detail: "Holy Angel University • 1st Year • 2nd Semester",
      imageSrc: award12,
      imageAlt: "Dean’s Lister award (1st year, 2nd semester)",
    },
    {
      title: "Dean’s Lister",
      detail: "Holy Angel University • 2nd Year • 1st Semester",
      imageSrc: award21,
      imageAlt: "Dean’s Lister award (2nd year, 1st semester)",
    },
    {
      title: "Dean’s Lister",
      detail: "Holy Angel University • 2nd Year • 2nd Semester",
      imageSrc: award22,
      imageAlt: "Dean’s Lister award (2nd year, 2nd semester)",
    },
    {
      title: "Dean’s Lister",
      detail: "Holy Angel University • 3rd Year • 1st Semester",
      imageSrc: award31,
      imageAlt: "Dean’s Lister award (3rd year, 1st semester)",
    },
    {
      title: "Dean’s Lister",
      detail: "Holy Angel University • 3rd Year • 2nd Semester",
      imageSrc: award32,
      imageAlt: "Dean’s Lister award (3rd year, 2nd semester)",
    },
    {
      title: "Dean’s Lister",
      detail: "Holy Angel University • 4th Year • 1st Semester",
      imageSrc: award41,
      imageAlt: "Dean’s Lister award (4th year, 1st semester)",
    },
  ];

  return (
    <section id="awards" className="landing-section" aria-label="Awards">
      <h1 className="title">Awards</h1>
      <div className="subtitle">Dean’s Lister for 7 Consecutive Semesters</div>
      <ul className="awards-grid" aria-label="Awards list">
        {awards.map((award, index) => (
          <li
            className={`award-card${zoomedIndex === index ? " is-zoomed" : ""}`}
            key={`${award.title}-${index}`}
          >
            {award.imageSrc ? (
              <button
                className={`award-media${zoomedIndex === index ? " is-zoomed" : ""}`}
                type="button"
                data-award-index={index}
                aria-pressed={zoomedIndex === index}
                onClick={(event) => {
                  if (shouldUseInPlaceZoom()) {
                    event.preventDefault();
                    setZoomedIndex((current) => (current === index ? null : index));
                    return;
                  }

                  setLightbox({
                    src: award.imageSrc,
                    alt: award.imageAlt || "",
                    title: award.title,
                  });
                }}
                aria-label={
                  shouldUseInPlaceZoom()
                    ? `${zoomedIndex === index ? "Zoom out" : "Zoom in"} image for ${award.title}`
                    : `Open image for ${award.title}`
                }
              >
                <img
                  className="award-image"
                  src={award.imageSrc}
                  alt={award.imageAlt || ""}
                  loading="lazy"
                  decoding="async"
                />
              </button>
            ) : null}
            <div className="award-body">
              <div className="award-title">{award.title}</div>
              <div className="award-detail">{award.detail}</div>
            </div>
          </li>
        ))}
      </ul>

      {lightbox ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={() => setLightbox(null)}
        >
          <div className="lightbox-panel" onClick={(e) => e.stopPropagation()}>
            <img className="lightbox-image" src={lightbox.src} alt={lightbox.alt} />
          </div>
        </div>
      ) : null}
    </section>
  );
}
