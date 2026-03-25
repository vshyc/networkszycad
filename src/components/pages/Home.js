import Header from './Common/Header';
import img from '../assets/img/header-bg.jpg';
import Team from './Common/Team';
import SEO from '../Common/SEO';

const Home = () => {
  return (
    <div>
      <SEO
        title="Home"
        description="Welcome to Dariusz Szyca's portfolio. Senior Test Automation Engineer specializing in Java, Selenium, DevOps, and CI/CD pipelines."
        url="/"
        keywords="Dariusz Szyca, Test Automation Engineer, Java Developer, Portfolio, QA Engineer"
      />
      <Header
        title="Hello my name is Dariusz Szyca!"
        subtitle="IT'S NICE TO MEET YOU"
        buttonText="Tell me more"
        link="/about"
        showButton={true}
        img={img}
      />
      <Team />
    </div>
  );
};

export default Home;
