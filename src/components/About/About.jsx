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
import homeIcon from "../../assets/icons/home-symbol.png";
import projectsIcon from "../../assets/icons/code-termial-symbol.png";
import aboutIcon from "../../assets/icons/aboutme-symbol.png";
import contactIcon from "../../assets/icons/email-symbol.png";
import githubIcon from "../../assets/icons/github-symbol.png";
import linkedinIcon from "../../assets/icons/linkedin-symbol.png";
import devIcon from "../../assets/icons/dev-symbol.png";
import profileImage from "../../assets/icons/nassim-lahoudi.png";
import './About.css';

function About() {
    // Navigation menu items configuration
    const navigationItems = [
        { to: "/", img: homeIcon, alt: "Home" },
        { to: "/Project", img: projectsIcon, alt: "Projects" },
        { to: "/About", img: aboutIcon, alt: "About Me" },
        { to: "/Contact", img: contactIcon, alt: "Contact Me" }
    ];

    // Social media links configuration
    const socialLinks = [
        { href: "https://github.com/Nassim-Lahoudi", img: githubIcon, alt: "GitHub" },
        { href: "https://www.linkedin.com/in/nassim-lahoudi/", img: linkedinIcon, alt: "LinkedIn" },
        { href: "https://dev.to/nassim-lahoudi", img: devIcon, alt: "Dev.to" }
    ];

    const imprintLink = [
        { to: "/Imprint", alt: "Imprint" }
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
            year: "08/2024 - 06/2026",
            title: "State-Certified Business IT Assistant",
            subtitle: "Information Processing & Business",
            description: "Successfully completed vocational training in 2026"
        },
        {
            year: "06/2024",
            title: "Secondary School Certificate",
            subtitle: "Successfully completed",
            description: "Secondary school certificate (intermediate level) with a strong general education foundation."
        },
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
                            src={profileImage}
                            alt="Nassim Lahoudi"
                            className="profile-image"
                        />
                    </div>
                    <div className="profile-info">
                        <h1 className="profile-name serif-font">Nassim Lahoudi</h1>
                        <p className="profile-title">State‑Certified Business IT Assistant</p>
                        <p className="profile-location">📍 Frankfurt, Germany</p>
                    </div>
                </section>

                {/* About Description Section */}
                <section className="about-description">
                    <h2 className="section-title serif-font">About Me</h2>
                    <p className="about-text">
                        I'm a state-certified business IT assistant with a passion for modern web technologies.
                        I build practical digital projects to continuously expand my technical and creative skill set.
                    </p>
                    <p className="about-text">
                        With knowledge in both frontend and backend development, I bring ideas to life through clean and structured code.
                        My work combines technical understanding with business-oriented thinking to create user-friendly and effective solutions.
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

                {/* ========== FOOTER: Imprint Links ========== */}
                <section className="imprint-section">
                    {imprintLink.map((item, idx) => (
                        <li key={idx}>
                            <Link to={item.to} className="hyperlink-style" aria-label={item.alt} >Imprint</Link>
                        </li>
                        ))}
                </section>
            </footer>
        </div>
    );
}

export default About;
