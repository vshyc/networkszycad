import React, {Component} from 'react'
import Field from './Common/Field'
import {withFormik} from 'formik'

const fields = {
    sections:[
        [
            {name: 'name',elementName:'input',type: 'text', placeholder: 'Your Name *', data_validation_required_message:'Please enter a Name'},
            {name: 'email',elementName:'input',type: 'email', placeholder: 'Your Email *', data_validation_required_message:'Please enter a Email' },
            {name: 'phone',elementName:'input',type: 'tel', placeholder: 'Your Phone *', data_validation_required_message:'Please enter a Phone number' },
        ],
        [
            {name: 'massage',elementName:'textarea',type: 'massage', placeholder: 'Your Massage *', data_validation_required_message:'Please enter a massage'}
        ]
    ]
}

class Contact extends Component{

    submitForm = (e) => {
        alert("Form Submited :)")
    }

render(){
    return(
        <section className="page-section" id="contact">
            <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <form id="contactForm" name="sentMessage" noValidate="novalidate" onSubmit={e => this.submitForm(e)}>
                    <div className="row">                   
                        {fields.sections.map((section,indexP) =>{
                            return (
                            <div className="col-md-6" key={indexP}>
                               {section.map((field, i) =>{
                                return <Field
                                {...field} key={i}
                                value={this.props.values[field.name]}
                                name={field.name}
                                onChange={this.props.handleChange}
                                onBlur={this.props.handleBlur}
                                touched={(this.props)}
                               />})
                            }
                            </div>
                            )
                        })}                    
                    <div className="clearfix"></div>
                    <div className="col-lg-12 text-center">
                        <div id="success"></div>
                        <button  className="btn btn-primary btn-xl text-uppercase" type="submit"
                        >Send Message</button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </section>
    )
}
}

export default withFormik({
    mapPropsToValues: () => ({
        name:'',
        email:'',
        phone:'',
        massage:'',
    }),
    validate: values => {
        const errors ={};
        Object.keys(values).map(v => {
            if(!values[v]){
                errors[v] = "Required";
            }
        })
        return errors
    },
    handleSubmit: (values,{setSudmitting}) => {
        alert("Form Submited :)")
    }
})(Contact);