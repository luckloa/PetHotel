import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

//Contents
import Home from './contents/Home';
import Services from './contents/Services';
import About from './contents/About';
import Contact from './contents/Contact';


import { BrowserRouter as Router, Route } from 'react-router-dom';



function App () {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/services'>
                    <Services />
                </Route>
                <Route exact path='/about'>
                    <About />
                </Route>
                <Route exact path='/contact'>
                    <Contact />
                </Route>
            </div>
        </Router>
    );

}

export default App;