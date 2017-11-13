import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <div className="App-title">Jules Perryman | Full Stack Web Developer
                    </div>

                    <div className="App-menu">
                        <div className="Menu-item">About</div>
                        <div className="Menu-item">Portfolio</div>
                        <div className="Menu-item">Resume</div>
                        <div className="Menu-item">Contact</div>
                    </div>
                </header>
                <p className="App-intro"></p>
            </div>
        );
    }
}

export default App;
