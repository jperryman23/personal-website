import React, {Component} from 'react';
// import {connect} from 'react-redux';
import '../App.css'
import Header from './Header';
import Footer from './Footer';

export default class Contact extends Component {
    render() {
        return (<div className="App">
            <Header/>

            <div className="SectionHeader">
                CONTACT ME
            </div>

            <section className="ContactSection">

                <div className="ContactPicture">
                    <img src='../../images/website_profile.jpg' alt="profilepic" height="300px"/>

                </div>

                <div className="ContactMethods">
                    <div>
                        <img src='../../images/contact/linkedin-icon.png' alt="linked" height="30px"/>
                        <a target="_blank" rel='noopener noreferrer' href="https://www.linkedin.com/in/julesperryman/"> LINKEDIN </a>
                    </div>

                    <div>
                        <img src='../../images/contact/github.png' alt="githubicon" height="30px"/>
                        <a target="_blank" rel='noopener noreferrer' href="https://github.com/jperryman23"> GitHub </a>
                    </div>


                    <div>
                      <img src='../../images/contact/squarespace2.png' alt="squarespace_icon" height="45px"/>
                      <a target="_blank" rel='noopener noreferrer' href="https://julesperryman.squarespace.com/"> PERSONAL SITE </a>
                    </div>

                    <div>
                      <img src='../../images/contact/phone.png' alt="phone_icon" height="30px"/>
                    Phone: +1-720-530-1459
                    </div>

                    <div>
                      <img src='../../images/contact/email.png' alt="email_icon" height="30px"/>
                        Email: jules.perryman@gmail.com
                    </div>


                </div>

            </section>

            <Footer/>

        </div>)
    }
}
