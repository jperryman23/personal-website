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



                        <p> I am a full stack web developer with a background in finance and real estate. I am interested in both front and back-end web development positions both here in the US as well as abroad. </p>

                     <p>I am passionate about innovative and unique technical solutions or web applications that can be scaled globally. I am a quick learner and I particularly excel at problem solving, maximizing efficiency, and creative solutions. As an avid world traveler and photographer, I love experiencing new countries and cultures.</p>





                        <div className="interests">
                        Interests:
                        <ul>
                            <li> Web Development </li>
                            <li> Blockchain Technology </li>
                            <li> Cryptocurrencies </li>
                            <li> International Travel</li>
                            <li> Philanthropy </li>
                            <li> Golf / Tennis </li>

                        </ul>
                    </div>




                <div className="galvanizeLogo">

                    <div className="aboutMore">For more about me visit my personal website: <u>
                    <a href="https://www.julesperryman.com" target="_blank" rel='noopener noreferrer'> www.julesperryman.com </a> </u>
                    </div>

                    <img className="g46logo"  alt="logo" src='../images/g46logo.png'/>


                </div>





            </section>

            <Footer/>
        </div>)
    }
}
