import { memo } from 'react';
import PropTypes from 'prop-types';

const ThemeToggle = memo(({ isDark, onToggle }) => {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      type="button"
    >
      <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true"></i>
    </button>
  );
});

ThemeToggle.displayName = 'ThemeToggle';

ThemeToggle.propTypes = {
  isDark: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ThemeToggle;
