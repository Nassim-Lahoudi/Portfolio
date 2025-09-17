<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
</head>
<body>
  <h1>Portfolio – README</h1>

  <div class="section">
    <h2>Overview</h2>
    <p>
      This repository contains the source code for a modern, modular portfolio website built with <strong>React</strong> and <strong>CSS</strong>.
      The project is structured so that you can easily add, edit, or remove pages and components for your portfolio.
    </p>
  </div>

  <div class="section">
    <h2>Features</h2>
    <ul>
      <li>Responsive navigation bar with icon-based links</li>
      <li>Modern button design with gradients and hover effects</li>
      <li>Service selection area (Web Design, UX &amp; UI Design, Branding)</li>
      <li>Intro section with name and subtitle</li>
      <li>Action buttons for further navigation</li>
      <li>Modular structure: Easily add or edit pages and components</li>
      <li>Clean, commented code for easy maintenance</li>
    </ul>
  </div>

  <div class="section">
    <h2>Project Structure</h2>
    <ul>
      <li><code>src/components/Home/Home.jsx</code> – Main React component for the homepage</li>
      <li><code>src/components/Home/Home.css</code> – CSS styles for the homepage</li>
      <li><code>src/components/&lt;Page&gt;/&lt;Page&gt;.jsx</code> – Add new pages here (e.g. About, Projects, Contact)</li>
      <li><code>src/components/&lt;Page&gt;/&lt;Page&gt;.css</code> – Add styles for new pages</li>
      <li><code>src/assets/</code> – Folder for icon images used in the navbar</li>
      <li><code>src/App.jsx</code> – Main app file, handles routing between pages</li>
    </ul>
  </div>

  <div class="section">
    <h2>Getting Started</h2>
    <ol>
      <li>Clone the repository:<br>
        <pre><code>git clone &lt;repo-url&gt;</code></pre>
      </li>
      <li>Install dependencies:<br>
        <pre><code>npm install</code></pre>
      </li>
      <li>Start the development server:<br>
        <pre><code>npm start</code></pre>
      </li>
      <li>Open the app in your browser:<br>
        <pre><code>http://localhost:3000</code></pre>
      </li>
    </ol>
  </div>

  <div class="section">
    <h2>How to Add or Edit Pages</h2>
    <ul>
      <li>Create a new folder in <code>src/components/</code> for your page (e.g. <code>About</code>).</li>
      <li>Add a <code>About.jsx</code> and <code>About.css</code> file for your page's logic and styles.</li>
      <li>Import and add your new page to the router in <code>src/App.jsx</code> so it is accessible via the navigation.</li>
      <li>Edit existing pages by modifying their respective <code>.jsx</code> and <code>.css</code> files.</li>
      <li>Update the navigation bar icons and links in <code>Home.jsx</code> or a shared navbar component.</li>
    </ul>
  </div>

  <div class="section">
    <h2>Customization</h2>
    <ul>
      <li>Edit <code>Home.jsx</code> and other page components to change content, navigation, or sections</li>
      <li>Modify <code>Home.css</code> and other CSS files for custom styles and effects</li>
      <li>Replace icons in <code>src/assets/</code> as needed</li>
    </ul>
  </div>

  <div class="section">
    <h2>License</h2>
    <p>
      This project is for personal and educational use. Please check with the repository owner for licensing details.
    </p>
  </div>

  <div class="section">
    <h2>Contact</h2>
    <p>
      For questions or feedback, please contact <strong>info@nassim-lahoudi.de</strong> via the email link in the navbar.
    </p>
  </div>
</body>
</html>
