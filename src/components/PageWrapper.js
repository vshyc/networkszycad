import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Common/Footer';
import ScrollToTop from './Common/ScrollToTop';
import Breadcrumbs from './Common/Breadcrumbs';

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsNavCollapsed(true);
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: '/', label: 'Home', id: 'headerHome' },
    { path: '/portfolio', label: 'Portfolio', id: 'headerPortfolio' },
    { path: '/about', label: 'About', id: 'headerAbout' },
    { path: '/contact', label: 'Contact', id: 'headerContact' },
  ];

  return (
    <div className="page-wrapper">
      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top ${isScrolled ? 'navbar-shrink' : ''}`}
        id="mainNav"
        style={{ backgroundColor: isScrolled ? '#212529' : 'transparent' }}
      >
        <div className="container">
          <Link className="navbar-brand js-scroll-trigger" to="/" onClick={handleNavClick}>
            Dariusz Szyca
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            onClick={() => setIsNavCollapsed(!isNavCollapsed)}
            aria-controls="navbarResponsive"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ml-2"></i>
          </button>
          <div
            className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav text-uppercase ml-auto">
              {navLinks.map((link) => (
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
            </ul>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <Breadcrumbs />
        {children}
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default PageWrapper;
