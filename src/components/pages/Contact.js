import EnhancedContactForm from './Common/ContactForm';
import SEO from '../Common/SEO';

const Contact = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Dariusz Szyca',
    description: 'Get in touch with Dariusz Szyca for collaboration, job opportunities, or questions.',
    mainEntity: {
      '@type': 'Person',
      name: 'Dariusz Szyca',
      email: 'contact@dariuszszyca.com',
    },
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Dariusz Szyca. Contact me for collaboration opportunities, job inquiries, or to discuss test automation and DevOps projects."
        url="/contact"
        keywords="Contact Dariusz Szyca, Hire Test Automation Engineer, QA Consultant, Collaboration"
        structuredData={structuredData}
      />
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">
                Fill Contact form if you want to Contact me or share any ideas
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <EnhancedContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
