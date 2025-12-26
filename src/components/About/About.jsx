/**
 * About Component
 *
 * Personal information page showcasing profile, bio, skills, and experience.
 *
 * Structure:
 * - Header: Main navigation (shared across pages)
 * - Main: Profile section, About text, Skills grid, Experience timeline
 * - Footer: Social media links (shared across pages)
 */

import { Link } from "react-router-dom";
import './About.css';

function About() {
    // Navigation menu items configuration
    const navigationItems = [
        { to: "/", img: "/icons/home-symbol.png", alt: "Home" },
        { to: "/Project", img: "/icons/code-termial-symbol.png", alt: "Projects" },
        { to: "/About", img: "/icons/aboutme-symbol.png", alt: "About Me" },
        { to: "/Contact", img: "/icons/email-symbol.png", alt: "Contact Me" }
    ];

    // Social media links configuration
    const socialLinks = [
        { href: "https://github.com/Nassim-Lahoudi", img: "/icons/github-symbol.png", alt: "GitHub" },
        { href: "https://www.linkedin.com/in/nassim-lahoudi/", img: "/icons/linkedin-symbol.png", alt: "LinkedIn" },
        { href: "https://dev.to/nassim-lahoudi", img: "/icons/dev-symbol.png", alt: "Dev.to" }
    ];

    // Skills data
    const skillCategories = [
        {
            category: "Frontend",
            skills: ["React", "JavaScript", "HTML5", "CSS3", "Vite", "Responsive Design"]
        },
        {
            category: "Backend & Tools",
            skills: ["Python", "Git", "Database Design"]
        },
        {
            category: "UI/UX",
            skills: ["Glassmorphism", "Modern Design", "User Experience", "Accessibility"]
        }
    ];

    // Experience/Education timeline
    const timeline = [
        {
            year: "2026",
            title: "State-Certified Business IT Assistant",
            subtitle: "Information Processing & Business",
            description: "Currently in vocational training – Expected completion in 2026"
        },
        {
            year: "2024",
            title: "Secondary School Certificate",
            subtitle: "Successfully completed",
            description: "Secondary school certificate (intermediate level) with a strong general education foundation."
        },
        {
            year: "Current",
            title: "Continuous Learning",
            subtitle: "Tech Enthusiast",
            description: "Constant growth through personal projects and exploring new technologies"
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

            {/* ========== MAIN: About Content ========== */}
            <main className="page-main about-main">
                {/* Profile Hero Section */}
                <section className="about-hero">
                    <div className="profile-image-wrapper">
                        <img
                            src="/icons/nassim-lahoudi.png"
                            alt="Nassim Lahoudi"
                            className="profile-image"
                        />
                    </div>
                    <div className="profile-info">
                        <h1 className="profile-name serif-font">Nassim Lahoudi</h1>
                        <p className="profile-title">Business IT Assistant in Training</p>
                        <p className="profile-location">📍 Frankfurt, Germany</p>
                    </div>
                </section>

                {/* About Description Section */}
                <section className="about-description">
                    <h2 className="section-title serif-font">About Me</h2>
                    <p className="about-text">
                        I'm an aspiring state-certified business IT assistant with a passion for modern web technologies.
                        Currently completing my vocational training while developing practical projects to continuously expand my skills.
                    </p>
                    <p className="about-text">
                        With solid knowledge in both frontend and backend development, I bring creative ideas to life through code.
                        My approach combines technical expertise with business understanding to create innovative and user-friendly solutions.
                    </p>
                </section>

                {/* Skills Section */}
                <section className="skills-showcase">
                    <h2 className="section-title serif-font">Skills & Technologies</h2>
                    <div className="skills-grid">
                        {skillCategories.map((category, idx) => (
                            <div className="skill-category" key={idx}>
                                <h3 className="category-title">{category.category}</h3>
                                <div className="skill-tags">
                                    {category.skills.map((skill, skillIdx) => (
                                        <span className="skill-badge" key={skillIdx}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="experience-timeline">
                    <h2 className="section-title serif-font">Journey</h2>
                    <div className="timeline">
                        {timeline.map((item, idx) => (
                            <div className="timeline-item" key={idx}>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <span className="timeline-year">{item.year}</span>
                                    <h3 className="timeline-title">{item.title}</h3>
                                    <p className="timeline-subtitle">{item.subtitle}</p>
                                    <p className="timeline-description">{item.description}</p>
                                </div>
                            </div>
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

export default About;
