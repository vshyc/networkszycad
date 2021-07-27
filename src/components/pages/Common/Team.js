import React, {Component} from 'react'
import TeamMember from './TeamMember'

import img1 from '../../assets/img/portfolio/01-thumbnail.jpg';
import img2 from '../../assets/img/portfolio/02-thumbnail.jpg';
import img3 from '../../assets/img/portfolio/03-thumbnail.jpg';

const members = [
    {memberName: 'Ja',memberWork:'Leader',img: img1},
    {memberName: 'Nie ja',memberWork:'Programer',img: img2},
    {memberName: 'Wiecej nie ja',memberWork:'Tester',img: img3}
]


class Team extends Component {

    render(){
        return(
            <section className="bg-light page-section" id="team">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
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