import MainNavigation from "./MainNavigation";
import SocialFooter from "./SocialFooter";
import "./SiteLayout.css";

function SiteLayout({ children }) {
  return (
    <div className="page-container">
      <MainNavigation />
      {children}
      <SocialFooter />
    </div>
  );
}

export default SiteLayout;