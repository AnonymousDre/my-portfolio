import { useEffect, useRef, useState } from "react";

export default function Landing() {
	const email = "drequizon@gmail.com";
	const [ctaText, setCtaText] = useState("Let's Work Together");
	const resetTimerRef = useRef(null);

	useEffect(() => {
		return () => {
			if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);
		};
	}, []);

	const handleCopyEmail = async () => {
		try {
			if (navigator.clipboard?.writeText) {
				await navigator.clipboard.writeText(email);
			} else {
				const textarea = document.createElement("textarea");
				textarea.value = email;
				textarea.setAttribute("readonly", "");
				textarea.style.position = "absolute";
				textarea.style.left = "-9999px";
				document.body.appendChild(textarea);
				textarea.select();
				document.execCommand("copy");
				document.body.removeChild(textarea);
			}

			setCtaText("Email copied!");
			if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);
			resetTimerRef.current = window.setTimeout(() => {
				setCtaText("Let's Work Together");
			}, 2000);
		} catch {
			setCtaText("Copy failed");
			if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);
			resetTimerRef.current = window.setTimeout(() => {
				setCtaText("Let's Work Together");
			}, 2000);
		}
	};

	return (
		<section id="home" className="landing-section" aria-label="Home">
			<div className="home-hero">
				<p className="name">ANDRE THOMAS QUIZON</p>
				<h1 className="role">Cloud +</h1>
				<h1 className="role">Full Stack Software Developer</h1>
				<div className="home-actions">
					<button
						type="button"
						className="home-button home-button-primary"
						onClick={handleCopyEmail}
						aria-live="polite"
					>
						{ctaText}
					</button>
					<a
						className="home-button home-button-secondary"
						href="https://github.com/AnonymousDre"
						target="_blank"
						rel="noopener noreferrer"
					>
						View my Projects
					</a>
				</div>
			</div>
		</section>
	);
}
