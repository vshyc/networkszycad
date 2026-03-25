import { memo } from 'react';
import PropTypes from 'prop-types';
import { TIMELINE_ITEMS } from '../../../config/timeline';

const TimelineItem = memo(({ year, title, description, image, inverted }) => (
  <li className={inverted ? 'timeline-inverted' : ''}>
    <div className="timeline-image">
      <img
        className="rounded-circle img-fluid"
        src={image}
        alt={`${title} - ${year}`}
        loading="lazy"
      />
    </div>
    <div className="timeline-panel">
      <div className="timeline-heading">
        <h4>{year}</h4>
        <h4 className="subheading">{title}</h4>
      </div>
      <div className="timeline-body">
        <p className="text-muted">{description}</p>
      </div>
    </div>
  </li>
));

TimelineItem.displayName = 'TimelineItem';

TimelineItem.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
};

const Timeline = memo(() => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <ul className="timeline">
          {TIMELINE_ITEMS.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>
                Be Part
                <br />
                Of My
                <br />
                Story!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
});

Timeline.displayName = 'Timeline';

export default Timeline;
