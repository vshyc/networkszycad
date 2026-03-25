import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const LazyImage = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`lazy-image-wrapper ${isLoaded ? 'loaded' : ''}`}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={className}
          onLoad={() => setIsLoaded(true)}
          {...props}
        />
      )}
      {!isLoaded && <div className="lazy-image-placeholder" aria-hidden="true" />}
    </div>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LazyImage;
