import { useState, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from './Common/Footer';
import ScrollToTop from './Common/ScrollToTop';
import Breadcrumbs from './Common/Breadcrumbs';
import ThemeToggle from './Common/ThemeToggle';
import { useScrollPosition } from '../hooks';
import { NAV_LINKS } from '../config/constants';

const PageWrapper = memo(({ children, isDark, onThemeToggle }) => {
  const location = useLocation();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const { isScrolled } = useScrollPosition(100);

  const handleNavClick = useCallback(() => {
    setIsNavCollapsed(true);
  }, []);

  const toggleNav = useCallback(() => {
    setIsNavCollapsed((prev) => !prev);
  }, []);

  const isActive = useCallback((path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  }, [location.pathname]);

  return (
    <div className="page-wrapper">
      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top ${isScrolled ? 'navbar-shrink' : ''}`}
        id="mainNav"
      >
        <div className="container">
          <Link className="navbar-brand js-scroll-trigger" to="/" onClick={handleNavClick}>
            Dariusz Szyca
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            onClick={toggleNav}
            aria-controls="navbarResponsive"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ml-2" aria-hidden="true"></i>
          </button>
          <div
            className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav text-uppercase ml-auto">
              {NAV_LINKS.map((link) => (
                <li className="nav-item" key={link.id}>
                  <Link
                    id={link.id}
                    className={`nav-link js-scroll-trigger ${isActive(link.path) ? 'active' : ''}`}
                    to={link.path}
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="nav-item">
                <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="main-content">
        <Breadcrumbs />
        {children}
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
});

PageWrapper.displayName = 'PageWrapper';

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isDark: PropTypes.bool,
  onThemeToggle: PropTypes.func,
};

PageWrapper.defaultProps = {
  isDark: false,
  onThemeToggle: () => {},
};

export default PageWrapper;
