const timelineItems = [
  {
    year: '2018',
    title: 'First Step',
    description:
      "Make a decision to become a Software Tester. Starting to make use of my programming skills and started a Tester with ISTQB course.",
    image: 'img/about/6.jpeg',
    inverted: false,
  },
  {
    year: 'March 2019',
    title: 'First Job',
    description:
      'Few months after getting ISTQB I spend learning Java and Testing tools. I had a few Job interviews and on one of them I got positive feedback and get my first job in Epam Systems as Junior Software Test Automation Engineer.',
    image: 'img/about/epam.jpeg',
    inverted: true,
  },
  {
    year: 'September 2019',
    title: 'Not Junior!',
    description:
      'After half a year of work I was recognized as a valuable team member and after proper assessment in company I was promoted to regular Test Automation Engineer',
    image: 'img/about/3.jpg',
    inverted: false,
  },
  {
    year: 'August 2020',
    title: 'Sharing Knowledge',
    description:
      'In 2020 I started to share my knowledge and experience with people who wants to become Testers. I became a coach in "Software Development Academy" which is a bootcamp company in Poland',
    image: 'img/about/5.jpg',
    inverted: true,
  },
  {
    year: 'June 2021',
    title: 'Still getting better',
    description:
      "After coaching new testers inside and outside of company that I'm part off in June 2021 I became a Senior in my field.",
    image: 'img/about/4.jpg',
    inverted: false,
  },
  {
    year: 'June 2022',
    title: 'New Path',
    description:
      'After 3 years of beautiful journey with Epam I have started new experience in Amazon',
    image: 'img/about/AmazonDevCenter1440.jpeg',
    inverted: true,
  },
  {
    year: 'March 2023',
    title: 'Going back for further development',
    description:
      'After getting new skills I have decided to start new role in "old" company to lead testers on big part of application',
    image: 'img/about/epam.jpeg',
    inverted: false,
  },
];

const TimelineItem = ({ year, title, description, image, inverted }) => (
  <li className={inverted ? 'timeline-inverted' : ''}>
    <div className="timeline-image">
      <img
        className="rounded-circle img-fluid"
        src={image}
        alt={`${title} - ${year}`}
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
);

const Timeline = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <ul className="timeline">
          {timelineItems.map((item, index) => (
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
};

export default Timeline;
