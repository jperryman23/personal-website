import React, {Component} from 'react';
import '../App.css'
import Header from './Header';
import Footer from './Footer';

export default class Home extends Component {
    render() {
        return (<div className="App">
            <Header/>

            <section className="HomeBodySection">

                <div className="bigLogo">
                    <img src="../../images/logoLarge.png" className="App-logo" alt="logoLarge" />
                </div>

                <div className="homeTitle">

                        FULL STACK WEB DEVELOPER

                </div>

            </section>

            <Footer/>

        </div>)
    }
}
