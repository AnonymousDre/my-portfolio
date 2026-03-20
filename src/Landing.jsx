export default function Landing() {
	const sections = [
		{ id: "home", title: "Home" },
		{ id: "about", title: "About" },
		{ id: "services", title: "Services" },
		{ id: "projects", title: "Projects" },
		{ id: "awards", title: "Awards" },
		{ id: "certificates", title: "Certificates" },
		{ id: "faqs", title: "FAQs" },
	];

	return (
		<div className="landing">
			{sections.map((section) => (
				<section
					key={section.id}
					id={section.id}
					className="landing-section"
					aria-label={section.title}
				>
					{section.id === "home" ? (
						<>
							<h1 className="landing-title">Your Name</h1>
							<div className="landing-placeholder">Job Role / Short tagline</div>
						</>
					) : (
						<>
							<h1 className="landing-title">{section.title}</h1>
							<div className="landing-placeholder">Placeholder content</div>
						</>
					)}
				</section>
			))}
		</div>
	);
}
