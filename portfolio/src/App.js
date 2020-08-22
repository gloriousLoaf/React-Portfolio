// App
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
// import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Navbar />
                <Wrapper>
                    <Switch >
                        <Route exact path="/" component={Portfolio} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
                </Wrapper>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
