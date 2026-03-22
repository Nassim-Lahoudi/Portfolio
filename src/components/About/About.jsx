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

import profileImage from "../../assets/icons/nassim-lahoudi.png";
import SiteLayout from "../Layout/SiteLayout";
import './About.css';

function About() {
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
            description: "Currently in vocational training – Expected completion in 2026"
        },
        {
            year: "06/2024",
            title: "Secondary School Certificate",
            subtitle: "Successfully completed",
            description: "Secondary school certificate (intermediate level) with a strong general education foundation."
        },
    ];

    return (
        <SiteLayout>
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
                        {skillCategories.map((category) => (
                            <div className="skill-category" key={category.category}>
                                <h3 className="category-title">{category.category}</h3>
                                <div className="skill-tags">
                                    {category.skills.map((skill) => (
                                        <span className="skill-badge" key={skill}>
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
                        {timeline.map((item) => (
                            <div className="timeline-item" key={item.year}>
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
        </SiteLayout>
    );
}

export default About;
