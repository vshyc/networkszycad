import React,{Component} from 'react'

class Timeline extends Component{

    render(){
        return(
            <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/6.jpeg" alt=""/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>2018</h4>
                      <h4 className="subheading">First Step</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Make a decision to became a Software Tester. Starting to make use of my
                      programing skills and started a Tester with ISTQB course. </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/epam.jpeg" alt=""/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>March 2019</h4>
                      <h4 className="subheading">First Job</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Few months after getting ISTQB I spend learning Java and Testing tools.
                      I had few Job interviews and on one of them I got positive feedback and get a my first job in Epam
                        Systems as Junior Software Test Automation Engineer. </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>September 2019</h4>
                      <h4 className="subheading">Not Junior !</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">After half a year of work I was recognized as a valuable team member and
                      after proper assessment in company I was promoted to regular Test Automation Engineer</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/5.jpg" alt=""/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>August 2020</h4>
                      <h4 className="subheading">Sharing Knowlage</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">In 2020 I started to share my knowledge and experience with people who
                        wants to become Testers. I became a coach in "Software Development Academy" witch is a
                        bootcamp company in Poland  </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>June 2021</h4>
                      <h4 className="subheading">Still getting better</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">After coaching new testers inside and outside of company I'm part off in
                        June 2021 I became a Senior in my field. </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>Be Part
                      <br/>Of Our
                      <br/>Story!</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )
    }
}

export default Timeline