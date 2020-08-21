// Header and Nav are dependent on each other for styling
import React from 'react';
import Header from '../Header/index.js';
import Nav from '../Nav/index.js';

function HeadNav() {
    return (
        < header className='showcase text-center' >
            <Header />
            <Nav />
        </header >
    );
};

export default HeadNav;