import React, {Component} from 'react';
// import {connect} from 'react-redux';
import '../App.css'
import Header from './Header';
import Footer from './Footer';

export default class Portfolio extends Component {
    render() {
        return (<div className="App">
            <Header/>

            <div className="SectionHeader">
                PORTFOLIO SECTION
            </div>
            <section className="PortfolioSection">

                <div className="projects">

                    <div>
                        <a href='https://www.independentshowings.com/' target='_blank' rel='noopener noreferrer'>

                            <img src='../../images/independentshowings.png' alt="independentshowings"/>

                            <p>
                                <img src='../../images/islogo.png' alt="islogo"/>

                                Independent Showings</p>

                            <div>View Live</div>

                        </a>

                    </div>

                    <div>
                        <a href='http://www.mycro.herokuapp.com/' target='_blank' rel='noopener noreferrer'>

                            <img src='../../images/MycroLens.png' alt="MycroLens"/>

                            <p>
                                <img src='../../images/mycro-logo.jpg' alt="MycroLens"/>

                                MycroLens</p>

                            <div>
                                View Live
                            </div>

                        </a>

                    </div>

                    <div>
                        <a href='https://infinite-shelf-75058.herokuapp.com/' target='_blank' rel='noopener noreferrer'>

                            <img src='../../images/the46open.png' alt="46open"/>

                            <p>
                                <img src='../../images/the46icon.png' alt="46icon"/>

                                The 46 Open
                            </p>

                            <div>View Live</div>

                        </a>

                    </div>

                    <div>
                        <a href='https://chrome.google.com/webstore/detail/jdashboard/iigaakiakeknjkbpcangmaldimbmfohk' target='_blank' rel='noopener noreferrer'>

                            <img src='../../images/jdashboard.png' alt="jdashboard"/>

                            <p>
                                <img src='../../images/jdashboard-logo.png' alt="jdashicon"/>

                                JDesktop Extension</p>

                            <div>View Live</div>

                        </a>

                    </div>

                </div>

                <div className="githubTitle">
                    <img src='../../images/github.png' alt="githubicon" height="45px"/>
                    <a className="githubMore" href="https://github.com/jperryman23" target="_blank" rel='noopener noreferrer'>
                        View these projects on Github
                    </a>
                </div>

            </section>

            <Footer/>

        </div>)
    }
}
