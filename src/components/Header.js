import React, {Component} from 'react';
import '../App.css'
// import About from './components/About';

import {
    // BrowserRouter as Router,
    // Route,
    Link
} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (<div className="App">

            <div>
                <header className="App-header">
                    <div className="App-title">
                        <div className="Title-item">
                            <img src="/../../images/logo-white.png" alt="logowhite" height="30px"/>
                        </div>
                        <div className="Title-item">Jules Perryman
                        </div>

                        {/* <div className="Title-item">| Full Stack Web Developer</div> */}
                    </div>

                    <div className="App-menu">

                        <Link to='/' className="Menu-item">
                            Home
                        </Link>

                          {/*
                        <Link to='/Portfolio' className="Menu-item">
                            Portfolio
                        </Link>
                        */}

                      {/*  <Link to='/Resume' className="Menu-item">
                            Resume
                        </Link> */}

                        <Link to='/About' className="Menu-item">
                            About
                        </Link>

                        <Link to='/Contact' className="Menu-item">
                            Contact
                        </Link>

                    </div>


                </header>
            </div>

        </div>)
    }
}
