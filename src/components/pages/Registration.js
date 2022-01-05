import React, {Component, useState} from "react";
import {withFormik} from 'formik'
import * as YUP from "yup";
import Field from "./Common/Field";

const fields = {
    sections:[
        [
            {name: 'First Name',elementName:'input',type: 'text', placeholder: 'Your First Name *', data_validation_required_message:'Please enter a First Name'},
            {name: 'Last Name',elementName:'input',type: 'text', placeholder: 'Your Last Name *', data_validation_required_message:'Please enter a Last Name' },
            {name: 'Login',elementName:'input',type: 'text', placeholder: 'Your Login *', data_validation_required_message:'Please enter a Login' },
            {name: 'email',elementName:'input',type: 'text', placeholder: 'Your Email *', data_validation_required_message:'Please enter a Email'},
            {name: 'password',elementName:'input',type: 'password', placeholder: 'Your Password *', data_validation_required_message:'Please enter a Password' },
        ]
    ]
}
class Registration extends Component {

    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Registration</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <form id="contactForm" name="sentMessage" noValidate="novalidate" onSubmit={this.props.handleSubmit}>
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
                                                        touched={(this.props.touched[field.name])}
                                                        errors={(this.props.errors[field.name])}
                                                    />})
                                                }
                                            </div>
                                        )
                                    })}
                                    <div className="clearfix"></div>
                                    <div className="col-lg-12 text-center">
                                        <div id="success"></div>
                                        <button  className="btn btn-primary btn-xl text-uppercase" type="submit"
                                        >Registration</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        email:'',
        password:'',
    }),
    validationSchema: YUP.object().shape({
        FirstName: YUP.string()
            .required('First Name is required'),
        LastName: YUP.string()
            .required('Last Name is required'),
        Login: YUP.string()
            .required('Password is required'),
        email: YUP.string()
            .email('Not valid email')
            .required('Email is required'),
        password: YUP.string()
            .required('Password is required')
    }),
    handleSubmit: (values,{setSubmitting}) => {
        alert("Registration successful",JSON.stringify(values))
    }})(Registration);