import React, {Component} from 'react';
// import logo from './favicon.ico';
import logo1 from './logo-white.png';
import '../App.css'

// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'



export default class Footer extends Component {
    render() {
        return (


                <div className="splash-footer">


                    <div> &copy; Copyright 2017 </div>
                    {/* <div>  Jules Perryman</div> */}
                    <div> Full Stack Web Developer </div>
                    <div><a href="https://www.julesperryman.com"> www.julesperryman.com </a> </div>
                    {/* <div> www.julesperryman.io </div> */}
                    <div> Location: Global </div>
                    <div> <img src={logo1} className="App-logo1" alt="logo" /> </div>


                </div>


        )
    }
}
