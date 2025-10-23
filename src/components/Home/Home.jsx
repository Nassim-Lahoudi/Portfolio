// Home.jsx
// Diese Komponente bildet die Startseite des Portfolios ab.
// Sie enthält Navigation, Auswahlmöglichkeiten, ein Intro und einen Footer mit Social Links.

import { Link } from "react-router-dom"; // Ermöglicht das Routing zwischen Seiten
import './Home.css'; // Bindet die zugehörigen CSS-Styles ein
import ParticlesBackground from '../Particles/Particles';

function Home() {
    return (
        <div className="home-page">
            {/* Particles-Hintergrund */}
            <ParticlesBackground />
            {/* ---------- Header mit Navigation ---------- */}
            <header className="home-header">
                <nav className="navbar">
                    <ul className="navbar-list">
                        {/* Navigation: Jede Seite als Icon-Link */}
                        {[
                            { to: "/", img: "src/assets/home-symbol.png", alt: "Home" },
                            { to: "/Project", img: "src/assets/code-termial-symbol.png", alt: "Code Terminal" },
                            { to: "/About", img: "src/assets/aboutme-symbol.png", alt: "About Me" },
                            { to: "/Contact", img: "src/assets/email-symbol.png", alt: "Email" }
                        ].map((item, idx) => (
                            <li className="navbar-item" key={idx}>
                                {/* Link zu jeweiliger Route mit Icon */}
                                <Link to={item.to}>
                                    <img src={item.img} alt={item.alt} className="navbar-icon" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            {/* ---------- Hauptinhalt ---------- */}
            <main className="home-main">
                {/* Auswahl-Sektion: Zeigt verschiedene Schwerpunkte als Buttons */}
                <section className="selection-section">
                    <ul className="selection-list">
                        {["Web Design", "UX & UI Design", "Branding"].map((text, idx) => (
                            <li key={idx}>
                                <button className="selection-btn">{text}</button>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Intro-Sektion: Name und Berufung */}
                <section className="intro-section">
                    <h1 className="intro-title serif-font">
                        I'm Nassim,<br />
                        {/* Hervorgehobener Beruf mit weißer Schrift */}
                        <span style={{ color: 'white' }} className="serif-font">Software Developer.</span>
                    </h1>
                    <p className="intro-subtitle">
                        Frankfurt-based aspiring software developer building tomorrow’s tech.
                    </p>
                </section>
                {/* Aktions-Sektion: Buttons für weitere Aktionen */}
                <section className="action-section">
                    {/* Primärer Button als Link zur Project-Seite */}
                    <Link to="/Project" className="primary-btn btn-style">
                        See Projects
                    </Link>
                    {/* Sekundärer Button für alternative Aktion */}
                    <Link to="/Project" className="secondary-btn btn-style">
                        Contact me
                    </Link>
                </section>
            </main>

            {/* ---------- Footer mit Social Media Links ---------- */}
            <footer className="home-footer">
                <section className="footer-selection-section">
                    <ul className="footer-selection-list">
                        {/* Social Media Links als Icons */}
                        {[
                            { href: "https://github.com/Nassim-Lahoudi", img: "src/assets/github-symbol.png", alt: "GitHub" },
                            { href: "https://www.linkedin.com/in/nassim-lahoudi/", img: "src/assets/linkedin-symbol.png", alt: "LinkedIn" },
                            { href: "https://dev.to/nassim-lahoudi", img: "src/assets/dev-symbol.png", alt: "Dev.to" }
                        ].map((item, idx) => (
                            <li key={idx}>
                                {/* Externer Link mit Sicherheitsattributen */}
                                <a href={item.href} target="_blank" rel="noopener noreferrer">
                                    {/* Icon mit Hover-Effekt (siehe CSS) */}
                                    <img src={item.img} alt={item.alt} className="footer-navbar-icon"/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            </footer>
        </div>
    );
}

export default Home; // Exportiert die Komponente für die Verwendung in anderen Komponenten
