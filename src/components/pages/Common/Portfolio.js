import React, {Component} from 'react';
import SinglePortfolio from './SinglePortfolio';


import img1 from '../../assets/img/portfolio/01-thumbnail.jpg';
import img2 from '../../assets/img/portfolio/02-thumbnail.jpg';
import img3 from '../../assets/img/portfolio/03-thumbnail.jpg';
import img4 from '../../assets/img/portfolio/04-thumbnail.jpg';
import img5 from '../../assets/img/portfolio/05-thumbnail.jpg';
import img6 from '../../assets/img/portfolio/06-thumbnail.jpg';

const techonologies = [
    {title: 'Java',subTitle: 'The Journey',img: img1, portfolioModal: "/about"},
    {title: 'JS',subTitle: 'Graphic Design', img: img2},
    {title: 'Kubernetes',subTitle: 'Identity', img: img3},
    {title: 'Lines',subTitle: 'Branding', img: img4},
    {title: 'Southwest',subTitle: 'Website Design', img: img5},
    {title: 'Window',subTitle: 'Photography', img: img6},

]
const freeTime = [
    {title: 'Family',subTitle: 'Illustration',img: img1, portfolioModal: "/myFamily"},
    {title: 'Running',subTitle: 'Running Results', img: img2, portfolioModal: "/running"},
    {title: 'Gaming',subTitle: 'Identity', img: img3},
]


class Portfolio extends Component{
    render(){
        return(
            <section className="bg-light page-section" id="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">Technologies</h2>
                  <h3 className="section-subheading text-muted">The stuff that I'm working on</h3>
                </div>
              </div>
              <div className="row">
              {techonologies.map((item,indexP) =>{
                            return <SinglePortfolio
                                {...item} key={indexP}
                            />
                        })}

              </div>
            </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        {freeTime.map((item,indexP) =>{
                            return <SinglePortfolio
                                {...item} key={indexP}
                            />
                        })}

                    </div>
                </div>
          </section>
        );
    }
}

export default Portfolio