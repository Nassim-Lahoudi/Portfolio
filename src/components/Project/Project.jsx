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

import SiteLayout from "../Layout/SiteLayout";
import { projects } from "../../data/projects";
import './Project.css';

function Project() {
    return (
        <SiteLayout>
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
                        {projects.map((project) => (
                            <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`} key={project.id}>
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
                                        {project.technologies.map((tech) => (
                                            <span className="tech-tag" key={`${project.id}-${tech}`}>{tech}</span>
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
        </SiteLayout>
    );
}

export default Project;
