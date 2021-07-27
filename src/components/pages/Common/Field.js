import React,{Component} from 'react'

class Field extends Component {


    render(){
        return(
            <div className="form-group">
                {this.props.elementName === 'input' ?
                    <input 
                        className="form-control" 
                        id={this.props.name} 
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        required="required" 
                        data-validation-required-message={this.props.data_validation_required_message}
                        name={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                        />
                    :
                    <textarea 
                        className="form-control" 
                        id={this.props.name} 
                        placeholder={this.props.placeholder}
                        required="required" 
                        data-validation-required-message={this.props.data_validation_required_message}
                        name={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                        />
                }
                <p className="help-block text-danger"></p>
            </div>
        
        )
    }
}
export default Field