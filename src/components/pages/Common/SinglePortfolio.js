import { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SinglePortfolio = memo(({ title, subTitle, img, portfolioModal }) => {
  return (
    <div className="col-md-4 col-sm-6 portfolio-item">
      <Link className="portfolio-link" to={portfolioModal}>
        <div className="portfolio-hover">
          <div className="portfolio-hover-content">
            <i className="fas fa-plus fa-3x" aria-hidden="true"></i>
          </div>
        </div>
        <img
          className="img-fluid"
          src={img}
          alt={`${title} - ${subTitle}`}
          loading="lazy"
        />
      </Link>
      <div className="portfolio-caption">
        <h4>{title}</h4>
        <p className="text-muted">{subTitle}</p>
      </div>
    </div>
  );
});

SinglePortfolio.displayName = 'SinglePortfolio';

SinglePortfolio.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  portfolioModal: PropTypes.string.isRequired,
};

export default SinglePortfolio;
