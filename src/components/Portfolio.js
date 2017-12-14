import React, {Component} from 'react';
// import {connect} from 'react-redux';
import '../App.css'
import Header from './Header';
import Footer from './Footer';

export default class Portfolio extends Component {
    render() {
        return (
            <div className="App">
                <Header  />



                    <div className="SectionHeader">
                        PORTFOLIO SECTION
                    </div>
                    <section className="PortfolioSection">



                        <div className="projects">
                            <div className='photo-grid-item'>
                              <img src='../../images/logo-white.png'/>
                              <p>TEST TEXT</p>
                            </div>

                            <div className='photo-grid-item'>
                              <img src='../../images/logo-white.png'/>
                              <p>TEST TEXT</p>
                            </div>

                            <div className='photo-grid-item'>
                              <img src='../../images/logo-white.png'/>
                              <p>TEST TEXT</p>
                            </div>

                            <div className='photo-grid-item'>
                              <img src='../../images/logo-white.png'/>
                              <p>TEST TEXT</p>
                            </div>

                            <div className='photo-grid-item'>
                          <img src='../../images/logo-white.png'/>
                          <p>TEST TEXT</p>
                          </div>

                          </div>




                          <div className="githubTitle">

                               <img src='../../images/github.png' alt="githubicon" height="35px"/>


                               <a className="githubMore" href="https://github.com/jperryman23" target="_blank"> www.julesperryman.com </a>


                          </div>



                    </section>



                    <Footer />

            </div>
        )
    }
}
