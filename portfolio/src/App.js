import React from 'react';
import Hero from './components/Hero/index.js';
// import Nav from './components/Nav/index.js';
// import Portfolio from './components/Portfolio/index.js';
// import PortCard from './components/PortCard/inde.js';
// import About from './components/About/index.js';
// import Skills from './components/Skills/index.js';
// import Contact from './components/Contact/index.js';
// import Thanks from './components/Thanks/index.js';
// import Footer from './components/Footer/index.js';
import './App.css';

// just wireframing a bit. this will change a lot.
function App() {
    return (
        <div className="App">
            <div className="container">
                <header>
                    <Hero />
                    {/* <Nav /> */}
                </header>
                {/* <Portfolio />
                <About />
                <Skills />
                <Contact />
                <Thanks />
                <Footer /> */}
            </div>
        </div>
    );
};

export default App;
