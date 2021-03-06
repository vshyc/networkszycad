import React, {Component} from 'react'
import TeamMember from './TeamMember'

import img1 from '../../assets/img/portfolio/darek.jpeg';
import img2 from '../../assets/img/portfolio/ola.jpeg';
import img3 from '../../assets/img/portfolio/01-thumbnail.jpg';

const members = [
    {memberName: 'Aleksandra Szyca',memberWork:'Leader',img: img2,
        facebook:"https://www.facebook.com/aleksandra.goc.3", linkedIn: "https://www.linkedin.com/in/aleksandra-szyca-733318198/",
        twitter:"#"},
    {memberName: 'Dariusz Szyca',memberWork:'Developer, Tester',img: img1,
        facebook:"https://www.facebook.com/darek.szyca/", linkedIn: "https://www.linkedin.com/in/darek-szyca-903b21138/",
        twitter:"#"},
    {memberName: 'Barbara and Gabriela Szyca',memberWork:'Motivation Team',img: img3,
        facebook:"#", linkedIn: "#",
        twitter:"#"}
]


class Team extends Component {
    render(){
        return(
            <section className="bg-light page-section" id="team">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">My Amazing Team</h2>
                    <h3 className="section-subheading text-muted">The people thanks to whom I'm in this place.</h3>
                    </div>
                </div>
                        <div className="row">
                        {members.map((member,index) =>{
                                    return <TeamMember
                                        {...member} key={index}
                                    />
                                })}
                        </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                    <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                    </div>
                </div>
                </div>
            </section>
            
        );
    }
}
export default Team