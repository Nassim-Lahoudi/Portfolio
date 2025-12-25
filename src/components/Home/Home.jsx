/**
 * Home Component
 *
 * The landing page of the portfolio website.
 *
 * Structure:
 * - Header: Main navigation with icon links
 * - Main: Hero section with introduction and CTAs
 * - Footer: Social media links
 */

import { Link } from "react-router-dom";
import './Home.css';
import ParticlesBackground from '../Particles/Particles';

function Home() {
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

    return (
        <div className="page-container">
            {/* Animated particle background */}
            <ParticlesBackground />

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

            {/* ========== MAIN: Hero Section ========== */}
            <main className="page-main">
                {/* Skills showcase section */}
                <section className="skills-section">
                    <ul className="skills-list">
                        {["Web Design", "UX & UI Design", "Branding"].map((text, idx) => (
                            <li key={idx}>
                                <button className="skill-tag">{text}</button>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Hero introduction section */}
                <section className="hero-section">
                    <h1 className="hero-title serif-font">
                        I'm Nassim,<br />
                        {/* Highlighted role with white text */}
                        <span className="hero-title--highlight serif-font">Software Developer.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Frankfurt-based aspiring software developer building tomorrow's tech.
                    </p>
                </section>

                {/* Call-to-action section */}
                <section className="cta-section">
                    {/* Primary button linking to Projects page */}
                    <Link to="/Project" className="button button--primary">
                        See Projects
                    </Link>
                    {/* Secondary button linking to Contact page */}
                    <Link to="/Contact" className="button button--secondary">
                        Contact me
                    </Link>
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

export default Home;
