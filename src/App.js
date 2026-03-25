import { useState, useEffect, lazy, Suspense } from 'react';
import PageWrapper from './components/PageWrapper';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoadingSpinner from './components/Common/LoadingSpinner';
import ErrorBoundary from './components/Common/ErrorBoundary';
import SkipLink from './components/Common/SkipLink';
import { validateEnv } from './utils/validateEnv';
import { useTheme } from './hooks';

// Lazy load all page components
const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const Portfolio = lazy(() => import('./components/pages/Common/Portfolio'));
const Contact = lazy(() => import('./components/pages/Contact'));
const Services = lazy(() => import('./components/pages/Common/Services'));
const Login = lazy(() => import('./components/pages/Login'));
const Registration = lazy(() => import('./components/pages/Registration'));
const Running = lazy(() => import('./components/pages/Common/Running'));
const Resume = lazy(() => import('./components/pages/Common/Resume'));
const TA = lazy(() => import('./components/pages/Common/TA'));
const DevOps = lazy(() => import('./components/pages/Common/DevOps'));
const Orienteering = lazy(() => import('./components/pages/Common/Orienteering'));
const Family = lazy(() => import('./components/pages/Common/Family'));
const Java = lazy(() => import('./components/pages/Common/Java'));
const NotFound = lazy(() => import('./components/pages/NotFound'));

// Validate environment on startup
try {
  validateEnv();
} catch (error) {
  console.error('Environment validation failed:', error);
}

// Loading fallback component
const PageLoader = () => (
  <div className="page-loader">
    <LoadingSpinner size="medium" text="Loading..." />
  </div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [resumeData, setResumeData] = useState({});
  const { theme, isDark, toggleTheme } = useTheme();

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const response = await fetch('/resumeData.json');
        const data = await response.json();
        setResumeData(data);
      } catch (error) {
        console.error('Failed to load resume data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResumeData();
  }, []);

  if (isLoading) {
    return (
      <div className="app-loading">
        <LoadingSpinner size="large" text="Loading application..." />
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <Router>
        <SkipLink />
        {/* Screen reader announcement for route changes */}
        <div
          id="route-announcement"
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
        ></div>
        
        <PageWrapper isDark={isDark} onThemeToggle={toggleTheme}>
          <main id="main-content" tabIndex="-1">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/running" element={<Running data={resumeData.run} />} />
                <Route path="/CV" element={<Resume data={resumeData.resume} />} />
                <Route path="/TA" element={<TA />} />
                <Route path="/devops" element={<DevOps />} />
                <Route path="/java" element={<Java />} />
                <Route path="/myFamily" element={<Family />} />
                <Route path="/orienteering" element={<Orienteering />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
        </PageWrapper>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
