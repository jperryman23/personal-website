import React, {Component} from 'react';
import '../App.css'
import Header from './Header';
import Footer from './Footer';

export default class Home extends Component {
    render() {
        return (
            <div className="App">
                <Header />


                <section className="bodySection">

                    <div>
                        <div className="bigLogo">
                            <img src="/../../images/logoLarge.png" alt="" height="450px"/>
                        </div>
                    </div>


                </section>

                <Footer/>

            </div>
        )
    }
}
