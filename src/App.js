import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';




import {
    // BrowserRouter as Router,
    Route,
    // Link
} from 'react-router-dom'


class App extends Component {
    render() {
        return (
            <div className='App'>


            <Route exact path="/" component={Home}/>
            <Route exact path='/About' component={About}/>
            <Route exact path='/Portfolio' component={Portfolio}/>
            <Route exact path='/Resume' component={Resume}/>
            <Route exact path='/Contact' component={Contact}/>

            </div>

        );
    }
}

export default App;


// const Header = () =>
// <div>
//     <header className="App-header">
//         <div className="App-title">
//             <div className="Title-item">
//                 <img src="/../../images/logo-white.png" alt="" height="35px"/>
//             </div>
//             <div className="Title-item">J u l e s</div>
//             <div className="Title-item">P e r r y m a n </div>
//             {/* <div className="Title-item">| Full Stack Web Developer</div> */}
//         </div>
//
//         <div className="App-menu">
//             <a className="Menu-item" href='#about'>About</a>
//             <a className="Menu-item" href='#resume'>Resume</a>
//             <a className="Menu-item" href='#portfolio'>Portfolio</a>
//             <a className="Menu-item" href='#contact'>Contact</a>
//         </div>
//
//     </header>
// </div>
