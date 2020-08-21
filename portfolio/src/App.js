// App
import React from 'react';
// import Router from 'react-router-dom';
import Header from './components/Header/index.js';
import Nav from './components/Nav/index.js';
import Portfolio from './components/Portfolio/index.js';
// import PortCard from './components/PortCard/inde.js';
import About from './components/About/index.js';
import Contact from './components/Contact/index.js';
import Footer from './components/Footer/index.js';
import './App.css';

function App() {
    return (
        <div className="App">
            {/* Header may become a Context, or something?
                if so, remember to move styles! */}
            <header className='showcase text-center'>
                <Header />
                <Nav />
            </header>
            <Portfolio />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
