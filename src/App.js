import React, {Component} from 'react';
import PageWrapper from "./components/PageWrapper";
import Home from "./components/pages/Home";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from "./components/pages/About"
import './App.css';
import Portfolio from './components/pages/Common/Portfolio';
import Contact from './components/pages/Contact';
import Services from "./components/pages/Common/Services";
import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";
import Running from "./components/pages/Common/Running";
import Resume from "./components/pages/Common/Resume";
import $ from 'jquery';

class App extends Component {
    state = {
        isLoading: false,
        groups: [],
        resumeData: {},
        runData: {}
    };
    getResumeData(){
        $.ajax({
            url:'/resumeData.json',
            dataType:'json',
            cache: false,
            success: function(data){
                this.setState({resumeData: data});
            }.bind(this),
            error: function(xhr, status, err){
                console.log(err);
                alert(err);
            }
        });
    }

    async componentDidMount() {
        const response = await fetch('/api/groups');
        this.getResumeData();
        const body = await response.json();
        this.setState({groups: body, isLoading: false});
    }

    render() {
        const {groups, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }
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
                    <Route
                        path="/login"
                        component={Login}
                    />
                    <Route
                        path="/registration"
                        component={Registration}
                    />
                    <Route
                        path="/running"
                        component={() => <Running data={this.state.resumeData.run}/>}
                    />
                    <Route
                        path="/CV"
                        component={() => <Resume data={this.state.resumeData.resume}/>}
                    />
                </PageWrapper>


            </Router>
        );
    }
}
export default App;
