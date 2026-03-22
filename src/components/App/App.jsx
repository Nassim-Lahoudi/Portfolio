/**
 * App Component
 *
 * This is the main application component that handles routing.
 * It defines all available routes and their corresponding page components.
 *
 * Routes:
 * - / : Home page (landing page)
 * - /project : Projects showcase page
 * - /about : About me page
 * - /contact : Contact form page
 */

import { Navigate, Routes, Route } from "react-router-dom";
import Home from '../Home/Home';
import Project from '../Project/Project';
import About from '../About/About';
import Contact from '../Contact/Contact';
import BackgroundParticles from "../Particles/Particles";
import './App.css';

function App() {
    return (
        <div className="app-shell">
            <BackgroundParticles />

            <div className="app-content">
                <Routes>
                    {/* Home page - landing page with introduction */}
                    <Route path="/" element={<Home />} />

                    {/* Projects page - showcase of work */}
                    <Route path="/project" element={<Project />} />

                    {/* About page - personal information */}
                    <Route path="/about" element={<About />} />

                    {/* Contact page - contact form */}
                    <Route path="/contact" element={<Contact />} />

                    {/* Fallback - unknown routes redirect to home */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
