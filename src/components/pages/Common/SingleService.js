import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SingleService extends Component {
render(){
    return(
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <Link className={'fas '+this.props.icon+' fa-stack-1x fa-inverse'} to={this.props.serviceName}></Link>
          </span>
          <h4 className="service-heading">{this.props.serviceName}</h4>
          <p className="text-muted">{this.props.serviceText}</p>
        </div>    
    );
}
}
export default SingleService