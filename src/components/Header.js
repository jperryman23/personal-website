import React, {Component} from 'react';
import '../App.css'

import {
    // BrowserRouter as Router,
    // Route,
    // Link
} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="App">


                <div>
                    <header className="App-header">
                        <div className="App-title">
                            <div className="Title-item">
                                <img src="/../../images/logo-white.png" alt="" height="35px"/>
                            </div>
                            <div className="Title-item">J u l e s</div>
                            <div className="Title-item">P e r r y m a n </div>
                            {/* <div className="Title-item">| Full Stack Web Developer</div> */}
                        </div>

                        <div className="App-menu">
                            <a className="Menu-item" href='#about'>About</a>
                            <a className="Menu-item" href='#resume'>Resume</a>
                            <a className="Menu-item" href='#portfolio'>Portfolio</a>
                            <a className="Menu-item" href='#contact'>Contact</a>
                        </div>

                    </header>
                </div>

            </div>
        )
    }
}
