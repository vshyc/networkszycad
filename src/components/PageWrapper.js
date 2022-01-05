import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PageWrapper extends Component {
    render(){
        return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" style={{backgroundColor:'black'}}>
          <div className="container">
            <Link className="navbar-brand js-scroll-trigger" to="/">Dariusz Szyca</Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                  <li className="nav-item">
                      <Link id="headerHome" className="nav-link js-scroll-trigger" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                      <Link id="headerPortfolio" className="nav-link js-scroll-trigger" to="/portfolio">Portfolio</Link>
                  </li>
                  <li className="nav-item">
                      <Link id="headerAbout" className="nav-link js-scroll-trigger" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                      <Link id="headerContact" className="nav-link js-scroll-trigger" to="/contact">Contact</Link>
                  </li>
                  <li className="nav-item">
                      <Link id="headerLogin" className="nav-link js-scroll-trigger" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                      <Link id="headerRegistration" className="nav-link js-scroll-trigger" to="/registration">Registration</Link>
                  </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
        </div>
        );
    }

}

export default PageWrapper
