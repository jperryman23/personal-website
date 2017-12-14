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

                    </section>



                    <Footer />

            </div>
        )
    }
}
