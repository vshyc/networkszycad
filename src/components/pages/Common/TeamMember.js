import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class TeamMember extends Component {
    render(){
        return(
            <div class="col-sm-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src={this.props.img} alt=""/>
                        <h4>{this.props.memberName}</h4>
                        <p class="text-muted">{this.props.memberWork}</p>
                        <ul class="list-inline social-buttons">
                        <li class="list-inline-item">
                            <Link to="#">
                            <i class="fab fa-twitter"></i>
                            </Link>
                        </li>
                        <li class="list-inline-item">
                            <Link to="#">
                            <i class="fab fa-facebook-f"></i>
                            </Link>
                        </li>
                        <li class="list-inline-item">
                            <Link to="#">
                            <i class="fab fa-linkedin-in"></i>
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>
        );
    }
}
export default TeamMember