# 💼 Portfolio Website

> A modern, responsive portfolio website built with React, Vite, and tsparticles

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## ✨ Features

- 🎨 **Modern UI Design** - Clean, minimalist design with glassmorphism effects
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎯 **Semantic Class Names** - BEM-inspired naming convention for maintainability
- ♿ **Accessible** - ARIA labels and semantic HTML for better accessibility
- 📧 **Contact Form** - Integrated with EmailJS for message handling
- 🚀 **Fast Performance** - Built with Vite for lightning-fast development and builds
- 📝 **Well-Documented** - Comprehensive English comments throughout codebase

## 🎯 Pages

- **Home** - Landing page with hero section and skills showcase
- **Projects** - Portfolio projects showcase (ready for content)
- **About** - Personal information and bio
- **Contact** - Contact form with EmailJS integration

## 🛠️ Tech Stack

- **Frontend:** React 18.3, React Router 7.1
- **Build Tool:** Vite 6.0
- **Styling:** Pure CSS with modern features
- **Forms:** EmailJS for contact form
- **Dev Tools:** ESLint for code quality

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── main.jsx                    # Application entry point
│   ├── index.css                   # Global styles
│   ├── assets/                     # Images and icons
│   └── components/
│       ├── App/
│       │   ├── App.jsx             # Main app component with routing
│       │   └── App.css             # App-level styles
│       ├── Home/
│       │   ├── Home.jsx            # Landing page component
│       │   └── Home.css            # Home page styles
│       ├── About/
│       │   ├── About.jsx           # About page component
│       │   └── About.css           # About page styles
│       ├── Project/
│       │   ├── Project.jsx         # Projects page component
│       │   └── Project.css         # Projects page styles
│       ├── Contact/
│       │   ├── Contact.jsx         # Contact form component
│       │   └── Contact.css         # Contact form styles
├── public/                         # Static assets
├── index.html                      # HTML entry point
├── vite.config.js                  # Vite configuration
├── eslint.config.js                # ESLint configuration
├── package.json                    # Dependencies and scripts
└── README.md                       # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nassim-Lahoudi/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🎨 Class Naming Convention

This project uses BEM-inspired semantic class names for better maintainability:

### Global Classes
- `page-container` - Main page wrapper
- `page-header` - Header section
- `page-main` - Main content area
- `page-footer` - Footer section

### Navigation
- `navigation` - Navigation component
- `navigation__list` - Navigation list
- `navigation__item` - Individual navigation item
- `navigation__icon` - Navigation icon

### Buttons
- `button` - Base button class
- `button--primary` - Primary action button
- `button--secondary` - Secondary action button

### Social Media
- `social-section` - Social media section
- `social-list` - Social media list
- `social-icon` - Social media icon

See [IMPROVEMENTS_SUMMARY.md](IMPROVEMENTS_SUMMARY.md) for complete class name mapping.

## 📧 EmailJS Setup

To enable the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service and template
3. Update credentials in `Contact.jsx`:
   ```javascript
   const serviceID = 'YOUR_SERVICE_ID';
   const templateID = 'YOUR_TEMPLATE_ID';
   const publicKey = 'YOUR_PUBLIC_KEY';
   ```

Detailed setup instructions: [EMAILJS_SETUP.md](EMAILJS_SETUP.md)

## 🎯 Adding New Pages

1. **Create component folder**
   ```bash
   mkdir src/components/NewPage
   ```

2. **Create component files**
   ```jsx
   // src/components/NewPage/NewPage.jsx
   import { Link } from "react-router-dom";
   import './NewPage.css';

   function NewPage() {
     // Component logic
     return (
       <div className="page-container">
         {/* Page content */}
       </div>
     );
   }

   export default NewPage;
   ```

3. **Add route in App.jsx**
   ```jsx
   import NewPage from '../NewPage/NewPage';

   <Route path="/newpage" element={<NewPage />} />
   ```

4. **Update navigation** in configuration objects across pages

## 🎨 Customization

### Changing Colors

Main color scheme is defined in CSS:
- Primary green: `#b6e3a8` / `#cde8bf`
- Dark background: `#0d0d0d` / `#151515`
- Text colors: `#ffffff` / `#8b8b8b` / `#525252`

### Responsive Breakpoints

- Mobile: `max-width: 600px`
- Tablet: `max-width: 900px`
- Desktop: `> 900px`

## 📝 Code Quality

- ✅ ESLint configured for React best practices
- ✅ Comprehensive English comments throughout
- ✅ Semantic HTML and ARIA attributes
- ✅ Consistent naming conventions
- ✅ Modular component structure

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Contact

**Nassim Lahoudi**

- Website: [nassim-lahoudi.de](https://nassim-lahoudi.de)
- Email: info@nassim-lahoudi.de
- GitHub: [@Nassim-Lahoudi](https://github.com/Nassim-Lahoudi)
- LinkedIn: [nassim-lahoudi](https://www.linkedin.com/in/nassim-lahoudi/)
- Dev.to: [@nassim-lahoudi](https://dev.to/nassim-lahoudi)

## 🙏 Acknowledgments

- [EmailJS](https://www.emailjs.com/) - Email service integration
- [React Router](https://reactrouter.com/) - Client-side routing
- [Vite](https://vitejs.dev/) - Build tool and dev server

---

**Made with ❤️ by Nassim Lahoudi**
