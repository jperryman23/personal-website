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
                    <div>
                        <p> RESUME SECTION </p>
                    </div>


                <Footer />
                

            </div>
        )
    }
}
