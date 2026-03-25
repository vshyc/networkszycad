import PropTypes from 'prop-types';

const Field = ({
  name,
  type,
  placeholder,
  elementName,
  onChange,
  onBlur,
  value,
  touched,
  errors,
}) => {
  const inputId = `field-${name}`;
  const errorId = `${name}-error`;
  const hasError = touched && errors;

  return (
    <div className="form-group">
      <label htmlFor={inputId} className="sr-only">
        {placeholder.replace(' *', '')}
      </label>
      {elementName === 'input' ? (
        <input
          className="form-control"
          id={inputId}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value || ''}
          onChange={onChange}
          onBlur={onBlur}
          aria-describedby={hasError ? errorId : undefined}
          aria-invalid={hasError ? 'true' : 'false'}
        />
      ) : (
        <textarea
          className="form-control"
          id={inputId}
          placeholder={placeholder}
          name={name}
          value={value || ''}
          onChange={onChange}
          onBlur={onBlur}
          aria-describedby={hasError ? errorId : undefined}
          aria-invalid={hasError ? 'true' : 'false'}
        />
      )}
      {hasError && (
        <p id={errorId} className="help-block text-danger" role="alert">
          {errors}
        </p>
      )}
    </div>
  );
};

Field.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  elementName: PropTypes.oneOf(['input', 'textarea']).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string,
  touched: PropTypes.bool,
  errors: PropTypes.string,
};

Field.defaultProps = {
  type: 'text',
  value: '',
  touched: false,
  errors: null,
};

export default Field;
