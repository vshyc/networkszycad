import React, {Component} from 'react'
import Header from './Common/Header'
import img from '../assets/img/city-street.jpg'
import Timeline from './Common/Timeline'

class About extends Component {
    render () {
        return (
    <div>   
              <Header
                title = "About Us!"
                subtitle = "IT'S ME!"
                img= {img}
            />   
  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
          <Timeline/>
    </div>
  </section>
  </div>         
        );
    }
}
export default About