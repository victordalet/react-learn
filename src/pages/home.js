import React from 'react';
import Navigation from '../components/navigation';
import Logo from '../components/logo';
import Countries from '../components/countries';

const Home = () => {
    return (
        <div>
            <Logo/>
            <Navigation />
            <Countries/>
        </div>
    );
};

export default Home;