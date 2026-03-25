// Analytics utility - ready for integration with any analytics service
// Currently just logs in development mode

const isDev = process.env.NODE_ENV === 'development';

export const analytics = {
  // Track page views
  pageView: (path, title) => {
    if (isDev) {
      console.log('[Analytics] Page View:', { path, title });
    }
    // Add your analytics provider here
    // e.g., gtag('event', 'page_view', { page_path: path, page_title: title });
  },

  // Track events
  event: (category, action, label, value) => {
    if (isDev) {
      console.log('[Analytics] Event:', { category, action, label, value });
    }
    // Add your analytics provider here
    // e.g., gtag('event', action, { event_category: category, event_label: label, value });
  },

  // Track form submissions
  formSubmit: (formName, success) => {
    if (isDev) {
      console.log('[Analytics] Form Submit:', { formName, success });
    }
  },

  // Track errors
  error: (description, fatal = false) => {
    if (isDev) {
      console.log('[Analytics] Error:', { description, fatal });
    }
  },

  // Track timing
  timing: (category, variable, value, label) => {
    if (isDev) {
      console.log('[Analytics] Timing:', { category, variable, value, label });
    }
  },

  // Track social interactions
  social: (network, action, target) => {
    if (isDev) {
      console.log('[Analytics] Social:', { network, action, target });
    }
  },
};

export default analytics;
