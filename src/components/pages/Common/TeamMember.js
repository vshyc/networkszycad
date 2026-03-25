import PropTypes from 'prop-types';
import LazyImage from '../../Common/LazyImage';

const TeamMember = ({ memberName, memberWork, img, github, facebook, linkedIn }) => {
  return (
    <div className="col-sm-4">
      <div className="team-member">
        <LazyImage
          className="mx-auto rounded-circle"
          src={img}
          alt={`${memberName} profile`}
        />
        <h4>{memberName}</h4>
        <p className="text-muted">{memberWork}</p>
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <a
              href={github}
              aria-label={`${memberName}'s GitHub profile`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href={facebook}
              aria-label={`${memberName}'s Facebook profile`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f" aria-hidden="true"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href={linkedIn}
              aria-label={`${memberName}'s LinkedIn profile`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  memberName: PropTypes.string.isRequired,
  memberWork: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  linkedIn: PropTypes.string.isRequired,
};

export default TeamMember;
