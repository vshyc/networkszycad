import React, {Component} from 'react';
import SinglePortfolio from './SinglePortfolio';


import img1 from '../../assets/img/portfolio/01-thumbnail.jpg';
import java from '../../assets/img/portfolio/java.jpeg';
import restAssured from '../../assets/img/portfolio/restAssured.png';
import gaming from '../../assets/img/portfolio/gaming.jpeg';
import devops from '../../assets/img/portfolio/devops.png';
import family from '../../assets/img/portfolio/family.jpeg';
import run from '../../assets/img/portfolio/run.jpeg';
import img2 from '../../assets/img/portfolio/02-thumbnail.jpg';
import img3 from '../../assets/img/portfolio/03-thumbnail.jpg';
import img4 from '../../assets/img/portfolio/04-thumbnail.jpg';
import img5 from '../../assets/img/portfolio/05-thumbnail.jpg';

const techonologies = [
    {title: 'CV',subTitle: 'Education and Work Journey', img: img2, portfolioModal: "/CV"},
    {title: 'Tester',subTitle: 'The Journey',img: img1, portfolioModal: "/about"},
    {title: 'Java',subTitle: 'Main Language', img: java, portfolioModal: "/java"},
    {title: 'TA',subTitle: 'Test Automation', img: restAssured, portfolioModal: "/ta" },
    {title: 'DevOps',subTitle: 'Grow in DevOps', img: devops, portfolioModal: "/devops" }
]
const freeTime = [
    {title: 'Family',subTitle: 'Family is always first',img: family, portfolioModal: "/myFamily"},
    {title: 'Sport',subTitle: 'Running , Cycling, Gym', img: run, portfolioModal: "/running"},
    {title: 'Gaming',subTitle: "As I'm older this part is less important", img: gaming, portfolioModal: "/gaming"},
]


class Portfolio extends Component{
    render(){
        return(
            <section className="bg-light page-section" id="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">My Work</h2>
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
                            <h2 className="section-heading text-uppercase">Free Time</h2>
                            <h3 className="section-subheading text-muted">What I am in free time.</h3>
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