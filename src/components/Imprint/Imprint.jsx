/**
 * Imprint Component
 *
 * Renders the legal notice (imprint) page.
 *
 * Structure:
 * - Header: Main navigation shared across all pages
 * - Main: Legal and contact information
 * - Footer: Social links and imprint shortcut
 */

import { Link } from "react-router-dom";
import homeIcon from "../../assets/icons/home-symbol.png";
import projectsIcon from "../../assets/icons/code-termial-symbol.png";
import aboutIcon from "../../assets/icons/aboutme-symbol.png";
import contactIcon from "../../assets/icons/email-symbol.png";
import githubIcon from "../../assets/icons/github-symbol.png";
import linkedinIcon from "../../assets/icons/linkedin-symbol.png";
import devIcon from "../../assets/icons/dev-symbol.png";
import './Imprint.css';

function Imprint() {
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

    // Footer link pointing to the current imprint page.
    const imprintLink = [
        { to: "/Imprint", alt: "Imprint" }
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

            {/* ========== MAIN: Hero Section ========== */}
            <main className="page-main">
                <div className="imprint-headline-container">
                    <h1 className="headline">Imprint</h1>
                    <p className="imprint-subtitle">Imprint and legal information for this personal portfolio website.</p>
                </div>
                <div className="imprint-container">
                    <div className="imprint-content">
                        <p className="title imprint-text-style">As of: 01 April 2026</p>

                        <h2 className="sec-headline imprint-headline-style">Information pursuant to § 5 TMG</h2>
                        <p className="title imprint-text-style">
                            Nassim Lahoudi <br />
                            Sierinstraße 28, <br />
                            65929 Frankfurt am Main <br />
                            Germany
                        </p>

                        <h2 className="sec-headline imprint-headline-style">Contact</h2>
                        <p className="title imprint-text-style">Email: info@nassim-lahoudi.de</p>

                        <h2 className="sec-headline imprint-headline-style">Responsible for content pursuant to § 18 Para. 2 MStV</h2>
                        <p className="title imprint-text-style">
                            Nassim Lahoudi <br />
                            Address as above
                        </p>

                        <h2 className="sec-headline imprint-headline-style">Liability for Content</h2>
                        <p className="title imprint-text-style">
                            As a service provider, I am responsible for my own content on these pages in accordance with general laws. <br />
                            However, I am not obligated under statutory provisions to monitor transmitted or stored third-party information <br />
                            or to investigate circumstances that indicate illegal activity.
                        </p>

                        <h2 className="sec-headline imprint-headline-style">Liability for Links</h2>
                        <p className="title imprint-text-style">
                            This website contains links to external third-party websites whose content I have no influence over. <br />
                            Therefore, I cannot accept any liability for such third-party content. <br />
                            The respective provider or operator of the linked pages is always responsible for their content.
                        </p>
                        <h2 className="sec-headline imprint-headline-style">Copyright</h2>
                        <p className="title imprint-text-style">
                            The content and works created by the site operator on this website are subject to German copyright law. <br />
                            Reproduction, editing, distribution, and any form of exploitation beyond the limits of copyright law <br />
                            require the written consent of the respective author or creator.
                        </p>
                    </div>
                </div>
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

                {/* ========== FOOTER: Imprint quick Link ========== */}
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

export default Imprint;
