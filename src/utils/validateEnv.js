const REQUIRED_ENV_VARS = [];

const OPTIONAL_ENV_VARS = [
  'REACT_APP_EMAILJS_SERVICE_ID',
  'REACT_APP_EMAILJS_TEMPLATE_ID',
  'REACT_APP_EMAILJS_USER_ID',
];

export const validateEnv = () => {
  const missing = [];
  const warnings = [];

  // Check required variables
  REQUIRED_ENV_VARS.forEach((varName) => {
    if (!process.env[varName]) {
      missing.push(varName);
    }
  });

  // Check optional variables
  OPTIONAL_ENV_VARS.forEach((varName) => {
    if (!process.env[varName]) {
      warnings.push(varName);
    }
  });

  if (missing.length > 0) {
    console.error('Missing required environment variables:', missing.join(', '));
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }

  if (warnings.length > 0 && process.env.NODE_ENV === 'development') {
    console.warn('Missing optional environment variables:', warnings.join(', '));
    console.warn('Some features may not work correctly.');
  }

  return true;
};

export const getEnvVar = (name, defaultValue = '') => {
  return process.env[name] || defaultValue;
};

export const isProduction = () => process.env.NODE_ENV === 'production';
export const isDevelopment = () => process.env.NODE_ENV === 'development';
