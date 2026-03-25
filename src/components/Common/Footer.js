import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-left text-center mb-3 mb-lg-0">
            <span className="copyright">
              © {currentYear} Dariusz Szyca. All Rights Reserved.
            </span>
          </div>
          <div className="col-lg-4 text-center mb-3 mb-lg-0">
            <ul className="list-inline social-buttons mb-0">
              <li className="list-inline-item">
                <a
                  href="https://github.com/vshyc"
                  aria-label="GitHub Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/darek-szyca-903b21138/"
                  aria-label="LinkedIn Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.facebook.com/darek.szyca/"
                  aria-label="Facebook Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 text-lg-right text-center">
            <ul className="list-inline quicklinks mb-0">
              <li className="list-inline-item">
                <Link to="/about">About</Link>
              </li>
              <li className="list-inline-item mx-2">|</li>
              <li className="list-inline-item">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="list-inline-item mx-2">|</li>
              <li className="list-inline-item">
                <Link to="/portfolio">Portfolio</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
