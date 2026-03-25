import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SingleService = ({ serviceName, serviceText, icon }) => {
  return (
    <div className="col-md-4">
      <span className="fa-stack fa-4x">
        <i className="fas fa-circle fa-stack-2x text-primary" aria-hidden="true"></i>
        <Link
          className={`fas ${icon} fa-stack-1x fa-inverse`}
          to={`/${serviceName.toLowerCase().replace(/\s+/g, '-')}`}
          aria-label={serviceName}
        ></Link>
      </span>
      <h4 className="service-heading">{serviceName}</h4>
      <p className="text-muted">{serviceText}</p>
    </div>
  );
};

SingleService.propTypes = {
  serviceName: PropTypes.string.isRequired,
  serviceText: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

SingleService.defaultProps = {
  serviceText: '',
};

export default SingleService;
