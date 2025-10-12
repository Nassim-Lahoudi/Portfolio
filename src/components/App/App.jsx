import { Routes, Route } from "react-router-dom";
import Home from '../Home/Home';
import Project from '../Project/Project'
import About from '../About/About';
import Contact from '../Contact/Contact';
import './App.css'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default App;
