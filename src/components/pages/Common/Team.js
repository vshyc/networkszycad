import TeamMember from './TeamMember';
import { TEAM_MEMBERS } from '../../../config/team';

const Team = () => {
  return (
    <section className="bg-light page-section" id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">My Amazing Team</h2>
            <h3 className="section-subheading text-muted">
              The people thanks to whom I'm in this place.
            </h3>
          </div>
        </div>
        <div className="row">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMember {...member} key={index} />
          ))}
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">
              Application created for personal use and skill development by Dariusz Szyca.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
