import React, {Component} from 'react'

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
                            <a href={this.props.github}>
                            <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href={this.props.facebook}>
                            <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href={this.props.linkedIn}>
                            <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
        );
    }
}
export default TeamMember