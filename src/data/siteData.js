import { FiCode, FiHome, FiMail, FiUser } from "react-icons/fi";
import { FaDev, FaGithub, FaLinkedin } from "react-icons/fa";

export const navigationItems = [
  { id: "home", to: "/", label: "Home", Icon: FiHome },
  { id: "projects", to: "/project", label: "Projects", Icon: FiCode },
  { id: "about", to: "/about", label: "About Me", Icon: FiUser },
  { id: "contact", to: "/contact", label: "Contact Me", Icon: FiMail },
];

export const socialLinks = [
  { id: "github", href: "https://github.com/Nassim-Lahoudi", label: "GitHub", Icon: FaGithub },
  { id: "linkedin", href: "https://www.linkedin.com/in/nassim-lahoudi/", label: "LinkedIn", Icon: FaLinkedin },
  { id: "devto", href: "https://dev.to/nassim-lahoudi", label: "Dev.to", Icon: FaDev },
];