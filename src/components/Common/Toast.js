import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Toast = ({ message, type, onClose, duration = 4000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return 'fa-check-circle';
      case 'error':
        return 'fa-exclamation-circle';
      case 'warning':
        return 'fa-exclamation-triangle';
      default:
        return 'fa-info-circle';
    }
  };

  return (
    <div className={`toast-notification toast-${type}`} role="alert" aria-live="polite">
      <i className={`fas ${getIcon()}`} aria-hidden="true"></i>
      <span className="toast-message">{message}</span>
      <button
        className="toast-close"
        onClick={onClose}
        aria-label="Close notification"
        type="button"
      >
        <i className="fas fa-times" aria-hidden="true"></i>
      </button>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
};

export default Toast;
