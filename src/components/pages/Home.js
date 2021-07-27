import React, {Component} from 'react';
import Header from './Common/Header';
import img from '../../../src/components/assets/img/header-bg.jpg';
import Team from './Common/Team'

class Home extends Component{
    render(){
        return(
            <div>
            <Header
                title = "Hello my name is Dariusz Szyca!"
                subtitle = "IT'S NICE TO MEET YOU"
                buttonText = "Tell me more"
                link = "/services"
                showButton = {true}
                img= {img}
            />
            <Team/>
            </div>
        );
    }
}
export default Home;