import React, {Component} from 'react'
import {Link } from 'react-router-dom';

class SinglePortfolio extends Component{
    render(){
        return(
            <div className="col-md-4 col-sm-6 portfolio-item">
                <Link className="portfolio-link" to={this.props.portfolioModal}  >
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                            <i className="fas fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img className="img-fluid" src={this.props.img} alt=""></img>
                </Link>
            <div className="portfolio-caption">
              <h4>{this.props.title}</h4>
              <p className="text-muted">{this.props.subTitle}</p>
            </div>
          </div>
        );
    }
}

export default SinglePortfolio