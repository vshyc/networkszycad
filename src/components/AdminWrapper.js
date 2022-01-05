import React, {Component} from 'react';

class AdminWrapper extends Component {
    render(){
        return(
            <div id="admin-page">
                {this.props.children}
            </div>
        )
    }

}
export default AdminWrapper