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
							<div className="home-hero">
								<p className="name">ANDRE THOMAS QUIZON</p>
                                <h1 className="role">Cloud +</h1>
								<h1 className="role">Full Stack Software Developer</h1>
								<div className="home-actions">
									<button type="button" className="home-button">
										Let's Work Together
									</button>
									<button type="button" className="home-button">
										View my Projects
									</button>
								</div>
							</div>
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
