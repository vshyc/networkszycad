import { useState, useEffect, useCallback } from 'react';

const useScrollPosition = (threshold = 100) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.pageYOffset;
    setScrollY(currentScrollY);
    setIsScrolled(currentScrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { isScrolled, scrollY };
};

export default useScrollPosition;
