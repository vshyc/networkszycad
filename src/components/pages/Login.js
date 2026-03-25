import { withFormik } from 'formik';
import * as Yup from 'yup';
import FormPage from './Common/FormPage';
import Toast from '../Common/Toast';
import SEO from '../Common/SEO';

const fields = {
  sections: [
    [
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

const Login = (props) => {
  return (
    <>
      <SEO
        title="Login"
        description="Login to your account on Dariusz Szyca's portfolio website."
        url="/login"
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
        title="Login"
        fields={fields}
        values={props.values}
        errors={props.errors}
        touched={props.touched}
        handleChange={props.handleChange}
        handleBlur={props.handleBlur}
        handleSubmit={props.handleSubmit}
        submitButtonText="Login"
        isSubmitting={props.isSubmitting}
      />
    </>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Not valid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  }),
  handleSubmit: (values, { setSubmitting, setStatus }) => {
    setTimeout(() => {
      setStatus({
        toast: {
          message: 'Login successful! Welcome back.',
          type: 'success',
        },
      });
      setSubmitting(false);
    }, 1000);
  },
})(Login);
