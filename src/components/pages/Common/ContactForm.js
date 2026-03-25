import { useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import Toast from '../../Common/Toast';

const ContactForm = ({ errors, touched, isSubmitting, status, setStatus }) => {
  const maxMessageLength = 500;
  const [messageLength, setMessageLength] = useState(0);

  return (
    <>
      {status?.toast && (
        <Toast
          message={status.toast.message}
          type={status.toast.type}
          onClose={() => setStatus({ ...status, toast: null })}
        />
      )}
      <Form id="contactForm" name="sentMessage">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                placeholder="Your Name *"
                className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`}
                aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
              />
              {touched.name && errors.name && (
                <p id="name-error" className="text-danger form-error" role="alert">
                  {errors.name}
                </p>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="Your Email *"
                className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
              />
              {touched.email && errors.email && (
                <p id="email-error" className="text-danger form-error" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <Field
                type="text"
                name="phone"
                id="phone"
                placeholder="Your Phone *"
                className={`form-control ${touched.phone && errors.phone ? 'is-invalid' : ''}`}
                aria-describedby={touched.phone && errors.phone ? 'phone-error' : undefined}
              />
              {touched.phone && errors.phone && (
                <p id="phone-error" className="text-danger form-error" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <Field
                component="textarea"
                name="message"
                id="message"
                placeholder="Message *"
                className={`form-control ${touched.message && errors.message ? 'is-invalid' : ''}`}
                aria-describedby={
                  touched.message && errors.message ? 'message-error' : 'message-counter'
                }
                maxLength={maxMessageLength}
                onKeyUp={(e) => setMessageLength(e.target.value.length)}
              />
              <small id="message-counter" className="form-text text-muted text-right">
                {messageLength}/{maxMessageLength} characters
              </small>
              {touched.message && errors.message && (
                <p id="message-error" className="text-danger form-error" role="alert">
                  {errors.message}
                </p>
              )}
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="col-lg-12 text-center">
            <button
              className="btn btn-primary btn-xl text-uppercase"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm mr-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Sending...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane mr-2" aria-hidden="true"></i>
                  Send Message
                </>
              )}
            </button>
          </div>
        </div>
      </Form>
    </>
  );
};

const EnhancedContactForm = withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    phone: '',
    message: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().min(3, 'Your name is too short').required('Name is required'),
    email: Yup.string().email('Not valid email').required('Email is required'),
    phone: Yup.string()
      .min(9, 'Not valid phone number')
      .max(15, 'Not valid phone number')
      .required('Phone number is required'),
    message: Yup.string()
      .min(10, 'Message is too short')
      .max(500, 'Message is too long')
      .required('Message is required'),
  }),
  handleSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs
      .send(serviceId, templateId, values, userId)
      .then(() => {
        setStatus({
          toast: {
            message: 'Message sent successfully! We will get back to you soon.',
            type: 'success',
          },
        });
        resetForm();
        setSubmitting(false);
      })
      .catch(() => {
        setStatus({
          toast: {
            message: 'Failed to send message. Please try again later.',
            type: 'error',
          },
        });
        setSubmitting(false);
      });
  },
})(ContactForm);

export default EnhancedContactForm;
