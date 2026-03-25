import { Link } from 'react-router-dom';
import SEO from '../Common/SEO';

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has been moved."
        noIndex={true}
      />
      <section className="page-section not-found-page">
        <div className="container text-center">
          <div className="not-found-content">
            <h1 className="not-found-code">404</h1>
            <h2 className="not-found-title">Page Not Found</h2>
            <p className="not-found-message">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="not-found-actions">
              <Link to="/" className="btn btn-primary btn-xl text-uppercase">
                <i className="fas fa-home" aria-hidden="true"></i> Go Home
              </Link>
              <Link to="/contact" className="btn btn-outline-light btn-xl text-uppercase ml-3">
                <i className="fas fa-envelope" aria-hidden="true"></i> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
