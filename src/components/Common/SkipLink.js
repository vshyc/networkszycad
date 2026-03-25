import { memo } from 'react';

const SkipLink = memo(() => {
  return (
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
  );
});

SkipLink.displayName = 'SkipLink';

export default SkipLink;
