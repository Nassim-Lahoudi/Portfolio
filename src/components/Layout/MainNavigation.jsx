import { Link } from "react-router-dom";
import { navigationItems } from "../../data/siteData";

function MainNavigation() {
  return (
    <header className="page-header">
      <nav className="navigation" role="navigation" aria-label="Main navigation">
        <ul className="navigation__list">
          {navigationItems.map((item) => (
            <li className="navigation__item" key={item.id}>
              <Link to={item.to} className="navigation__link" aria-label={item.label}>
                <item.Icon className="navigation__icon" aria-hidden="true" focusable="false" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;