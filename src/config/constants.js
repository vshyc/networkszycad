// Site Configuration
export const SITE_CONFIG = {
  name: 'Dariusz Szyca',
  title: 'Senior Test Automation Engineer',
  url: 'https://dariuszszyca.com',
  email: 'contact@dariuszszyca.com',
  description: 'Senior Test Automation Engineer specializing in Java, Selenium, DevOps, and CI/CD.',
};

// Social Links
export const SOCIAL_LINKS = {
  github: 'https://github.com/vshyc',
  linkedin: 'https://www.linkedin.com/in/darek-szyca-903b21138/',
  facebook: 'https://www.facebook.com/darek.szyca/',
};

// Navigation Links
export const NAV_LINKS = [
  { path: '/', label: 'Home', id: 'headerHome' },
  { path: '/portfolio', label: 'Portfolio', id: 'headerPortfolio' },
  { path: '/about', label: 'About', id: 'headerAbout' },
  { path: '/contact', label: 'Contact', id: 'headerContact' },
];

// Route Labels for Breadcrumbs
export const ROUTE_LABELS = {
  '': 'Home',
  about: 'About',
  portfolio: 'Portfolio',
  contact: 'Contact',
  services: 'Services',
  login: 'Login',
  registration: 'Registration',
  running: 'Running',
  CV: 'Resume',
  TA: 'Test Automation',
  devops: 'DevOps',
  java: 'Java',
  myFamily: 'Family',
  orienteering: 'Orienteering',
};

// Form Validation
export const VALIDATION = {
  name: { min: 3, max: 50 },
  email: { max: 100 },
  phone: { min: 9, max: 15 },
  message: { min: 10, max: 500 },
  password: { min: 8, max: 128 },
};

// Theme Colors
export const THEME = {
  primary: '#fed136',
  primaryDark: '#fec503',
  dark: '#212529',
  light: '#f8f9fa',
  white: '#ffffff',
  danger: '#dc3545',
  success: '#28a745',
};

// Animation Durations (ms)
export const ANIMATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
};

// Breakpoints
export const BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};
