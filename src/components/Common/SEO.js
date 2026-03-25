import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SITE_NAME = 'Dariusz Szyca';
const DEFAULT_DESCRIPTION =
  'Dariusz Szyca - Senior Test Automation Engineer specializing in Java, Selenium, and DevOps. View my portfolio, skills, and professional journey.';
const SITE_URL = 'https://dariuszszyca.com'; // Update with actual domain
const DEFAULT_IMAGE = '/img/og-image.jpg';

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url,
  type = 'website',
  keywords = '',
  noIndex = false,
  structuredData = null,
}) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL;
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dariusz Szyca',
    jobTitle: 'Senior Test Automation Engineer',
    url: SITE_URL,
    sameAs: [
      'https://www.linkedin.com/in/darek-szyca-903b21138/',
      'https://github.com/vshyc',
      'https://www.facebook.com/darek.szyca/',
    ],
    knowsAbout: [
      'Test Automation',
      'Java',
      'Selenium',
      'DevOps',
      'CI/CD',
      'REST API Testing',
      'JUnit',
    ],
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  keywords: PropTypes.string,
  noIndex: PropTypes.bool,
  structuredData: PropTypes.object,
};

export default SEO;
