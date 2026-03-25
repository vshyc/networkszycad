import PropTypes from 'prop-types';
import Field from './Field';

const FormPage = ({
  title,
  fields,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  submitButtonText,
  isSubmitting = false,
}) => {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">{title}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form id="contactForm" name="sentMessage" noValidate onSubmit={handleSubmit}>
              <div className="row">
                {fields.sections.map((section, indexP) => (
                  <div className="col-md-6" key={indexP}>
                    {section.map((field, i) => (
                      <Field
                        {...field}
                        key={i}
                        value={values[field.name]}
                        name={field.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched[field.name]}
                        errors={errors[field.name]}
                      />
                    ))}
                  </div>
                ))}
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <div id="success"></div>
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
                        Processing...
                      </>
                    ) : (
                      submitButtonText
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

FormPage.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.shape({
    sections: PropTypes.arrayOf(PropTypes.array).isRequired,
  }).isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitButtonText: PropTypes.string.isRequired,
  isSubmitting: PropTypes.bool,
};

export default FormPage;
