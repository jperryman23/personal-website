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
                        <div>About</div>
                        <div>Portfolio</div>
                        <div>Resume</div>
                        <div>Contact</div>
                    </div>
                </header>
                <p className="App-intro"></p>
            </div>
        );
    }
}

export default App;
