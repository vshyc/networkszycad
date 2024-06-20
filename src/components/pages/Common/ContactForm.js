import React from 'react';
import { withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
const ContactForm = ({
                         errors,
                         touched,
                         isSubmitting,
                     }) => (
    <Form id="contactForm" name="sentMessage">
        <div className="row">
        <div className="col-md-6" key="0">
            <div  className="form-group">
            <Field type="text" name="name" elementName="input" placeholder="Your Name *" className="form-control"/>
            {touched.name && errors.name && <p>{errors.name}</p>}
            </div>
        </div>
        <div className="col-md-6" key="1">
            <div  className="form-group">
            <Field type="email" name="email" elementName="input" placeholder="Your Email *" className="form-control"/>
            {touched.email && errors.email && <p>{errors.email}</p>}
            </div>
        </div>
        <div className="col-md-6" key="2">
            <div  className="form-group">
            <Field type="text" name="phone" elementName="input" placeholder="Your Phone *" className="form-control"/>
            {touched.phone && errors.phone && <p>{errors.phone}</p>}
            </div>
        </div>
        <div className="col-md-6" key="4">
            <div  className="form-group">
            <Field component="textarea" name="message" elementName="textarea" placeholder="Message " className="form-control"/>
            {touched.message && errors.message && <p>{errors.message}</p>}
            </div>
        </div>
            <div className="clearfix"></div>
        <div className="col-lg-12 text-center">
            <div id="success"></div>
        <button className="btn btn-primary btn-xl text-uppercase" type="submit" disabled={isSubmitting}>Send</button>
        </div>
        </div>
    </Form>
);

const EnhancedContactForm = withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .min(3, 'Your name is too short')
            .required('Name is required'),
        email: Yup.string()
            .email('Not valid email')
            .required('Email is required'),
        phone: Yup.string()
            .min(9, 'Not valid phone number')
            .max(15, 'Not valid phone number')
            .required('Phone number is required'),
        message: Yup.string()
            .required('Message is required')
    }),
    handleSubmit: (values, { setSubmitting, resetForm }) => {
        emailjs.send(
            'service_2ux18i5', // Replace with your EmailJS service ID
            'template_fmg2nzt', // Replace with your EmailJS template ID
            values,
            '1RmYph_T0xYanjApY' // Replace with your EmailJS user ID
        )
            .then(response => {
                console.log('Email sent successfully:', response.status, response.text);
                alert('Message sent successfully!');
                resetForm();
                setSubmitting(false);
            })
            .catch(error => {
                console.log('Failed to send email:', error);
                alert('Failed to send message, please try again.');
                setSubmitting(false);
            });
    }
})(ContactForm);

export default EnhancedContactForm;
