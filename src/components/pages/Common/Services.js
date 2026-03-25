import SingleService from './SingleService';
import SEO from '../../Common/SEO';

const services = [
  { serviceName: 'E-Commerce', serviceText: '', icon: 'fa-shopping-cart' },
  { serviceName: 'Responsive Design', serviceText: '', icon: 'fa-laptop' },
  { serviceName: 'Web Security', serviceText: '', icon: 'fa-lock' },
];

const Services = () => {
  return (
    <>
      <SEO
        title="Services"
        description="Professional services offered by Dariusz Szyca including E-Commerce solutions, Responsive Design, and Web Security."
        url="/services"
        keywords="Services, E-Commerce, Responsive Design, Web Security, Test Automation Services"
      />
      <section className="page-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Services</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="row text-center">
            {services.map((service, index) => (
              <SingleService {...service} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
