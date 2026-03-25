import { useState, useEffect } from 'react';
import PageWrapper from './components/PageWrapper';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import './App.css';
import Portfolio from './components/pages/Common/Portfolio';
import Contact from './components/pages/Contact';
import Services from './components/pages/Common/Services';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import Running from './components/pages/Common/Running';
import Resume from './components/pages/Common/Resume';
import TA from './components/pages/Common/TA';
import DevOps from './components/pages/Common/DevOps';
import Orienteering from './components/pages/Common/Orienteering';
import Family from './components/pages/Common/Family';
import Java from './components/pages/Common/Java';
import NotFound from './components/pages/NotFound';
import LoadingSpinner from './components/Common/LoadingSpinner';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [resumeData, setResumeData] = useState({});

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
    <Router>
      <PageWrapper>
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
      </PageWrapper>
    </Router>
  );
};

export default App;
