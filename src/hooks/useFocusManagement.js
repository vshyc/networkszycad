import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const useFocusManagement = () => {
  const location = useLocation();
  const mainContentRef = useRef(null);

  useEffect(() => {
    // Focus main content on route change for accessibility
    if (mainContentRef.current) {
      mainContentRef.current.focus();
    }
    
    // Announce page change to screen readers
    const pageTitle = document.title;
    const announcement = document.getElementById('route-announcement');
    if (announcement) {
      announcement.textContent = `Navigated to ${pageTitle}`;
    }
  }, [location.pathname]);

  return mainContentRef;
};

export default useFocusManagement;
