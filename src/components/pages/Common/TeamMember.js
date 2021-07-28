import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class TeamMember extends Component {
    render(){
        return(
            <div className="col-sm-4">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src={this.props.img} alt=""/>
                        <h4>{this.props.memberName}</h4>
                        <p className="text-muted">{this.props.memberWork}</p>
                        <ul className="list-inline social-buttons">
                        <li className="list-inline-item">
                            <Link to="#">
                            <i className="fab fa-twitter"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#">
                            <i className="fab fa-facebook-f"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#">
                            <i className="fab fa-linkedin-in"></i>
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>
        );
    }
}
export default TeamMember