/**
 * About Component
 *
 * Personal information page showcasing profile and bio.
 *
 * Structure:
 * - Header: Main navigation (shared across pages)
 * - Main: Profile image and description text
 * - Footer: Social media links (shared across pages)
 */

import { Link } from "react-router-dom";
import './About.css';

function About() {
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
                <section className="about-content">
                    {/* Profile image container */}
                    <div className="profile-image-wrapper">
                        <img
                            src="src/assets/nassim-lahoudi.png"
                            alt="Nassim Lahoudi"
                            className="profile-image"
                        />
                    </div>

                    {/* Profile description text */}
                    <div className="profile-description-wrapper">
                        <p className="profile-description">
                            Passionate developer focused on
                            clean code and efficient solutions. <br/>
                            Experienced in modern technologies and
                            always eager to learn new things. <br/>
                        </p>
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
