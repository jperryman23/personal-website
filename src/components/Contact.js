import React, {Component} from 'react';
// import {connect} from 'react-redux';
import '../App.css'
import Header from './Header';
import Footer from './Footer';


export default class Contact extends Component {
    render() {
        return (
            <div className="App">
                 <Header  />



                    <div>
                        <p> CONTACTS SECTION </p>
                    </div>

                    <Footer />

            </div>
        )
    }
}
