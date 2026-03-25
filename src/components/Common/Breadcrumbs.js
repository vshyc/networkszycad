import { Link, useLocation } from 'react-router-dom';

const routeLabels = {
  '': 'Home',
  about: 'About',
  portfolio: 'Portfolio',
  contact: 'Contact',
  services: 'Services',
  login: 'Login',
  registration: 'Registration',
  running: 'Running',
  CV: 'Resume',
  TA: 'Test Automation',
  devops: 'DevOps',
  java: 'Java',
  myFamily: 'Family',
  orienteering: 'Orienteering',
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs-nav">
      <div className="container">
        <ol className="breadcrumbs">
          <li className="breadcrumb-item">
            <Link to="/">
              <i className="fas fa-home" aria-hidden="true"></i>
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const label = routeLabels[value] || value;

            return isLast ? (
              <li key={to} className="breadcrumb-item active" aria-current="page">
                {label}
              </li>
            ) : (
              <li key={to} className="breadcrumb-item">
                <Link to={to}>{label}</Link>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
