import img1 from '../../assets/img/portfolio/darek.jpeg';
import img2 from '../../assets/img/portfolio/ola.jpeg';
import img3 from '../../assets/img/portfolio/01-thumbnail.jpg';
import SEO from '../../Common/SEO';

const Family = () => {
  return (
    <>
      <SEO
        title="My Family"
        description="Meet the Szyca family - the amazing team behind Dariusz Szyca's success and motivation."
        url="/myFamily"
        keywords="Family, Szyca Family, Personal Life"
        noIndex={true}
      />
      <section className="page-section" id="family">
        <div className="container">
          <h2 className="section-heading text-uppercase">Family Tree</h2>
          <div className="tree">
            <ul>
              <li>
                <div>
                  <div className="person">
                    <img src={img1} alt="Dariusz Szyca - Father" />
                    <img src={img2} alt="Aleksandra Szyca - Mother" />
                    <p>Father & Mother</p>
                  </div>
                </div>
                <ul>
                  <li>
                    <div className="person">
                      <img src={img3} alt="Basia Szyca" />
                      <p>Basia</p>
                    </div>
                  </li>
                  <li>
                    <div className="person">
                      <img src={img3} alt="Gabi Szyca" />
                      <p>Gabi</p>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Family;
