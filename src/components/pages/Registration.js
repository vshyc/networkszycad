import { withFormik } from 'formik';
import * as Yup from 'yup';
import FormPage from './Common/FormPage';
import Toast from '../Common/Toast';
import SEO from '../Common/SEO';

const fields = {
  sections: [
    [
      {
        name: 'firstName',
        elementName: 'input',
        type: 'text',
        placeholder: 'Your First Name *',
      },
      {
        name: 'lastName',
        elementName: 'input',
        type: 'text',
        placeholder: 'Your Last Name *',
      },
      {
        name: 'login',
        elementName: 'input',
        type: 'text',
        placeholder: 'Your Login *',
      },
      {
        name: 'email',
        elementName: 'input',
        type: 'text',
        placeholder: 'Your Email *',
      },
      {
        name: 'password',
        elementName: 'input',
        type: 'password',
        placeholder: 'Your Password *',
      },
    ],
  ],
};

// Props are injected by withFormik HOC
/* eslint-disable react/prop-types */
const Registration = (props) => {
  return (
    <>
      <SEO
        title="Registration"
        description="Create an account on Dariusz Szyca's portfolio website."
        url="/registration"
        noIndex={true}
      />
      {props.status?.toast && (
        <Toast
          message={props.status.toast.message}
          type={props.status.toast.type}
          onClose={() => props.setStatus({ ...props.status, toast: null })}
        />
      )}
      <FormPage
        title="Registration"
        fields={fields}
        values={props.values}
        errors={props.errors}
        touched={props.touched}
        handleChange={props.handleChange}
        handleBlur={props.handleBlur}
        handleSubmit={props.handleSubmit}
        submitButtonText="Register"
        isSubmitting={props.isSubmitting}
      />
    </>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    login: '',
    email: '',
    password: '',
  }),
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    login: Yup.string().required('Login is required'),
    email: Yup.string().email('Not valid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  }),
  handleSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
    setTimeout(() => {
      setStatus({
        toast: {
          message: 'Registration successful! You can now login.',
          type: 'success',
        },
      });
      resetForm();
      setSubmitting(false);
    }, 1000);
  },
})(Registration);
