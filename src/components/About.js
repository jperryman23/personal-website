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
                ABOUT ME
            </div>

            <section className="AboutSection">
            <div className="SectionTitleAboutHeader">
                Transformational SAFe Agile Leader
            </div>


                <div className="bio">
                  Transformative, information technology leader with diverse professional experience poised to leverage a business background and technical expertise to excel as a manager and leader. Calculated business tactician with the vision and dexterity to lead enterprise implementations of scalable and interoperable information systems, while aligning business goals with technology solutions driving process improvements, maximizing workplace productivity, and generating bottom-line gains. Integrity-driven, methodical change agent with excellent communication skills effective for both executive management and technical development teams. Uses high-level critical thinking, SAFe Lean-Agile methodol- ogies, empathy and listening to empower, enable and to promote collaboration amongst cross-functional teams resulting in to superior levels of synergy, employee engagement, and efficiency. Committed to relentless improvement, continuous adaption, analysis and learning is able to streamline processes and workflows throughout the entire value stream, development life cycle and delivery of scaled technology solutions.
                </div>


                <div className="interestsBox">
                <div className="interests">
                  <div> <li> Adopted </li>       </div>
                  <div> <li> World Traveler    </li> </div>
                  <div> <li> Philanthropist     </li> </div>
                  <div> <li> Fluent Spanish     </li> </div>
                  <div> <li> Fascinated by Orcas</li> </div>
                  <div> <li> 6-Handipcap Golfer </li> </div>
                  <div> <li> Seen Mt. Everest   </li> </div>


                </div>
                <div className="quote">  <i>“A good head and a good heart are always a formidable combination.”</i> -- Nelson Mandela
                </div>

                </div>

                <div className="galvanizeLogo">

                    <div className="aboutMore">For more about me visit my personal website:
                        <u>
                            <a href="https://www.julesperryman.com" target="_blank" rel='noopener noreferrer'>
                                www.julesperryman.com
                            </a>
                        </u>
                    </div>

                    {/* <img className="g46logo" alt="logo" src='../images/g46logo.png'/> */}

                </div>

            </section>

            <Footer/>
        </div>)
    }
}
