// Home.jsx
// Dieses React-Komponenten-File stellt die Startseite des Portfolios dar.
// Es enthält die Navigation, eine Auswahl-Sektion, eine Intro-Sektion und eine Aktions-Sektion.

import { Link } from "react-router-dom"; // Ermöglicht das Navigieren zwischen Seiten
import './Home.css'; // Importiert die zugehörigen CSS-Styles

function Home() {
    return (
        // Hauptcontainer der Seite
        <div className="home-page">
            {/* Header mit Navigation */}
            <header className="home-header">
                <nav className="navbar">
                    <ul className="navbar-list">
                        {/* Einzelne Navigationspunkte mit Symbolen */}
                        <li className="navbar-item">
                            <Link to="/">
                                {/* Home-Symbol */}
                                <img src="src/assets/home-symbol.png" alt="Home" className="navbar-icon" />
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/Project">
                                {/* Code-Terminal-Symbol */}
                                <img src="src/assets/code-termial-symbol.png" alt="Code Terminal" className="navbar-icon" />
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/About">
                                {/* About-Me-Symbol */}
                                <img src="src/assets/aboutme-symbol.png" alt="About Me" className="navbar-icon" />
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/Contact">
                                {/* Email-Symbol */}
                                <img src="src/assets/email-symbol.png" alt="Email" className="navbar-icon" />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            {/* Hauptinhalt der Seite */}
            <main className="home-main">
                {/* Auswahl-Sektion mit Buttons */}
                <section className="selection-section">
                    <ul className="selection-list">
                        <li>
                            <button className="selection-btn">Web Design</button>
                        </li>
                        <li>
                            <button className="selection-btn">UX & UI Design</button>
                        </li>
                        <li>
                            <button className="selection-btn">Branding</button>
                        </li>
                    </ul>
                </section>
                {/* Intro-Sektion mit Titel und Untertitel */}
                <section className="intro-section">
                    <h1 className="intro-title serif-font">
                        I'm Nassim,<br />
                        {/* Hervorgehobener Text für Berufsbezeichnung */}
                        <span style={{ color: 'white' }} className="serif-font">Software Developer.</span>
                    </h1>
                    <p className="intro-subtitle">
                        Frankfurt-based aspiring software developer building tomorrow’s tech.
                    </p>
                </section>
                {/* Aktions-Sektion mit zwei Buttons */}
                <section className="action-section">
                    <button className="primary-btn btn-style">See work</button>
                    <button className="secondary-btn btn-style">See work</button>
                </section>
            </main>
        </div>
    );
}

export default Home; // Exportiert die Komponente für die Verwendung in anderen Dateien
