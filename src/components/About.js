import React, {Component} from 'react';
// import {connect} from 'react-redux';
import '../App.css'
import Header from './Header';
import Footer from './Footer';

export default class About extends Component {
    render() {
        return (<div className="App">
            <Header/>

            <div className="SectionHeader">
                ABOUT SECTION
            </div>

            <section className="AboutSection">

                <div className="bio">

                    <div>
                        <img src='../../images/website_profile.jpg' alt="profilepic"/>
                    </div>

                    <div className="bioText">I am a full stack web developer with a business background.

                    I am interested in both front and back-end web development positions as well as cryptocurrencies and blockchain technology.

                    I enjoy collaborating on projects and am a natural leader.

                    I am passionate about innovative and unique applications and technical business solutions that, if not already, have a global presence or mindset.

                    I am a quick learner and I particularly excel at problem solving, maximizing efficiency, and creative solutions.

                    As an avid world traveler and philanthropist I love experiencing new countries and cultures.
                </div>
                </div>

                <div className="galvanizeLogo">

                    <div className="aboutMore">For more about me visit my personal website: <u>
                    <a href="https://www.julesperryman.com" target="_blank" rel='noopener noreferrer'> www.julesperryman.com </a> </u> </div>

                    <img className="g46logo"  alt="logo" src='../images/g46logo.png'/>


                </div>





            </section>

            <Footer/>
        </div>)
    }
}
