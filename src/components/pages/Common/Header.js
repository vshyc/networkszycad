import { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = memo(({ title, subtitle, buttonText, link, showButton, img }) => {
  return (
    <header className="masthead" style={{ backgroundImage: `url("${img}")` }}>
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">{title}</div>
          <div className="intro-heading text-uppercase">{subtitle}</div>
          {showButton && (
            <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to={link}>
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  link: PropTypes.string,
  showButton: PropTypes.bool,
  img: PropTypes.string.isRequired,
};

Header.defaultProps = {
  showButton: false,
  buttonText: '',
  link: '/',
};

export default Header;
