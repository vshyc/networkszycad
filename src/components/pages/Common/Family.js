import React, {Component} from 'react'

import img1 from '../../assets/img/portfolio/darek.jpeg';
import img2 from '../../assets/img/portfolio/ola.jpeg';
import img3 from '../../assets/img/portfolio/01-thumbnail.jpg';
class Family extends Component {

    render() {
        return(
            <section className="page-section" id="family">
                <div className="container">

                    <h2 className="section-heading text-uppercase">Family Tree</h2>

                    <div className="tree">
                        <div className="person">
                            <img src= {img1} alt="Father"></img>
                                <p>Father</p>
                                <div className="line"></div>
                        </div>
                        <div className="person">
                            <img src={img2} alt="Mother"></img>
                                <p>Mother</p>
                                <div className="line"></div>
                        </div>
                        <div className="person">
                            <img src={img3} alt="Child 1"></img>
                                <p>Child 1</p>
                        </div>
                        <div className="person">
                            <img src={img3} alt="Child 2"></img>
                                <p>Child 2</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default Family