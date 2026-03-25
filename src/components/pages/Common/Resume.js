import PropTypes from 'prop-types';
import SEO from '../../Common/SEO';

const Resume = ({ data }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dariusz Szyca',
    jobTitle: 'Senior Test Automation Engineer',
    hasOccupation: data?.work?.map((job) => ({
      '@type': 'Occupation',
      name: job.title,
      occupationLocation: {
        '@type': 'Organization',
        name: job.company,
      },
    })),
  };

  if (!data) {
    return (
      <>
        <SEO
          title="Resume"
          description="View Dariusz Szyca's professional resume including work experience, education, and technical skills."
          url="/CV"
        />
        <section id="resume">
          <div className="container">
            <p>Loading resume data...</p>
          </div>
        </section>
      </>
    );
  }

  const { skillmessage, education, work, skills } = data;

  return (
    <>
      <SEO
        title="Resume / CV"
        description="Dariusz Szyca's professional resume. Senior Test Automation Engineer with experience at EPAM Systems and Amazon. Skills in Java, Selenium, DevOps, and CI/CD."
        url="/CV"
        keywords="Resume, CV, Dariusz Szyca, Work Experience, Education, Skills, Test Automation"
        structuredData={structuredData}
      />
      <section id="resume">
        <div className="container">
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              {work?.map((job) => (
                <div key={job.company}>
                  <h3>{job.company}</h3>
                  <p className="info">
                    {job.title}
                    <span>&bull;</span> <em className="date">{job.years}</em>
                  </p>
                  <p>{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <p>{skillmessage}</p>
              <div className="bars">
                <ul className="skills">
                  {skills?.map((skill) => (
                    <li key={skill.name}>
                      <span
                        style={{ width: skill.level }}
                        className={`bar-expand ${skill.name.toLowerCase()}`}
                      ></span>
                      <em>{skill.name}</em>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  {education?.map((edu) => (
                    <div key={edu.school}>
                      <h3>{edu.school}</h3>
                      <p className="info">
                        {edu.degree} <span>&bull;</span>
                        <em className="date">{edu.graduated}</em>
                      </p>
                      <p>{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Resume.propTypes = {
  data: PropTypes.shape({
    skillmessage: PropTypes.string,
    education: PropTypes.arrayOf(
      PropTypes.shape({
        school: PropTypes.string.isRequired,
        degree: PropTypes.string.isRequired,
        graduated: PropTypes.string.isRequired,
        description: PropTypes.string,
      })
    ),
    work: PropTypes.arrayOf(
      PropTypes.shape({
        company: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        years: PropTypes.string.isRequired,
        description: PropTypes.string,
      })
    ),
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        level: PropTypes.string.isRequired,
      })
    ),
  }),
};

export default Resume;
