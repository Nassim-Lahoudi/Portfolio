import { socialLinks } from "../../data/siteData";

function SocialFooter() {
  return (
    <footer className="page-footer">
      <section className="social-section">
        <ul className="social-list" role="list">
          {socialLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={item.label}
              >
                <item.Icon className="social-icon" aria-hidden="true" focusable="false" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
}

export default SocialFooter;