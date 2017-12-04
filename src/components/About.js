import React, {Component} from 'react';
// import {connect} from 'react-redux';
import '../App.css'
import Header from './Header';
import Footer from './Footer';

export default class About extends Component {
    render() {
        return (
            <div className="App">
                <Header  />

                <div className="SectionHeader">
                 ABOUT SECTION
                </div>
<section className="AboutSection">

                    <div>
                        <p> I am a full stack web developer with a business background.
                        <br></br>
                        I am interested in both front and back-end web development positions
                        <br></br>
                        as well as cryptocurrencies and blockchain technology.
                        <br></br>
                        I enjoy collaborating on projects and am a natural leader.
                        I am passionate about innovative and unique applications that, if not already, have a global presence or mindset.
                        <br></br>
                     Particularly, I excel at learning quickly, problem solving, maximizing efficiency, and creative solutions.
                     <br></br>As an avid world traveler and philanthropist I love experiencing new cultures and environments. </p>
                    </div>

</section>

                <Footer />
            </div>
        )
    }
}
