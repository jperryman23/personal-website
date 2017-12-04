import React, {Component} from 'react';
// import {connect} from 'react-redux';
import '../App.css'
import Header from './Header';
import Footer from './Footer';

export default class Resume extends Component {
    render() {
        return (
            <div className="App">
                <Header  />
                    <div className="SectionHeader">
                        RESUME SECTION
                    </div>

                    <section className="ResumeSection">
                  <object width="1100" height="575" data="../../images/JulesPerryman-Resume.pdf" className="resume"></object>

                    </section>

                <Footer />


            </div>
        )
    }
}
