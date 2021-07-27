import React from 'react';
import PageWrapper from "./components/PageWrapper";
import Home from "./components/pages/Home";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from "./components/pages/About"
import './App.css';
import Portfolio from './components/pages/Common/Portfolio';
import Contact from './components/pages/Contact';
import Services from "./components/pages/Common/Services";

function App() {
    return (
        <Router>
            <PageWrapper>

                <Route
                    exact={true}
                    path="/"
                    component={Home}
                />
                <Route
                    path="/about"
                    component={About}
                />
                <Route
                    path="/portfolio"
                    component={Portfolio}
                />
                <Route
                    path="/contact"
                    component={Contact}
                />
                <Route
                    path="/services"
                    component={Services}
                />
            </PageWrapper>
        </Router>
    );
}

export default App;
