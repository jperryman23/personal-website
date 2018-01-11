import React, {Component} from 'react';
// import {connect} from 'react-redux';
import '../App.css'
import Header from './Header';
import Footer from './Footer';

const myTechnologies = [
'JavaScript',
'jQuery',
'HTML 5',
'CSS3',
'Node.js',
'React',
'Redux',
'AngularJS',
'MongoDB',
'AWS',
'Handlebars.js',
'PostgreSQL',
'mySQL',
'Git Github',
'Databases',
'Express',
'OOP',
'AJAX JSON',
'Agile',
'Six Sigma',
'AWS',
'Pivitol Tracker',
'Adobe Suite',
'TDD',
'Parallax'
]

export default class Portfolio extends Component {
    constructor() {
        super()
        this.state = {
            technologies: "Technologies",


        }
    }
    render() {
        setTimeout(() => {
            const i = Math.floor(Math.random() * 25)
            this.setState({technologies: myTechnologies[i]})
            }, 1000)


        return (<div className="App">
            <Header/>

            <div className="SectionHeader">
                PORTFOLIO SECTION
            </div>
            <section className="PortfolioSection">

                <div className="projects">

                    <div>

                        <img src='../../images/portfolio/independentshowings.png' alt="independentshowings"/>

                        <p>
                            <img src='../../images/portfolio/islogo.png' alt="islogo"/>

                            Independent Showings</p>

                        <div>
                            <a href='http://www.independentshowings.com/' target='_blank' rel='noopener noreferrer'>
                                Live
                            </a>
                            <a href='https://github.com/jperryman23/independent-showings-client' target='_blank' rel='noopener noreferrer'>
                                Github
                            </a>
                        </div>

                    </div>

                    <div>
                        <img src='../../images/portfolio/mycroLens.png' alt="MycroLens"/>

                        <p>
                            <img src='../../images/portfolio/mycro-logo.jpg' alt="MycroLens"/>

                            MycroLens</p>

                        <div>
                            <a href='http://mycro.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                                Live
                            </a>

                            <a href='https://github.com/MicroNutra' target='_blank' rel='noopener noreferrer'>
                                Github
                            </a>

                        </div>

                    </div>

                    <div>
                        <img src='../../images/portfolio/the46open.png' alt="46open"/>

                        <p>
                            <img src='../../images/portfolio/the46icon.png' alt="46icon"/>

                            The 46 Open
                        </p>

                        <div>
                            <a href='https://infinite-shelf-75058.herokuapp.com/' target='_blank' rel='noopener noreferrer'>Live</a>

                            <a href='https://github.com/racket-tiers/the46open' target='_blank' rel='noopener noreferrer'>Github</a>

                        </div>

                    </div>

                    <div>

                        <img src='../../images/portfolio/jdashboard.png' alt="jdashboard"/>

                        <p>
                            <img src='../../images/portfolio/jdashboard-logo.png' alt="jdashicon"/>

                            JDesktop Extension</p>

                        <div>

                            <a href='https://chrome.google.com/webstore/detail/jdashboard/iigaakiakeknjkbpcangmaldimbmfohk' target='_blank' rel='noopener noreferrer'>
                                Live
                            </a>

                            <a href='https://github.com/jperryman23/Q1-project' target='_blank' rel='noopener noreferrer'>Github</a>

                        </div>

                    </div>

                    <div>
                        <img src='../../images/portfolio/flyakite2.png' alt="flyakite"/>
                        <p>
                            <img src='../../images/portfolio/banksylogo.png' alt="kiteicon"/>

                            Go Fly A Kite</p>

                        <div>

                            <a href='http://goflyakite.surge.sh/' target='_blank' rel='noopener noreferrer'>
                                Live
                            </a>

                            <a href='https://github.com/Tristannica/Hack-the-Planet_Team_diScreeps' target='_blank' rel='noopener noreferrer'>Github</a>

                        </div>

                    </div>

                </div>

                <div className="githubTitle">
                    {this.state.technologies}


                </div>

                {/* <div className="githubTitle">
                    <img src='../../images/portfolio/github.png' alt="githubicon" height="45px"/>
                    <a className="githubMore" href="https://github.com/jperryman23" target="_blank" rel='noopener noreferrer'>
                        View more projects on Github
                    </a>
                </div> */}

            </section>

            <Footer/>

        </div>)
    }
}
