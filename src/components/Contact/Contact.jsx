/**
 * Contact Component
 * 
 * Contact form page with email integration.
 * 
 * Structure:
 * - Header: Main navigation (shared across pages)
 * - Main: Contact form with EmailJS integration
 * - Footer: Social media links (shared across pages)
 * 
 * Features:
 * - Contact form with validation
 * - EmailJS integration for sending messages
 * - Alternative mailto link for direct email
 * - Form submission status feedback
 */

import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
    // Form submission status: '', 'sending', 'success', 'error'
    const [status, setStatus] = useState('');

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

    /**
     * Handle form submission via EmailJS
     * @param {Event} e - Form submit event
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // EmailJS configuration - Replace with your own values from EmailJS dashboard
        const serviceID = 'SMTP_Service_ID';        // Your service ID
        const templateID = 'Email_Template_ID';      // Your template ID
        const publicKey = 'XhyzJ5vx7FMCvOLWs';       // Your public key

        emailjs.sendForm(serviceID, templateID, e.target, publicKey)
            .then(() => {
                setStatus('success');
                e.target.reset();                     // Clear form after successful send
                setTimeout(() => setStatus(''), 5000); // Reset status after 5 seconds
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            });
    };

    /**
     * Open default email client with pre-filled subject and body
     */
    const openEmailClient = () => {
        const email = "info@nassim-lahoudi.de";
        const subject = "Hello from my portfolio";
        const body = "Hi, I would like to get in touch.";

        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

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

            {/* ========== MAIN: Contact Form ========== */}
            <main className="page-main contact-main">
                <section className="contact-content">
                    {/* Form header with title and subtitle */}
                    <div className="contact-header">
                        <h1 className="contact-title serif-font">Contact me</h1>
                        <p className="contact-subtitle">Want to work together? Let's connect.</p>
                    </div>

                    {/* Contact form */}
                    <form onSubmit={handleSubmit} className="contact-form">
                        {/* Name fields row */}
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstname" className="form-label">First name</label>
                                <input 
                                    type="text" 
                                    name="firstname" 
                                    id="firstname" 
                                    className="form-input" 
                                    placeholder="First name" 
                                    required 
                                    onInvalid={(e) => e.target.setCustomValidity("Please fill out this field.")} 
                                    onInput={(e) => e.target.setCustomValidity("")}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastname" className="form-label">Last name</label>
                                <input 
                                    type="text" 
                                    name="lastname" 
                                    id="lastname" 
                                    className="form-input" 
                                    placeholder="Last name" 
                                    required 
                                    onInvalid={(e) => e.target.setCustomValidity("Please fill out this field.")} 
                                    onInput={(e) => e.target.setCustomValidity("")}
                                />
                            </div>
                        </div>

                        {/* Email field row */}
                        <div className="form-row">
                            <div className="form-group form-group--full">
                                <label htmlFor="email" className="form-label">E-Mail</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    className="form-input" 
                                    placeholder="you@company.com" 
                                    required 
                                    onInvalid={(e) => e.target.setCustomValidity("Please fill out this field.")} 
                                    onInput={(e) => e.target.setCustomValidity("")}
                                />
                            </div>
                        </div>

                        {/* Message field row */}
                        <div className="form-row">
                            <div className="form-group form-group--full">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    className="form-textarea" 
                                    placeholder="Leave me a message..." 
                                    required 
                                    onInvalid={(e) => e.target.setCustomValidity("Please fill out this field.")} 
                                    onInput={(e) => e.target.setCustomValidity("")}
                                />
                            </div>
                        </div>

                        {/* Submit buttons */}
                        <div className="form-buttons">
                            <button 
                                type="submit" 
                                className="form-button form-button--submit" 
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending...' : 'Send message'}
                            </button>
                            <button 
                                type="button" 
                                onClick={openEmailClient} 
                                className="form-button form-button--mailto"
                            >
                                Send via mail program
                            </button>
                        </div>

                        {/* Status messages */}
                        {status === 'success' && (
                            <p className="status-message status-message--success">
                                ✓ Message sent successfully!
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="status-message status-message--error">
                                ✗ Failed to send. Please try again.
                            </p>
                        )}
                    </form>
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

export default Contact;
