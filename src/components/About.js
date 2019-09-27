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

                <p>
                    Transformative, information technology leader with diverse professional experience poised to leverage a business background and technical expertise to excel as a manager and leader. Calculated business tactician with the vision and dexterity to lead enterprise implementations of scalable and intero- perable information systems, while aligning business goals with technology solutions driving process improvements, maximizing workplace producti- vity, and generating bottom-line gains. Integrity-driven, methodical change agent with excellent communication skills effective for both executive management and technical development teams, who, through high-level critical thinking, SAFe Agile methodologies, and collaborating amongst cross-functional teams attains high levels of productivity, employee engagement, and increased efficiency. By continuously adapting, analyzing and learning is able to streamline processes and workflows throughout the entire implementation and installation of scaled technology solutions.
                </p>

                <p>I am passionate about innovative and unique technical solutions or web applications that can be scaled globally. I am a quick learner and I particularly excel at problem solving, maximizing efficiency, and creative solutions. As an avid world traveler and photographer, I love experiencing new countries and cultures.</p>

                 <div className="interests">
                    Interests:
                    <ul>
                        <li>
                            Web Development
                        </li>
                        <li>
                            Blockchain Technology
                        </li>
                        <li>
                            Cryptocurrencies
                        </li>
                        <li>
                            International Travel</li>
                        <li>
                            Philanthropy
                        </li>
                        <li>
                            Golf / Tennis
                        </li>

                    </ul>
                </div>


                <div className="galvanizeLogo">

                    <div className="aboutMore">For more about me visit my personal website:
                        <u>
                            <a href="https://www.julesperryman.com" target="_blank" rel='noopener noreferrer'>
                                www.julesperryman.com
                            </a>
                        </u>
                    </div>

                    <img className="g46logo" alt="logo" src='../images/g46logo.png'/>

                </div>

            </section>

            <Footer/>
        </div>)
    }
}
