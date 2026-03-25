import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fade-in');

  useEffect(() => {
    if (children !== displayChildren) {
      setTransitionStage('fade-out');
    }
  }, [children, displayChildren]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleAnimationEnd = () => {
    if (transitionStage === 'fade-out') {
      setDisplayChildren(children);
      setTransitionStage('fade-in');
    }
  };

  return (
    <div
      className={`page-transition ${transitionStage}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {displayChildren}
    </div>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTransition;
