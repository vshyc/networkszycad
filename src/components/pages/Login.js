import React, {Component, useState} from "react";
import {withFormik} from 'formik'
import * as YUP from "yup";
import Field from "./Common/Field";

const fields = {
    sections:[
        [
            {name: 'email',elementName:'input',type: 'text', placeholder: 'Your Email *', data_validation_required_message:'Please enter a Email'},
            {name: 'password',elementName:'input',type: 'password', placeholder: 'Your Password *', data_validation_required_message:'Please enter a Password' },
        ]
    ]
}
class Login extends Component {

    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Login</h2>
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
                                        >Login</button>
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
        email: YUP.string()
            .email('Not valid email')
            .required('Email is required'),
        password: YUP.string()
            .required('Password is required')
    }),
    handleSubmit: (values,{setSubmitting}) => {
        alert("Form Submited :)",JSON.stringify(values))
    }})(Login);