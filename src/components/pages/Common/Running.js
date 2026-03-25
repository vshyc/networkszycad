import PropTypes from 'prop-types';
import SEO from '../../Common/SEO';

const Running = ({ data }) => {
  const renderTableData = () => {
    if (!data?.runCompetition) return null;

    return data.runCompetition.map((competition, index) => {
      const formatLines = (text) =>
        text.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            {i < text.split('\n').length - 1 && <br />}
          </span>
        ));

      return (
        <tr key={index}>
          <td>{formatLines(competition.name)}</td>
          <td>{formatLines(competition.time)}</td>
          <td>{formatLines(competition.date)}</td>
          <td>{formatLines(competition.distance)}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <SEO
        title="Running"
        description="Dariusz Szyca's running achievements and competition results. Track running events, times, and distances."
        url="/running"
        keywords="Running, Marathon, Competition Results, Fitness, Sports, Running Events"
      />
      <section className="running">
        <div className="container">
          <h1>Latest Running Results</h1>
          <table className="blueTable">
            <thead>
              <tr>
                <th scope="col">Run Name</th>
                <th scope="col">Run Date</th>
                <th scope="col">Run Time</th>
                <th scope="col">Run Distance</th>
              </tr>
            </thead>
            <tbody>{renderTableData()}</tbody>
          </table>
        </div>
      </section>
    </>
  );
};

Running.propTypes = {
  data: PropTypes.shape({
    runCompetition: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        distance: PropTypes.string.isRequired,
      })
    ),
  }),
};

export default Running;
