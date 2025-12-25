/**
 * Project Component
 *
 * Showcase page for portfolio projects.
 *
 * Structure:
 * - Header: Main navigation (shared across pages)
 * - Main: Project showcase area with featured projects
 * - Footer: Social media links (shared across pages)
 */

import { Link } from "react-router-dom";
import './Project.css';

function Project() {
    // Navigation menu items configuration
    const navigationItems = [
        { to: "/", img: "src/assets/home-symbol.png", alt: "Home" },
        { to: "/Project", img: "src/assets/code-termial-symbol.png", alt: "Code Terminal" },
        { to: "/About", img: "src/assets/aboutme-symbol.png", alt: "About Me" },
        { to: "/Contact", img: "src/assets/email-symbol.png", alt: "Email" }
    ];

    // Social media links configuration
    const socialLinks = [
        { href: "https://github.com/Nassim-Lahoudi", img: "src/assets/github-symbol.png", alt: "GitHub" },
        { href: "https://www.linkedin.com/in/nassim-lahoudi/", img: "src/assets/linkedin-symbol.png", alt: "LinkedIn" },
        { href: "https://dev.to/nassim-lahoudi", img: "src/assets/dev-symbol.png", alt: "Dev.to" }
    ];

    // Project portfolio data
    const projects = [
        {
            title: "Lanis Management Tool",
            description: "Desktop application for managing Schulportal Hessen data via the LanisAPI. Features secure login, task management, and substitution plans for digitally organizing school life.",
            technologies: ["Python", "LanisAPI", "Tkinter"],
            github: "https://github.com/Nassim-Lahoudi/Lanis-Management-Tool",
            live: null,
            featured: true
        },
        {
            title: "Maintenance Page",
            description: "Minimal React app built with Vite for website downtime. Lightweight and customizable placeholder ready to deploy to any static hosting provider.",
            technologies: ["React", "Vite", "JavaScript"],
            github: "https://github.com/Nassim-Lahoudi/Maintenance-Page",
            live: null,
            featured: true
        },
        {
            title: "GlassPortfolio",
            description: "Modern responsive React portfolio with blurred glassmorphism cards, modal popups, and social links. Fully adaptable template for portfolios and CVs.",
            technologies: ["React", "JavaScript", "CSS3"],
            github: "https://github.com/Nassim-Lahoudi/GlassPortfolio",
            live: null,
            featured: false
        },
        {
            title: "GlassyGate",
            description: "Modern login UI featuring glassmorphism effect, built with React and Vite. Clean and attractive interface ideal as a template for authentication pages.",
            technologies: ["React", "Vite", "CSS3"],
            github: "https://github.com/Nassim-Lahoudi/GlassyGate",
            live: null,
            featured: false
        },
        {
            title: "Gehaltsrechner",
            description: "Modern salary calculator with Python and Tkinter. Effortlessly calculate daily, weekly, monthly, and annual earnings. Perfect for freelancers and employees.",
            technologies: ["Python", "Tkinter"],
            github: "https://github.com/Nassim-Lahoudi/Gehaltsrechner",
            live: null,
            featured: false
        },
        {
            title: "Bestellungsaufnahme-Programm",
            description: "Smart Tkinter application for easy order recording. Automatically logs orders to Excel with professional formatting and cost calculation.",
            technologies: ["Python", "Tkinter", "Excel"],
            github: "https://github.com/Nassim-Lahoudi/Bestellungsaufnahme-Programm",
            live: null,
            featured: false
        }
    ];

    return (
        <div className="page-container">
            {/* ========== HEADER: Navigation Bar ========== */}
            <header className="page-header">
                <nav className="navigation" role="navigation" aria-label="Main navigation">
                    <ul className="navigation__list">
                        {navigationItems.map((item, idx) => (
                            <li className="navigation__item" key={idx}>
                                <Link to={item.to} className="navigation__link" aria-label={item.alt}>
                                    <img
                                        src={item.img}
                                        alt={item.alt}
                                        className="navigation__icon"
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            {/* ========== MAIN: Projects Showcase ========== */}
            <main className="page-main projects-main">
                {/* Page title section */}
                <section className="projects-header">
                    <h1 className="projects-title serif-font">
                        Featured <span className="projects-title--highlight">Projects</span>
                    </h1>
                    <p className="projects-subtitle">
                        A selection of my recent work and personal projects
                    </p>
                </section>

                {/* Projects grid section */}
                <section className="projects-section">
                    <div className="projects-grid">
                        {projects.map((project, idx) => (
                            <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`} key={idx}>
                                {/* Featured badge */}
                                {project.featured && (
                                    <div className="project-badge">Featured</div>
                                )}

                                {/* Project content */}
                                <div className="project-content">
                                    <h2 className="project-title">{project.title}</h2>
                                    <p className="project-description">{project.description}</p>

                                    {/* Technologies used */}
                                    <div className="project-tech">
                                        {project.technologies.map((tech, techIdx) => (
                                            <span className="tech-tag" key={techIdx}>{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Project links */}
                                <div className="project-links">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link project-link--github"
                                            aria-label="View on GitHub"
                                        >
                                            <span>GitHub</span>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M3 3L13 13M13 13V5M13 13H5" stroke="currentColor" strokeWidth="2"/>
                                            </svg>
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link project-link--live"
                                            aria-label="View live demo"
                                        >
                                            <span>Live Demo</span>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M3 3L13 13M13 13V5M13 13H5" stroke="currentColor" strokeWidth="2"/>
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            {/* ========== FOOTER: Social Media Links ========== */}
            <footer className="page-footer">
                <section className="social-section">
                    <ul className="social-list" role="list">
                        {socialLinks.map((item, idx) => (
                            <li key={idx}>
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label={item.alt}
                                >
                                    <img
                                        src={item.img}
                                        alt={item.alt}
                                        className="social-icon"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            </footer>
        </div>
    );
}

export default Project;
