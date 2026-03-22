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
import SiteLayout from "../Layout/SiteLayout";
import './Home.css';

function Home() {
    return (
        <SiteLayout>
            {/* ========== MAIN: Hero Section ========== */}
            <main className="page-main">
                {/* Skills showcase section */}
                <section className="skills-section">
                    <ul className="skills-list">
                        {["Web Design", "UX & UI Design", "Branding"].map((text) => (
                            <li key={text}>
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
                        Frankfurt-based aspiring state-certified business IT assistant building tomorrow's tech.
                    </p>
                </section>

                {/* Call-to-action section */}
                <section className="cta-section">
                    {/* Primary button linking to Projects page */}
                    <Link to="/project" className="button button--primary">
                        See Projects
                    </Link>
                    {/* Secondary button linking to Contact page */}
                    <Link to="/contact" className="button button--secondary">
                        Contact me
                    </Link>
                </section>
            </main>
        </SiteLayout>
    );
}

export default Home;
