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
        return (
            <div className="App">


                <div>
                    <header className="App-header">
                        <div className="App-title">
                            <div className="Title-item">
                                <img src="/../../images/logo-white.png" alt="" height="30px"/>
                            </div>
                            <div className="Title-item">Jules Perryman </div>

                            {/* <div className="Title-item">| Full Stack Web Developer</div> */}
                        </div>


                <div className="App-menu">

                    <Link to='/' className="Menu-item" >
                        Home
                    </Link>

                <Link to='/About' className="Menu-item" >
                    About
                </Link>

                <Link to='/Resume' className="Menu-item" >
                    Resume
                </Link>

                <Link to='/Portfolio' className="Menu-item" >
                    Portfolio
                </Link>
                <Link to='/Contact' className="Menu-item" >
                    Contact
                </Link>

            </div>

                        {/* <div className="App-menu">
                            <a className="Menu-item" href='/about'>About</a>
                            <a className="Menu-item" href='/resume'>Resume</a>
                            <a className="Menu-item" href='/portfolio'>Portfolio</a>
                            <a className="Menu-item" href='/contact'>Contact</a>
                        </div> */}

                    </header>
                </div>

            </div>
        )
    }
}
